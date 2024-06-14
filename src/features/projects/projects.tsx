import Project from "@/components/cards/project"
import { ProjectSchema } from "@/types"



function Projects({projects}: {projects: ProjectSchema[]}) {

    return (
        <div className="projects-container">
            {
                projects.map(project => 
                    <Project name={project.name}
                        type={project.type}
                        description={project.description}
                        dependencies={project.dependencies}
                        image={project.image}
                        url={project.url}
                        colab={project.colab}
                    />
                )
            }
        </div>       
    )
}

export default Projects
