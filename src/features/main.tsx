import { Landing } from "@/features/landing";
import { JobExperience, SideContent } from "@/features/side-content";
import { Headline, ExtraAbout} from "@/features/about";
import "bootstrap/dist/css/bootstrap.css"
import "./main.scss";
import { ExperienceSection } from "./experience";
import experience from "../assets/text/experience.json";
import { Gauge, SkillTag } from "@/components";
import BigButton from "@/components/buttons/big-button";
import SkillGroup from "@/components/fancy/skill-group";
import skills from "../../src/assets/text/skills.json"

//this is gearing up to become a god component...
function Main(props: any) {

    return (
        <div className="container-fluid">
            <Landing />

            <div className="row d-flex" style={{padding: "0 10%"}}>
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

                <div className="container col-7 px-5" style={{border: "2px solid red", height: "4900px"}}>
                    <ExtraAbout />
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



                </div>
            </div>


        </div>
    )
}

export default Main
