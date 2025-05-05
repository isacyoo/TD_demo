"use client"

import Architecture from "@/components/architecture/Architecture";
import ImageMagnifier from "@/components/common/ImageMagnifier";

export default function ArchitecturePage({ children }) {
    return (
        <div className="my-4 mx-4 flex items-start justify-center gap-4 flex-col lg:flex-row">
            <ImageMagnifier src="/tailgating_detection_architecture.png" width={window.innerWidth >= 768 ? 70 : 100}/>
            <Architecture />
        </div>
    )
}