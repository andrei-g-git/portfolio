import { Landing } from "@/features/landing";
import { JobExperience, SideContent } from "@/features/side-content";
import { Headline, ExtraAbout} from "@/features/about";
import "bootstrap/dist/css/bootstrap.css"
import "./main.scss";
import { ExperienceSection } from "./experience";
import experience from "../assets/text/experience.json";
import { Gauge, OverflowingBackground, SkillTag, YearlyContribution } from "@/components";
import BigButton from "@/components/buttons/big-button";
import SkillGroup from "@/components/fancy/skill-group";
import skills from "../../src/assets/text/skills.json"
import projects from "../../src/assets/text/projects.json"
import { MainBg } from "@/features/main-bg";
import { pickReactIcon } from "@/ts/factories";
import { Projects } from "./projects";
import { Contributions } from "./contributions";
import { SlidingDiagonals } from "./sliding-diagonals";
import { useEffect, useRef, useState } from "react";
//import { pickReactIcon } from "@/ts";
//import { pickReactIcon } from "@/ts/factories";
//import { pickReactIcon } from "C:/work/js/portfolio/src/ts/factories.ts"
//import { pickReactIcon} from "./../ts/factories"

//this is gearing up to become a god component...
function Main(props: any) {
    
    const skillRef = useRef<HTMLDivElement>(null);

    const [slidingDiagonalsPositionY, setDiagonalsPositionY] = useState(0);

    useEffect(() => {
        setDiagonalsPositionY(getSkillBottom(skillRef));
    }, 
        []
    )

    return (
        <div className="position-relative">
                <div className="postion-absolute">
                    <div className="position-relative">
                        <div className="main-dark-blue-bg position-absolute" style={{width: "100vw", height: "9999px"}}></div>
                        <div className="position-absolute" style={{top: slidingDiagonalsPositionY}}>
                            <SlidingDiagonals />
                        </div>
                    </div>

                </div>
                
                <div className="container-fluid  position-absolute"> {/* main-dark-blue-bg */}

                    <Landing />

                    <div className="row d-flex" style={{padding: "0 20%"}}>
                        <div className="col-5 sticky-top vh-100"> {/* apparently the sticky ends when you pass the first other element in the block, not when you pass the sticky element's content */}
                            <SideContent>
                                <SideContent.Description>
                                    <Headline />
                                </SideContent.Description>
                                <SideContent.Navigation>
                                <div>
                                    <p>Home</p>
                                    <p>About </p>
                                    <p>Experience</p>
                                    <p>Skills</p>

                                </div>
                                </SideContent.Navigation>
                            </SideContent>

                        </div> 

                        <div className="container col-7 px-5" style={{border: "2px solid red", height: "4900px"}}>{/* , maxWidth: "calc(7/12 * 100vw)"}}> */}
                    
                    

                            {/* <OverflowingBackground> */}
                                <ExtraAbout />                                 
                            {/* </OverflowingBackground> */}
                               
                         


                                <ExperienceSection experience={experience}
                                    Job={JobExperience}
                                    Skill={SkillTag}
                                >
                                    <BigButton text="View Resume"
                                        link="https://www.wikipedia.org"
                                    />
                                </ExperienceSection>                                      




                            <br/>
                            <br/>

                            <SkillGroup type="hard"
                                skills={skills.filter(skill => skill.hardSkill == true)}
                            />
                            <br/>
                            <br/>

                            <div ref={skillRef}>
                                <SkillGroup type="soft"
                                    skills={skills.filter(skill => skill.hardSkill == false)}
                                />                                
                            </div>

                        
                            {/* <br /> */}



                            <br />
                            <br />

                            <div>
                                projects
                            </div>

                            <br />
                            <br />

                            <Projects projects={projects.filter(project => project.colab == false)}/>

                            <br />
                            <br />
                            <Projects projects={projects.filter(project => project.colab == true)}/>
                            <br />
                            <br />    
                            <Contributions Chart={YearlyContribution}/>

                        </div>
                    </div>


                </div>
        </div>

    )
}

const getSkillBottom = (ref: React.RefObject<HTMLDivElement>): number => {
    if(ref.current) return ref.current.offsetTop + ref.current.offsetHeight;
    return 0;

}

const makeIcon = (name: string, color: string, size: number) => {
    //const capitalized = name.charAt(0).toUpperCase();
    // const ReactIcon =  AllIcons[`Fa${capitalized}`];
    // return <ReactIcon />
    return pickReactIcon(name, color, size);
}

export default Main
