import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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

function Entity({ name, description, columns }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {columns.map((column) => (
                    <div key={column.name}>
                        <strong>{column.name}</strong> ({column.type}) - {column.description}
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}