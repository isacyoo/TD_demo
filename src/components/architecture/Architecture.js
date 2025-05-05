"use client"

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ALink from "@/components/common/ALink"

export default function Architecture() {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const cards = [
                    <Card>
                        <CardHeader>
                        <CardTitle>[1] Web application / Control plane</CardTitle>
                        <CardDescription>This component includes the web applications for the frontend and the backend of the service.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>ALB:</strong> Distributes the traffic to EC2 instances where the containerised applications are hosted.</li>
                                <li><strong>Nginx:</strong> Acts as an API gateway for each EC2 instance.</li>
                                <li><strong>NextJS:</strong> Frontend application that communicates with the backend server and renders the response.</li>
                                <li><strong>Flask:</strong> Backend server that communicates with the database as well as AWS services that run in the background, such as SQS queues and Lambda functions.</li>
                            </ul>
                        </CardContent>
                    </Card>,
                    <Card>
                        <CardHeader>
                            <CardTitle>[2] Read from IP Camera and push to KVS</CardTitle>
                            <CardDescription> Using EventBridge Scheduler, ECS Fargate and KVS</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>The architecture must meet the following requirements:</p>
                            <Card className="bg-secondary/10 p-4 my-4">
                                <ol className="space-y-2 list-[lower-alpha] list-inside">
                                    <li>A process that reads IP Camera stream should not have to run 24/7, but must be able to operate based on a schedule in order to offer cost-effective solution.</li>
                                    <li>The stream needs to be persisted for a certain amount of time so that a video clip can be created asynchronously when a member enters.</li>
                                    <li>The users must be able to change the stream retention period easily, and it should not require any actions from the system administrator.</li>
                                    <li>The users must be able to change the schedule easily, and it should not involve any actions from the system administrator.</li>
                                    <li>The processes must automatically scale in and out horizontally as new cameras enter operational hours and operational hours end for running cameras.</li>
                                    <li>The processes must have a fixed set of public IPs as IP cameras can have Access Control Lists.</li>
                                </ol>
                            </Card>
                            <p className="my-4"><strong>KVS:</strong> Using <ALink href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/what-is-kinesis-video.html" blank >Amazon Kinesis Video Streams</ALink> lets us meet requirement <strong>b</strong>, as it offers <ALink href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetClip.html" blank>GetClip</ALink> API that allows users to create a clip from a KVS stream for a given time range. It also meets requirement <strong>c</strong> as users can easily change the stream retention period.</p>
                            <p className="my-4"><strong>ECS Fargate:</strong> In order to persist an IP camera stream in KVS, it requires a process that reads from the camera and pushes to KVS. This can be done using this <ALink href="https://github.com/awslabs/amazon-kinesis-video-streams-producer-sdk-cpp" blank>kvs-producer-sdk</ALink> written in C++. Containerising this process and running using <ALink href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html" blank>ECS Fargate</ALink> lets us meet requirement <strong>e</strong> as Fargate is Serverless and can scale in and out horizontally. A custom docker image has been created, which consists of a step that checks any existing ECS jobs for the same stream, a step that sets the timeout for the duration of the operational hour, a step that starts a supervisord process to start and self-heal the process that reads from the camera and pushes to KVS.</p>
                            <p className="my-4"><strong>EventBridge Scheduler:</strong> Requirements <strong>a</strong> and <strong>d</strong> are met using <ALink href="https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html" blank>EventBridge Scheduler</ALink>, which can create cron schedules that can interact with various AWS services. The schedule will start an ECS task with the task definition described above. Creation and modification of schedules are done using an SQS queue and a Lambda function. When a user modifies the schedule from the frontend UI, the UI will immediately display the updated schedule, and in the background, the Lambda function will update the schedule accordingly.</p>
                            <p className="my-4"><strong>NAT Gateway:</strong> Using a <ALink href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html" blank>NAT Gateway</ALink> allows us to meet requirement <strong>f</strong>, by unifying the outbound IP to that of the NAT Gateway. Customers can add a certain set of IPs, those of the NAT Gateways, to the Access Control List to use the service while not increasing the security risk.</p>
                        </CardContent>
                    </Card>,
                    <Card>
                        <CardHeader>
                            <CardTitle>[3] Create clips on entry using SQS, Lambda and S3 trigger</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>When a user enters the facility, a webhook <span className="text-primary/50">(POST /entry)</span> triggers a pipeline to create and validate video clips, which are stored in S3 for visualisation and processing.</p>
                            <Card className="my-4 p-4">
                                <ol className="list-decimal list-inside space-y-2">
                                    <li>The webhook adds a message to a SQS queue which invokes a Lambda function</li>
                                    <li>The Lambda function creates a clip from the KVS stream using the <ALink href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetClip.html" blank>GetClip</ALink> API, and stores it in S3</li>
                                    <li>On upload, the prefix the clip is stored in triggers another Lambda function using an S3 event notification.</li>
                                    <li>The next Lambda function processes the video clip and produces a SD and a HD copy of the original video, which are saved in a different prefix</li>
                                    <li>The SD videos are used for processing, while the HD videos are used for visualisation</li>
                                </ol>
                            </Card>
                        </CardContent>
                    </Card>,
                    <Card>
                        <CardHeader>
                            <CardTitle>[4] Process videos using Deep learning Computer Vision algorithms</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>EC2 Spot GPU Instances process video clips using deep learning-based custom object tracking algorithm to detect tailgating.</p>
                        </CardContent>
                    </Card>


    ]
    return (
        <div className="space-y-4 w-full mb-8">
            <div className="flex justify-between">
                <Button variant="secondary" size="sm" onClick={() => setCurrentIndex((currentIndex - 1 + cards.length) % cards.length)}>Previous</Button>
                <Button variant="secondary" size="sm" onClick={() => setCurrentIndex((currentIndex + 1) % cards.length)}>Next</Button>
            </div>
            {cards[currentIndex]}
        </div>
  );
}