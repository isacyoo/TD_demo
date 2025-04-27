import ERD from "@/components/erd/ERD"
import ImageMagnifier from "@/components/common/ImageMagnifier";

export default function ERDPage() {
    return (
        <div className="my-6 flex flex-col items-center justify-center">
            <ImageMagnifier src="/erd.png" magnifierSize={300} />
            <ERD/>
        </div>
    )
}