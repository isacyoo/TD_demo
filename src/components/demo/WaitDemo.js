"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import ProgressBar from "@/components/demo/ProgressBar"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

export default function WaitDemo({ demoId, demoUrl }) {
    if (!demoId) {
        return <></>
    }

    const [ hoverMessage, setHoverMessage ] = useState("Click to copy")
    

    const handleCopy = async () => {
        await navigator.clipboard.writeText(demoUrl)
        setHoverMessage("Copied!")
        setTimeout(() => {
            setHoverMessage("Click to copy")
        }, 2000)
    }

    return (
        <Card className="w-[800px] my-20">
            <CardHeader>
                <CardTitle>Demo has started</CardTitle>
                <CardDescription>
                    Your demo is being set up
                </CardDescription>
            </CardHeader>
            <ProgressBar demoId={demoId} />
            <CardContent>
                <Alert className="mb-4">
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                        This information will not be available once you navigate away from the page. Please use the link below to access your demo.
                    </AlertDescription>
                    <AlertDescription className="my-2 flex items-center">
                        <span className="hover:border-b-2">{demoUrl}</span>
                        <HoverCard openDelay={0} closeDelay={0}>
                            <HoverCardTrigger className="cursor-pointer" onClick={handleCopy}>
                                <Button variant="link" size="icon">
                                    x
                                </Button>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <p>{hoverMessage}</p>
                            </HoverCardContent>
                        </HoverCard>
                    </AlertDescription>
                </Alert>
                <Alert variant="destructive" className="mb-4">
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                        Please note that the demo will be available for 6 hours. After that, it will be automatically deleted.
                    </AlertDescription>
                </Alert>
            </CardContent>
            <CardFooter className="justify-between">
                <p className="text-sm text-muted-foreground">
                    Your demo ID is: {demoId}
                </p>
                <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-500 hover:underline"
                >
                    Open demo
                </a>
            </CardFooter>
        </Card>
    )
}