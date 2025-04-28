import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"

export default function ActionsPage() {
    return (
            <Card>
                <CardHeader>
                    <CardTitle>Actions</CardTitle>
                    <CardDescription>Add, modify and delete actions.</CardDescription>
                    <CardDescription className="text-xs">/settings/actions</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-8">
                        <p>Actions in this service allow users to manage and respond to potential tailgating incidents effectively. The actions can be added, modified, or removed by the user easily. Below are some examples of actions:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Mark as Tailgating:</strong> Confirm the event as a tailgating incident as well as the disciplinary action performed. </li>
                            <li><strong>Dismiss:</strong> Determine the event is not tailgating and dismiss it.</li>
                            <li><strong>Log Incident:</strong> Record the event for future reference or analysis.</li>
                        </ul>
                        <p>
                            Actions can be disabled to prevent users from taking them temporarily. Deleting an action is slightly different from disabling it. When an action is deleted, it will be removed from the list of available actions. However, if the action is disabled, it will still be visible in the list but cannot be selected by the user.
                        </p>
                        <p>    
                            Also, deleting an action will require the user to remove all events associated with the action before it can be deleted. This is to ensure that the action is not referenced in any existing events.
                        </p>
                        <Image src="/actions.png" alt="Manage actions" className="rounded-md" height={0} width={0} style={{ width: "100%", height: "auto"}} />
                        <p>
                            Once the user has made modifications to the actions, the changes will be visible in the <a href="/pages/review-event" className="underline">Review</a> page. The dropdown list will show the available actions (including disabled if any) for the user to take. The user can select an action and click on the <strong>Confirm action</strong> button to perform the action.
                        </p>
                        <Image src="/take-actions.png" alt="Take actions" className="rounded-md" height={0} width={0} style={{ width: "40%", height: "auto"}} />
                    </div>
                </CardContent>
            </Card>
    )
}