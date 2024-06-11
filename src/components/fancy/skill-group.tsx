import { useEffect } from 'react';
import Skill from './skill';
import Gauge from './gauge';
//import skills from "./../../assets/text/skills.json"
import { SkillSchema } from '@/types'; //should be prop anywayh
import { observeIntersection } from '@/utils';
import { pickReactIcon } from '@/ts';

const SkillGroup = ({skills, type}: {skills: any, type: "soft" | "hard"}) => {

    useEffect(() => {
        console.log(skills)

        observeIntersection(startAnimation(".translate-horizontal-percent"), ".gauge-container")
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
                        icon={
                            type =="hard" ? 
                                pickReactIcon(skill.name, "black", 24)
                            :
                                undefined
                            }
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


const startAnimation = (className: string) => 
    (entries: any, observer: any) => {
        let count = 1;
        entries.forEach((entry: any) => {
            entry.target.classList.toggle(`${className}-${count * 10}`, entry.isIntersecting);
            count++;
        });
    }
  

export default SkillGroup;