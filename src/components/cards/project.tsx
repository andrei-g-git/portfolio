import { ProjectSchema } from "@/types/schemas";
import "bootstrap/dist/css/bootstrap.css"
import "./project.scss";

import { pickLocalImage } from "@/ts/factories";

function Project({name ,type, description, dependencies, image, url, colab}: ProjectSchema) {
    console.log("url", url)
    return (
        <div className="container"> {/* "project-container" */}
            <div className="row">
                <div className="col-4">
                    {/* <div className="project-image" style={{backgroundImage: `url(${pickLocalImage(name)})`}} /> */}
                    <a className="project-link-container" href={url}>
                        <img className="project-image" src={pickLocalImage(name)} alt="awef"/>
                    </a>

                </div>


                <div className="col-8 project-right">
                    <div className="project-name-and-type">
                        <h4>{name}</h4>
                        <h4>{type}</h4>
                    </div>

                    <p>{description}</p>
                    <div className="project-dependencies">
                        {
                            dependencies.map(dependency => 
                                <div>{dependency}</div>
                            )
                        } 
                    </div>
                
                </div>
            </div>

        </div>
    )
}

export default Project
