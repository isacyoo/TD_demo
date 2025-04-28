import { Progress } from "@/components/ui/progress"
import { useState, useEffect, useRef } from "react"

export default function ProgressBar({ demoId }) {
    if (!demoId) {
        return <></>
    }
    const [ progress, setProgress ] = useState(0)
    const [ currentState, setCurrentState ] = useState("")
    const [ message, setMessage ] = useState("")
    const progressRef = useRef(progress)

    const fetchProgress = () => {
        if (progressRef.current >= 100) {
            return
        }

        const params = new URLSearchParams()
        params.append("subdomain", demoId)
        params.append("currentProgress", progressRef.current)

        fetch(`/api/demo-environment?${params}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => res.json())
            .then((data) => {
                const { progress, current_state, message } = data
                setProgress(progress)
                setCurrentState(current_state)
                setMessage(message)
                progressRef.current = progress
            })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetchProgress()
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col items-center px-4">
            { currentState ? (
                <span>
                    { `Current state: ${currentState} - ${message}` }
                </span>
            ): <></>}
            <Progress value={progress} className="my-6" />
        </div>
    )
}