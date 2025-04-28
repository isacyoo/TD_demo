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
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function StartDemoForm({ setDemoId, setDemoUrl }) {
    const [ accessKey, setAccessKey ] = useState("")
    const [ loading, setLoading ] = useState(false)

    const handleDemoSubmit = () => {
        if (!accessKey) {
            toast.error("Please enter a valid access key")
            return
        }
        setLoading(true)
        fetch("/api/demo-environment", {
            method: "POST",
            headers: {
                "Content-Type": "text/plain",
                "x-api-key": accessKey,
            },
        })
            .then((res) => {
                setLoading(false)
                if (res.ok) {
                    toast.success("Demo started successfully")

                } else if (res.status === 403) {
                    toast.error("Invalid access key")
                } else if (res.status === 502) {
                    toast.error("Internal server error")
                } else {
                    toast.error("Unable to start demo")
                }
                return res.json()
            })
            .then((data) => {
                const { subdomain, url } = data
                if (subdomain && url) {
                    setDemoId(subdomain)
                    setDemoUrl(url)
                }
            })
            .catch((err) => {
                console.log("Asdf")
                console.error(err)
                console.log("adsff")
                setLoading(false)
                toast.error("Invalid access key")
            })
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Card className="w-[400px] my-20">
                <CardHeader>
                    <CardTitle>Start a demo</CardTitle>
                    <CardDescription>
                        Enter your access key to start a demo
                    </CardDescription>
                </CardHeader>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleDemoSubmit()
                }
                }>
                    <CardContent>
                        <Input type="text" placeholder="Enter access key provided" value={accessKey} onChange={(e) => setAccessKey(e.target.value)} maxLength="100"/>
                    </CardContent>
                    <CardFooter>
                        <Button
                            type="submit"
                            disabled={loading}
                            onClick={handleDemoSubmit}
                        >
                            Start Demo
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}