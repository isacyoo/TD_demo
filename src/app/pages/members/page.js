import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"
import ALink from "@/components/common/ALink"

export default function MembersPage() {
    return (
            <Card>
                <CardHeader>
                    <CardTitle>High-risk members</CardTitle>
                    <CardDescription>Add, modify and delete high-risk members.</CardDescription>
                    <CardDescription className="text-xs">/settings/members</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-8">
                        <p>Agents may come across high-risk members who have let unauthorised people into the facility in the past. The list of high-risk members can be added, modified, or removed by the user easily. They can also configure at either account-level or location-level whether to always review events when there is a high-risk member.</p>
                        <Image src="/members.png" alt="Manage high-risk members" className="rounded-md" height={0} width={0} style={{ width: "100%", height: "auto"}} />
                        <p>
                            Users can also add high-risk members while reviewing an event. This is useful when the user wants to quickly add a member to the list without having to navigate away from the review page. The user can click on the button next to the member id to add them to the list or remove them from the list. See <ALink href="/pages/review-event">Review</ALink> for more details.
                        </p>
                        <Image src="/review-event-metadata.png" alt="Event members metadata" className="rounded-md" height={0} width={0} style={{ width: "40%", height: "auto"}} />
                    </div>
                </CardContent>
            </Card>
    )
}