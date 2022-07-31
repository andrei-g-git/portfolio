import ProjectSwiperJS from "../projectPics/ProjectSwiperJS";

function ProjectCarousel(props: any) {
	console.log("IMAGES~~~~ ", props.images)

	return (
		<div className="project-carousel">
				<ProjectSwiperJS items={props.images.map((image: string, index: number) => 
						<img src={`src/assets/img/${image}`}
							alt="project"
							key={index}
						/>
					)}
				/>
		</div>
	);
};

export default ProjectCarousel;