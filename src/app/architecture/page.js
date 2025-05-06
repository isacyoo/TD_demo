"use client"

import Architecture from "@/components/architecture/Architecture";
import Image from "next/image";

export default function ArchitecturePage({ children }) {
    return (
        <div className="my-4 mx-4 flex items-center md:items-start gap-4 flex-col md:flex-row">
            <Image
                src="/tailgating_detection_architecture.png"
                alt="Architecture"
                width={0}
                height={0}
                className="rounded-lg"
                style={{ width: `70%`, height: 'auto' }} />
            <Architecture />
        </div>
    )
}