import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"

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
                        <p>Agents may come across high-risk members who has let unauthorised people into the facility in the past. The list of high-risk members can be added, modified, or removed by the user easily. They can also configure at account-level whether to always review events when there is a high-risk member.</p>
                        <Image src="/members.png" alt="Manage high-risk members" className="rounded-md" height={0} width={0} style={{ width: "100%", height: "auto"}} />
                        <p>
                            Users can also add high-risk members while reviewing an event. This is useful when the user wants to quickly add a member to the list without having to navigate away from the review page. The user can select a member from the list of members and click on the <strong>Add high-risk member</strong> button to add them to the list. See <a href="/pages/review-event" className="underline">Review</a> for more details.
                        </p>
                        <Image src="/take-actions.png" alt="Take actions" className="rounded-md" height={0} width={0} style={{ width: "40%", height: "auto"}} />
                    </div>
                </CardContent>
            </Card>
    )
}