import Image from "next/image";

export default function Architecture({ children }) {
    return (
        <div className="my-2">
            <Image src="/tailgating_detection_architecture.png" alt="Architecture" height={0} width={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
        </div>
    )
}