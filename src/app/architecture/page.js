import Image from "next/image";
import Architecture from "@/components/architecture/Architecture";

export default function ArchitecturePage({ children }) {
    return (
        <div className="my-4 mx-2 flex items-start justify-center">
            <Image src="/tailgating_detection_architecture.png" alt="Architecture" height={0} width={0} sizes="100vw" style={{ width: '70%', height: 'auto' }}/>
            <Architecture />
        </div>
    )
}