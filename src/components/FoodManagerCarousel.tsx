import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"

export default function () {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full max-w-xs"
            opts={{
                align: "start",
                loop: true,
            }}>
            <CarouselContent>
                <CarouselItem>
                    <img src="/img/food-manager-showcase-3.png"></img>
                </CarouselItem>
                <CarouselItem>
                    <img src="/img/food-manager-showcase-2.png"></img>
                </CarouselItem>
                <CarouselItem>
                    <img src="/img/food-manager-showcase-1.png"></img>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}