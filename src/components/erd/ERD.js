import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import { entities } from "./Entities"
import ALink from "@/components/common/ALink"

export default function ERD() {
    return (
        <div className="my-8 flex items-center justify-center">
            <Entities entities={entities} />
        </div>
    )
}

function Entities({ entities }) {
    return (
        <Carousel className="w-1/2" opts={{ loop: true }}>
            <CarouselContent>
                {entities.map((entity) => (
                    <CarouselItem key={entity.name}>
                        <Entity {...entity} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

function Entity({ name, description, columns, page }) {
    console.log(name, page !== undefined)
    return (
        <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
                { page !== undefined ? <CardDescription><ALink href={page} blank>Learn more</ALink></CardDescription>: <></> }
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 gap-4">
                    {columns.map((column) => (
                        <div key={column.name}>
                            <strong>{column.name}</strong> ({column.type}) - {column.description}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}