// import SlickSwiper from "../projectPics/SlickSwiper";
// import { monoSettings } from "../projects/slickSettings";
import ThumbGallerySwiper from "../projectPics/ThumbGallerySwiper";
import ProjectSlide from "../projectPics/ProjectSlide";

function ProjectCarouselMono(/* props: any */) {
    return (
        // <SlickSwiper items={mapProjectSlides(props.images)}
        //     settings={monoSettings}
        //     width="100%"
        // />
        <ThumbGallerySwiper />
    )
}

// const mapProjectSlides = (images: string[]): JSX.Element[] => {
//     return images.map((image: string, index: number) => 
//         <ProjectSlide key={index}
//             image={image}
//             width="100%"
//         />
//     )
// };

export default ProjectCarouselMono