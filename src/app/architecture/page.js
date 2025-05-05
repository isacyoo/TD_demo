"use client"

import Architecture from "@/components/architecture/Architecture";
import ImageMagnifier from "@/components/common/ImageMagnifier";

export default function ArchitecturePage({ children }) {
    return (
        <div className="my-4 mx-4 flex items-center md:items-start gap-4 flex-col md:flex-row">
            <ImageMagnifier src="/tailgating_detection_architecture.png" />
            <Architecture />
        </div>
    )
}