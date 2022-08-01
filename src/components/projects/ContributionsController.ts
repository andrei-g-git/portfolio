import {useState, useEffect} from "react";
import { computeWidthPercentOfViewport } from "../../ts/utils";

const curryResizeListener = (computeWidthPercentOfViewport: Function): Function => {
    return (percentWidth: number): number => {
        const [width, setWidth] = useState(computeWidthPercentOfViewport(percentWidth));

        useEffect(() => {
            window.addEventListener("resize", event => {
                setWidth(computeWidthPercentOfViewport(percentWidth));
            })
        },
            []
        );  
        
        return width;
    }
}

export const useContributionsResizeListener = curryResizeListener(computeWidthPercentOfViewport);

export const getSlideWidth = (carouselWidth: number, settings: any): number => {
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
