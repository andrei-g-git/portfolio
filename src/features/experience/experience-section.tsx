import { ExperienceSchema } from "@/types";

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
    Skill
}: {
    experience: ExperienceSchema[], 
    Job: React.FunctionComponent<JobFCProps>, 
    Skill: React.FunctionComponent<{text: string}>
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
        </div>
    )
}

export default ExperienceSection;
