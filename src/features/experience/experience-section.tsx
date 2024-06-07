import { ExperienceSchema } from "@/types";
import { ReactNode } from "react";

type JobFCProps = {
    startDate: number, 
    endDate: number, 
    jobTitle: string, 
    industry: string, 
    firm: string, 
    contributions: string[], 
    skills: string[],
    SkillTag: React.FunctionComponent<{text: string}>
};

function ExperienceSection({
    experience, 
    Job, 
    Skill,
    //ResumeLink,
    children
}: {
    experience: ExperienceSchema[], 
    Job: React.FunctionComponent<JobFCProps>, 
    Skill: React.FunctionComponent<{text: string}>,
    //ResumeLink: React.FunctionComponent<LinkButtonProps>,
    children: ReactNode
}) {

    return (
        <div>
            {
                experience.map(job => 
                    <Job startDate={job.startDate}
                        endDate={job.endDate}
                        jobTitle={job.jobTitle}
                        industry={job.industry}
                        firm={job.firm}
                        contributions={job.contributions}
                        skills={job.skills}
                        SkillTag={Skill}
                    />
                ) 
            }
            {
                children
            }
        </div>
    )
}

export default ExperienceSection;
