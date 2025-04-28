import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"

export default function HomePage() {
    return (
            <Card>
                <CardHeader>
                    <CardTitle>Home</CardTitle>
                    <CardDescription>Monitor real-time analytics and key metrics for each location. Gain insights into system performance and security events.</CardDescription>
                    <CardDescription className="text-xs">/home</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-8">
                        <p>This is a landing page that provides an overview of all locations. It is designed to give users a quick summary of key metrics and analytics for each location. The page displays the following information for each location:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Number of entries in the last 24 hours</li>
                            <li>Number of entries currently in process</li>
                            <li>Number of events to be reviewed by agents</li>
                        </ul>
                        <Image src="/home.png" alt="Home overview" className="rounded-md"   height={0} width={0} style={{ width: "100%", height: "auto"}} />
                    </div>
                </CardContent>
            </Card>
    )
}