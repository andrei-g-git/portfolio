




import { useContributionsResizeListenerForRatioAndPixels, useContributionsResizeListenerPixels } from "../projects/ContributionsController";
//import { colabSettings } from "./slickSettings";
import { getProjectSettings } from "../projects/slickSettings";
import SlickSwiper from "../projectPics/SlickSwiper";
//import ColabSlide from "../projectPics/ColabSlide";
//import { ColabObject } from "../projects/showcaseItems";
import ProjectSlide from "../projectPics/ProjectSlide";
import { ShowcaseObject } from "../projects/showcaseItems";

function ProjectCarousel(props: any) {

    //console.log(props)
    const gap = 5;

    let width = useContributionsResizeListenerPixels(props.percentWidth);
    //let widthPercent = useContributionsResizeListener([ 
    let [widthPercent, widthPx] = useContributionsResizeListenerForRatioAndPixels([ 
        {
            breakpoint: 1440,
            width: "50%",
            px: "720px"
        },
        {
            breakpoint: 1280,
            width: "60%",
            px: "720px"
        },
        {
            breakpoint: 1024,
            width: "80%",
            px: "820px"
        },
        {
            breakpoint: 480,
            width: "90%",
            px: "440px"
        },                        
    ]);

    // const projectSettings = getProjectSettings(props.items.map((item: any) => {
    //     return item.image
    // }));
    const projectSettings = getProjectSettings(props.images);

    return (
        <SlickSwiper items={mapProjectSlides(props./* items */images, widthPx/* widthPercent */, gap, projectSettings)}
            settings={projectSettings}
            width={widthPercent}//{width} // < -------------- !!!!!!!!!!!!!!!!!!!
        />
    );
};

const mapProjectSlides = (images: string[]/* items: ShowcaseObject[] */, widthPercent: string, gap: number, settings: any): JSX.Element[] => {
    //console.log("width that slide gets:   ", width)
    return /* items */images.map((image: string, index: number) => 
        <ProjectSlide key={index}
            image={image}
            // title={item.name}
            // description={item.description}
            //width={getSlideWidth(width, settings) - gap}
            width={widthPercent}
        />
    )
};

export default ProjectCarousel;