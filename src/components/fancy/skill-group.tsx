import { useEffect } from 'react';
import Skill from './skill';
import Gauge from './gauge';
//import skills from "./../../assets/text/skills.json"
import { SkillSchema } from '@/types'; //should be prop anywayh

const SkillGroup = ({skills, type}: {skills: any, type: "soft" | "hard"}) => {

    useEffect(() => {
        console.log(skills)
    },
        []
    );

    return (
        <div className="skill-group-container">
            <p>
                {
                    `${type} skills` //capitalize that shit
                }
            </p>
            {
                skills.map((skill: any/* SkillSchema */, index: number) => 
                    <Skill name={skill.name}
                        icon={`src/assets/images/icons/skills/${skill.name}.png`}
                        index={index}
                        key={index}
                    >
                        <Gauge proficiency={skill.proficiency} 
                            index={index}
                        />
                    </Skill>
                )
            }
        </div>
    );
};

export default SkillGroup;