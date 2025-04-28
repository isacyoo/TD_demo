import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"
import ALink from "@/components/common/ALink"

export default function DashboardPage() {
    return (
            <Card>
                <CardHeader>
                    <CardTitle>Dashboard</CardTitle>
                    <CardDescription>Displays events to be reviewed, events that have been reviewed and saved events.</CardDescription>
                    <CardDescription className="text-xs">/[locationId]/dashboard/[page]</CardDescription>
                    <CardDescription className="text-xs">/[locationId]/history/[page]</CardDescription>
                    <CardDescription className="text-xs">/[locationId]/favourites/[page]</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-8">
                        <p>The primary purpose of the dashboard of a location is to provide a list of events to be reviewed, which is in the table at the center of the dashboard</p>
                        <Image src="/dashboard.png" alt="Manage actions" className="rounded-md" height={0} width={0} style={{ width: "100%", height: "auto"}} />
                        <p>
                            The filter options allow users to filter the events based on the following criteria:
                        </p>
                        <ul className="list-disc pl-5 font-bold space-y-2">
                            <li>Member ID</li>
                            <li>Event time</li>
                        </ul>
                        <Image src="/dashboard-filter.png" alt="Manage actions" className="rounded-md" height={0} width={0} style={{ width: "40%", height: "auto"}} />
                        <p>
                            Selecting <strong>History</strong> will display a list of all events that have been reviewed, as well as the actions taken on them. This allows users to keep track of all events that have been reviewed and the actions taken on them.
                        </p>
                        <Image src="/history.png" alt="Take actions" className="rounded-md" height={0} width={0} style={{ width: "100%", height: "auto"}} />
                        <p>
                            Within the history page, users can also filter the events based on the following criteria:
                        </p>
                        <ul className="list-disc pl-5 font-bold space-y-2">
                            <li>Member ID</li>
                            <li>Event time</li>
                            <li>Action taken</li>
                        </ul>
                        <Image src="/history-filter.png" alt="Manage actions" className="rounded-md" height={0} width={0} style={{ width: "40%", height: "auto"}} />
                        <p>
                            Selecting <strong>Favourites</strong> will display a list of all events that have been saved as favourites. This allows users to keep track of all events that they have marked as important or interesting. Events can be saved as favourites by clicking on the star icon in the user panel in the review page. See <ALink href="/pages/review-event">Review</ALink> to learn more about the user panel.
                        </p>

                    </div>
                </CardContent>
            </Card>
    )
}