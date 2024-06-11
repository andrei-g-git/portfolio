import { SkillProps } from "@/types";
import "./skill.scss";

function Skill({index, name, icon, children}: SkillProps) {
	return (
		<div className="skill-container"
			id={`gauge-container-${index}`}
		>
			<div className="skill-icon-and-name">
				{
					icon ? 
						icon
					:
						<div></div>
				}
				<p className="skill-name">
					{name}
				</p>				
			</div>


			{children}
		</div>
	)
}

export default Skill;