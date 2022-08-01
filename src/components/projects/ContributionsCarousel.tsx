import { useState, useEffect, useRef } from "react";
import { computeWidthPercentOfViewport } from "../../ts/utils";
import { colabSettings } from "./slickSettings";
import SlickSwiper from "../projectPics/SlickSwiper";
import ColabSlide from "../projectPics/ColabSlide";
import { ColabObject } from "./showcaseItems";

function ContributionsCarousel(props: any) {
    const slides = props.items.length;
    const gap = 5;
    const [width, setWidth] = useState(computeWidthPercentOfViewport(props.percentWidth));

    useEffect(() => {
        window.addEventListener("resize", event => {
            setWidth(computeWidthPercentOfViewport(props.percentWidth));

            /////
            console.log("CAROUSEL WIDTH: ", width)
        })
    },
        []
    );

    return (
        <SlickSwiper items={mapColabSlides(props.items, width, gap, colabSettings)}
            settings={colabSettings}
            width={width}
            //slideWidth={Math.floor(width/slides)}
        />
    );
};

const mapColabSlides = (items: ColabObject[], width: number, gap: number, settings: any): JSX.Element[] => {
    return items.map(item => 
        <ColabSlide key={item.index}
            image={item.image}
            title={item.name}
            description={item.description}
            //width={Math.floor(width/slides)}
            width={getSlideWidth(width, settings) - gap}
        />
    )
}

const getSlideWidth = (carouselWidth: number, settings: any): number => {
    const slidesAtBreakpoints = settings.responsive.map((object: any) => {
        return {
            breakpoint: object.breakpoint, 
            slidesToShow: object.settings.slidesToShow
        } 
    });
    const shorter = slidesAtBreakpoints;
    let slides = 3;
    for(var i = 0; i < shorter.length; i++){
        if(shorter[i].breakpoint > window.innerWidth){
            slides = shorter[i].slidesToShow;
        }
    }
    return Math.floor(carouselWidth / slides);
}

export default ContributionsCarousel;