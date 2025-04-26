import ERD from "@/components/erd/ERD"
import Image from "next/image";

export default function ERDPage() {
    return (
        <div className="my-6 flex flex-col items-center justify-center">
            <Image src="/erd.png" alt="ERD" height={0} width={0} sizes="100vw" style={{ width: '90%', height: 'auto' }}/>
            <ERD/>
        </div>
    )
}