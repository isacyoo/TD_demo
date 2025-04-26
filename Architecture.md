# Tailgating Detection Architecture

## Diagram
![alt text](./tailgating_detection_architecture.png)

## [1] Web application cluster
This component includes the web applications for the frontend and the backend of the service

### ALB
Distributes the traffic to EC2 instances where the containerised applications are hosted.

### Nginx
Acts as an API gateway for each EC2 instance

### NextJS
Frontend application that communicates with the backend server and render the response

### Flask
Backend server that communicates with the database as well as AWS services that run in the background, such as SQS queues and Lambda functions.

## [2] Read IP Camera using EventBridge Scheduler, ECS Fargate and KVS
The architecture must meet the following requirements.

**a.** An IP Camera ingestion process must operate based on a schedule, as it is not cost-effective to continue running the processes during staffed hours.

**b.** The video footage needs to be persisted for a certain amount of time so that a video clip can be created asynchronously when a member enters.

**c.** The users must be able to change the stream retention period easily, and it should not require any actions from the system administrator.

**d.** The users must be able to change the schedule easily, and it should not involve any actions from the system administrator.

**e.** The processes must automatically scale in and out horizontally as new cameras enter operational hours and operational hours end for running cameras.

**f.** The processes must have a fixed set of public IPs as IP cameras can have Access Control Lists.

### KVS
Using [Amazon Kinesis Video Streams](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/what-is-kinesis-video.html) lets us meet requirement **b**, as it offers [GetClip](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetClip.html) API that allows users to create a clip from a KVS stream for a given time range.

It also meets requirement **c** as users can easily change the stream retention period.

### ECS Fargate

In order to persist an IP camera stream in KVS, it requires a process that reads from the camera and pushes to KVS. This can be done using this [kvs-producer-sdk](https://github.com/awslabs/amazon-kinesis-video-streams-producer-sdk-cpp) written in C++.

Containerising this process and running using [ECS Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html) lets us meet requirment **e** as Fargate is Serverless and can scale in and out horizontally.

A custom docker image has been created, which consists of a step that checks any existing ECS jobs for the same stream, a step that sets the timeout for the duration of the operational hour, a step that starts a supervisord process to start and self-heal the process that reads from the camera and pushes to KVS.

### EventBridge Scheduler

Requirements **a** and **d** are met using [EventBridge Scheduler](https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html), which can create cron schedule that invokes various AWS services. The schedule will start an ECS task with the task definition described above.

Creation and modification of schedules are done using a SQS queue and a Lambda function. When a user modifies the schedule from the frontend UI, the UI will immediately display the updated schedule, and in the background, the Lambda function will update the schedule accordingly.

### NAT Gateway

Using a [NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) allows us to meet requirement **f**, by unifying the outbound IP to that of the NAT Gateway. Customers can add a certain set of IPs, those of the NAT Gateways, to the Access Control List to use the service while not increasing the security risk.

## [3] Create clips on entry using SQS, Lambda and S3 trigger

When a user enters the facility, webhook is called to inform the backend server. This adds a message in the SQS Queue, which invokes a Lambda function that calls [GetClip](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetClip.html) API to create a mp4 file. This raw file is uploaded to S3.

The prefix in which raw files are uploaded has a [S3 trigger](https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html), which invokes another Lambda function. This validates the file uploaded, resizes to HD and SD, and uploads both files to S3. HD files are used for visualisation, while SD files are used for processing.

## [4] Process videos using Deep learning Computer Vision algorithms

EC2 Spot GPU Instances are used to process video clips created by the Lambda functions in [3]. They use deep learning based object tracking algorithm with additional post-processing to determine whether there is any tailgating happening.