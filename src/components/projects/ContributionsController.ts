import {useState, useEffect} from "react";
import { computeWidthPercentOfViewport } from "../../ts/utils";

const curryResizeListenerPixels = (computeWidthPercentOfViewport: Function): Function => {
    return (percentWidth: number): number => {
        const [width, setWidth] = useState(computeWidthPercentOfViewport(percentWidth));

        useEffect(() => {
            window.addEventListener("resize", event => {
                setWidth(computeWidthPercentOfViewport(percentWidth));
            });
        },
            []
        );  
        
        return width;
    }
};

export const useContributionsResizeListenerPixels = curryResizeListenerPixels(computeWidthPercentOfViewport);

export const useContributionsResizeListenerForRatioAndPixels = (breakpoints: {breakpoint: number, width: string, px: string}[]): [string, string] => {
    const [width, setWidth] = useState(breakpoints[0].px);//.width);
    const [percent, setPercent] = useState(breakpoints[0].width);//.width);
    useEffect(() => {
        window.addEventListener("resize", event => {
            breakpoints.forEach((breakpoint: {breakpoint: number, width: string, px: string}) => {
                if(window.innerWidth < breakpoint.breakpoint){
                    setWidth(breakpoint.px);//.width);
                    setPercent(breakpoint.width);
                }
            });
        });            
    },
        []
    );
    //console.log(width)
    return [percent, width];
}


// const curryResizeListener = (): Function => { //why am I currying this?
//     return (breakpoints: {breakpoint: number, width: number}[]): number => {
//         const [width, setWidth] = useState(breakpoints[0].width);

//         useEffect(() => {
//             window.addEventListener("resize", event => {
//                 breakpoints.forEach((breakpoint: {breakpoint: number, width: number}) => {
//                     if(window.innerWidth < breakpoint.breakpoint){
//                         setWidth(breakpoint.width);
//                     }
//                 });

                
//             });            
//         },
//             []
//         );

//         return width;
//     }
// }; 

// export const useContributionsResizeListener = curryResizeListener();

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
