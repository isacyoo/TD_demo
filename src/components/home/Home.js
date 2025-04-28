import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { accordionContent } from "./AccordionContent"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { pagesInfo } from "./PagesInfo"
import ALink from "@/components/common/ALink"
  
  


export default function Home() {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-4/5">
                <TopPanel />
                <Separator className="my-6" />
                <BottomPanel />
            </div>
        </div>
    )
}

function TopPanel() {
    return (
        <div className="flex items-start justify-between my-6">
            <TopLeftCard />
            <TopRightCard />
        </div>
    )
}

function TopLeftCard() {
    return (
        <Card className="mx-6">
            <CardHeader>
                <CardTitle>Office Security</CardTitle>
                <CardDescription>
                    Enhance security with AI-powered tailgating detection.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <Image src="/office-entry.png" alt="Office Entry" height={0} width={0} style={{ width: "100%", height: "auto"}} />
                    <div className="flex flex-col gap-4 my-4 text-sm text-primary/80">
                        <p><strong>Real-Time Monitoring:</strong> Our system ensures that only authorized personnel gain access to restricted areas by detecting tailgating incidents as they happen. This proactive approach minimizes security breaches effectively.</p>
                        <p><strong>Seamless Integration:</strong> The solution works effortlessly with existing access control mechanisms, adding an extra layer of security without disrupting daily operations or requiring significant infrastructure changes.</p>
                        <p><strong>Comprehensive Coverage:</strong> Capable of analyzing video feeds from multiple entry points simultaneously, the system provides robust security for high-priority facilities like corporate offices, government buildings, and research labs.</p>
                        <p><strong>Cost-Effective:</strong> This system is designed to optimize resources, ensuring high performance without incurring excessive costs, making it a budget-friendly solution for organizations of all sizes.</p>
                        <p><strong>Flexible Scheduling:</strong> The system can be configured to operate on a specific schedule, reducing energy consumption and operational costs by avoiding 24/7 runtime when not necessary.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function TopRightCard() {
    return (
        <Card className="mx-6">
            <CardHeader>
                <CardTitle>Gym Access Control</CardTitle>
                <CardDescription>
                    Secure gyms and fitness centers with ease.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <Image src="/gym-entry.png" alt="Gym Entry" height={0} width={0} style={{ width: "100%", height: "auto"}} />
                    <div className="flex flex-col gap-4 my-4 text-sm text-primary/80">
                        <p><strong>Revenue Protection:</strong> By preventing unauthorized access, gym owners can ensure that only paying members use the facilities, safeguarding their revenue streams.</p>
                        <p><strong>Enhanced Member Experience:</strong> The system fosters a secure and exclusive environment, improving trust and satisfaction among legitimate members.</p>
                        <p><strong>Scalability:</strong> Whether for small local gyms or large fitness chains, the solution adapts to facilities of all sizes, making it a versatile choice for diverse environments.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function BottomPanel() {
    return (
        <div className="flex items-start justify-center gap-16 mb-24">
            <BottomLeftPanel />
            <BottomRightPanel />
        </div>
    )
}

function BottomLeftPanel() {
    return (
        <Carousel className="w-1/2" opts={{ loop: true }}>
            <CarouselContent>
                { pagesInfo.map((item, index) => (
                    <CarouselItem key={index} className="w-full">
                        <Card>
                            <CardHeader>
                                <CardTitle>{item.name}</CardTitle>
                                <CardDescription>{item.pathInDemo}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-4 my-4 text-sm text-primary/80 font-light">
                                    <Image src={item.img} alt={item.name} height={0} width={0} style={{ width: "100%", height: "auto"}} />
                                    <Card className="p-4">
                                        <p>
                                            {item.description}
                                        </p>
                                        <br />
                                        <p>
                                            See more at <ALink href={item.path}>{item.name}</ALink>
                                        </p>
                                    </Card>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />

        </Carousel>
    )
    
}

function BottomRightPanel() {
    return (
        <Accordion type="single" collapsible className="w-1/2">
            { accordionContent.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                        {item.content}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}