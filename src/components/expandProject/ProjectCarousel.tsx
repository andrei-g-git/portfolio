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
    const gap = 5;

    let width = useContributionsResizeListener(props.percentWidth);

    const projectSettings = getProjectSettings(props.items.map((item: any) => {
        return item.image
    }));

    return (
        <SlickSwiper items={mapProjectSlides(props.items, width, gap, projectSettings)}
            settings={projectSettings}
            width={width}
        />
    );
};

const mapProjectSlides = (items: ShowcaseObject[], width: number, gap: number, settings: any): JSX.Element[] => {
    return items.map(item => 
        <ProjectSlide key={item.index}
            image={item.image}
            // title={item.name}
            // description={item.description}
            width={getSlideWidth(width, settings) - gap}
        />
    )
};

export default ProjectCarousel;