import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"
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
import LandingPageHeader from "@/components/home/LandingPageHeader"
  


export default function Home() {

    return (
        <>
            <LandingPageHeader />
            <div className="flex items-start justify-center space-x-4 my-6 flex-col md:flex-row">
                <LeftPanel />
                <RightPanel />
            </div>
        </>
    )
}

function LeftPanel() {
    return (
        <div className="flex flex-col w-full md:w-2/5 items-center justify-center h-auto">
            <TopLeftCard />
            <br />
            <BottomLeftCard />
        </div>
    )
}

function RightPanel() {
    return (
        <div className="flex flex-col w-full md:w-3/5 items-center justify-center h-auto">
            <TopRightPanel />
            <br />
            <BottomRightPanel />
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
                <div className="flex flex-wrap items-start">
                    <p className="text-sm text-primary/80">
                        <Image src="/office-entry.png" alt="Office Entry" className="mx-4 mb-2 rounded-md" height={0} width={0} style={{ width: "40%", height: "auto", float: "right"}} />
                        <strong>Real-Time Monitoring:</strong> Our system ensures that only authorized personnel gain access to restricted areas by detecting tailgating incidents as they happen. This proactive approach minimizes security breaches effectively.
                        <br />
                        <br />
                        <strong>Seamless Integration:</strong> The solution works effortlessly with existing access control mechanisms, adding an extra layer of security without disrupting daily operations or requiring significant infrastructure changes.
                        <br />
                        <br />
                        <strong>Comprehensive Coverage:</strong> Capable of analyzing video feeds from multiple entry points simultaneously, the system provides robust security for high-priority facilities like corporate offices, government buildings, and research labs.
                        <br />
                        <br />
                        <strong>Cost-Effective:</strong> This system is designed to optimize resources, ensuring high performance without incurring excessive costs, making it a budget-friendly solution for organizations of all sizes.
                        <br />
                        <br />
                        <strong>Flexible Scheduling:</strong> The system can be configured to operate on a specific schedule, reducing energy consumption and operational costs by avoiding 24/7 runtime when not necessary.</p>
                </div>
            </CardContent>
        </Card>
    )
}

function BottomLeftCard() {
    return (
        <Card className="mx-6">
            <CardHeader>
                <CardTitle>Gym Access Control</CardTitle>
                <CardDescription>
                    Secure gyms and fitness centers with ease.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap items-start">
                    <p className="text-sm text-primary/80">
                        <Image src="/gym-entry.png" alt="Gym Entry" className="mx-4 mb-2 rounded-md" height={0} width={0} style={{ width: "30%", height: "auto", float: "right"}} />
                        <strong>Revenue Protection:</strong> By preventing unauthorized access, gym owners can ensure that only paying members use the facilities, safeguarding their revenue streams.
                        <br />
                        <br />
                        <strong>Enhanced Member Experience:</strong> The system fosters a secure and exclusive environment, improving trust and satisfaction among legitimate members.
                        <br />
                        <br />
                        <strong>Scalability:</strong> Whether for small local gyms or large fitness chains, the solution adapts to facilities of all sizes, making it a versatile choice for diverse environments.</p>
                </div>
            </CardContent>
        </Card>
    )
}

function TopRightPanel() {
    return (
        <Carousel className="w-4/5" opts={{ loop: true }}>
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
                                    <Image src={item.img} alt={item.name} className="rounded-md" height={0} width={0} style={{ width: "100%", height: "auto"}} />
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
        <Accordion type="single" collapsible className="w-4/5">
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