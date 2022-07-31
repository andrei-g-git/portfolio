import "./ProjectInfo.scss";

function ProjectInfo(props: any) {
	return (
		<div className="project-info">
			<h3 className="project-title">
				{props.title}
			</h3>

			<p className="project-description">
				{props.description}
			</p>

			<div className="project-skills">
				{
					props.logos.map((logo: string, index: number) =>
						<div className="project-logo-and-name"
							key={index}
						>
							<img className="project-skill-logo"
								src={`src/assets/img/${logo}`}
								alt={props.frameworks[index] + "logo"}
							/>
							<div className="project-framework-name">
								{props.frameworks[index]}
							</div>
						</div>

					)
				}
			</div>
		</div>
	);
};

export default ProjectInfo;