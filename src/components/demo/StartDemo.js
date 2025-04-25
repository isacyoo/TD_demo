"use client"
import { useState } from "react"
import StartDemoForm from "./StartDemoForm"
import WaitDemo from "./WaitDemo"

export default function StartDemo() {
    const [ demoId, setDemoId ] = useState("")
    const [ demoUrl, setDemoUrl ] = useState("")

    return (
        <div className="flex flex-col items-center justify-center">
            <StartDemoForm setDemoId={setDemoId} setDemoUrl={setDemoUrl} />
            <WaitDemo demoId={demoId} demoUrl={demoUrl}/>            
        </div>
    );
}