import ThumbGallerySwiper from "../projectPics/ThumbGallerySwiper"
import ProjectSlide from "../projectPics/ProjectSlide"
import "./ProjectSwiper.scss";


function ProjectSwiper(props: any) { //could be a higher order component
    return (
        <div className="project-swiper-container">
            <ThumbGallerySwiper images={mapProjectSlides(props.images)} />
        </div>
    );
}

const mapProjectSlides = (images: string[]): JSX.Element[] => {
    return images.map((image: string, index: number) =>
        <ProjectSlide key={index}
            image={image}
        />
    );
};
export default ProjectSwiper