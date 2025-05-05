import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Rocket } from 'lucide-react';
import { BrickWall } from 'lucide-react';


export default function LandingPageHeader() {
    return (
        <div className="mx-12 my-16 w-5/6">
            <h1 className="text-4xl font-bold text-primary">AI-Powered Tailgating Detection by Hwan Yoo</h1>
            <Separator className="my-4" />
            <div className="flex items-center justify-between flex-col md:flex-row space-y-4 md:space-y-0">
                <p className="text-lg text-primary/80 mx-4">
                    Enhance security with our AI-powered solution, TAILDET-AI
                </p>
                <QuickLinks />
            </div>
        </div>
    )
}

function QuickLinks() {
    const links = [
        { href: "/architecture", label: "Architecture", icon: <BrickWall className="mr-2" /> },
        { href: "/demo", label: "Start Demo", icon: <Rocket className="mr-2" /> },
    ]
    return (
        <div className="flex items-center space-x-4">
            {links.map((link, index) => (
                <Link key={index} href={link.href}>
                    <Button variant="default">
                        {link.icon}
                        {link.label}
                    </Button>
                </Link>
            ))}
        </div>
    )
}