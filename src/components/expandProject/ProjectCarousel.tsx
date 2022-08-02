//import ProjectSwiperJS from "../projectPics/ProjectSwiperJS";
// import SlickSwiper from "../projectPics/SlickSwiper";

// function ProjectCarousel(props: any) {

// 	return (
// 		<div className="project-carousel">
// 				<ProjectSwiperJS items={props.images.map((image: string, index: number) => 
// 						<img src={`src/assets/img/${image}`}
// 							alt="project"
// 							key={index}
// 						/>
// 					)}
// 				/>
// 		</div>
// 	);
// };

// export default ProjectCarousel;




import { useContributionsResizeListener, getSlideWidth } from "../projects/ContributionsController";
//import { colabSettings } from "./slickSettings";
import { getProjectSettings } from "../projects/slickSettings";
import SlickSwiper from "../projectPics/SlickSwiper";
//import ColabSlide from "../projectPics/ColabSlide";
//import { ColabObject } from "../projects/showcaseItems";
import ProjectSlide from "../projectPics/ProjectSlide";
import { ShowcaseObject } from "../projects/showcaseItems";

function ProjectCarousel(props: any) {

    console.log(props)
    const gap = 5;

    let width = useContributionsResizeListener(props.percentWidth);

    // const projectSettings = getProjectSettings(props.items.map((item: any) => {
    //     return item.image
    // }));
    const projectSettings = getProjectSettings(props.images);

    return (
        <SlickSwiper items={mapProjectSlides(props./* items */images, width, gap, projectSettings)}
            settings={projectSettings}
            width={width}
        />
    );
};

const mapProjectSlides = (images: string[]/* items: ShowcaseObject[] */, width: number, gap: number, settings: any): JSX.Element[] => {
    return /* items */images.map((image: string, index: number) => 
        <ProjectSlide key={index}
            image={image}
            // title={item.name}
            // description={item.description}
            //width={getSlideWidth(width, settings) - gap}
            width={width}
        />
    )
};

export default ProjectCarousel;