import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"
import ALink from "@/components/common/ALink"

export default function SchedulePage() {
    return (
            <Card>
                <CardHeader>
                    <CardTitle>Schedule</CardTitle>
                    <CardDescription>Adjust the system's operational schedule for a location</CardDescription>
                    <CardDescription className="text-xs">/settings/schedule/[locationId]</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-8">
                        <p>This page allows user to make changes to the schedule TAILDET-AI operates based on for a location, by adding, modifying and deleting "Runs". A run consists of the following elements:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Day of the week:</strong> This includes standard days of week as well as public holidays. See snippet below</li>
                            <li><strong>Start time:</strong> The time the system starts operating</li>
                            <li><strong>Duration:</strong> The amount of time in hours the run lasts</li>
                        </ul>
                        <Image src="/schedule.png" alt="Manage operational schedule" className="rounded-md" height={0} width={0} style={{ width: "100%", height: "auto"}} />
                        <p>
                            Once the user has made modification to the schedule, the EventBridge Scheduler schedules associated with the locations will be updated, which runs a fargate container for the duration of the run. The fargate container reads from the IP camera and pushes the stream to Kinesis Video Stream, which persists the stream to be used by the Lambda function to create clips on entry. See <ALink href="/architecture">Architecture</ALink> to learn more about the architecture of the system.
                        </p>
                        <p>
                            Clicking on the <strong>Add run</strong> will open a modal that allows the user to add a new run. The user can select the start time and duration of the run.
                        </p>
                        <Image src="/add-run.png" alt="Add run" className="rounded-md" height={0} width={0} style={{ width: "100%", height: "auto"}} />
                        <p>
                            This schedule editor will detect any invalid schedules and will immediately notify the user and will not allow the user to save the schedule if any. There are two types of invalid schedules:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Malformed schedule:</strong> When the runs are missing necessary components like start time and duration, or the JSON input itself is malformed when using the API.</li>
                            <li><strong>Overlapping runs:</strong> When the runs overlap with each other, meaning that the start time of one run is within the duration of another run. For example:</li>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>DoW = Monday, Start time = 09:00, Duration = 8 hours</li>
                                <li>DoW = Monday, Start time = 13:00, Duration = 8 hours</li>
                            </ul>
                            <p>In this case, the second run overlaps with the first run, as it starts at 13:00, which is within the duration of the first run (09:00 to 17:00).</p>
                            <p>
                                Similarly, the following example will also be invalid:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>DoW = Monday, Start time = 20:00, Duration = 8 hours</li>
                                <li>DoW = Tuesday, Start time = 01:00, Duration = 8 hours</li>
                            </ul>
                            <p>In this case, the second run overlaps with the first run, as it starts at 01:00, which is within the duration of the first run (20:00 to 04:00).</p>

                        </ul>
                    </div>
                </CardContent>
            </Card>
    )
}