import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"
import ALink from "@/components/common/ALink"

export default function ReviewEventPage() {
    return (
            <Card>
                <CardHeader>
                    <CardTitle>Review events</CardTitle>
                    <CardDescription>Review potential tailgating events and take actions when applicable.</CardDescription>
                    <CardDescription className="text-xs">/review-event/[eventId]</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-8">
                        <p>
                            Agents can review potential tailgating events and take actions when applicable.
                        </p>
                        <Image src="/review-event.png" alt="Review event" className="rounded-md" height={0} width={0} style={{ width: "100%", height: "auto"}} />
                        <p>
                            On the left side of the page, the user can see all videos associated with the event, wehre the number of videos is equal to the number of entries in the event multiplied by the number of cameras in the location. The user can switch between videos using the buttons below the video panel.
                        </p>
                        <Image src="/video-selector.png" alt="Video selector" className="rounded-md" height={0} width={0} style={{ width: "100%", height: "auto"}} />
                        <p>
                            On the top right side of the page, the user can see the details of the event, including the location, date and time, and information about all members associated with the event. Clicking on the star at the top will save the event as a favourite, which will be visible in the <ALink href="/pages/dashboard">Favourites</ALink> page.
                        </p>
                        <p>
                            The user can also add high-risk members to the list of high-risk members by clicking on the <strong>+</strong> button next to the member id and remove them by clicking on the <strong>-</strong> button. This is useful when the user wants to quickly add a member to the list without having to navigate away from the review page. See <ALink href="/pages/members">Members</ALink> for more details.
                        </p>
                        <Image src="/review-event-metadata.png" alt="Review event user panel" className="rounded-md" height={0} width={0} style={{ width: "40%", height: "auto"}} />
                        <p>
                            On the bottom right side of the page, the user can see the list of actions available for the event. The user can select an action and click on the <strong>Confirm action</strong> button to perform the action. The user can also add comments to the event by using the textarea below. This is useful when the user wants to add a comment to the event for future reference or analysis.
                        </p>
                        <Image src="/take-actions.png" alt="Take actions" className="rounded-md" height={0} width={0} style={{ width: "40%", height: "auto"}} />
                        <p>
                            The user can navigate between events using the <strong>Previous</strong> and <strong>Next</strong> buttons at the bottom of the page. The previous and next events of the current event is determined by list of events in the <ALink href="/pages/dashboard">Dashboard</ALink> page, which is primarily sorted by date and time. If there was a filter applied to the events in the dashboard and the user started the review from the dashboard, the same filter will be applied when determining the previous and next events.
                        </p>
                    </div>
                </CardContent>
            </Card>
    )
}