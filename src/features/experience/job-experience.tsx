import React from "react"

type SkillProps = {
    text: string
}

function JobExperience({
    startDate, 
    endDate, 
    jobTitle, 
    industry, 
    firm, 
    contributions, 
    skills,
    SkillTag
}: {
    startDate: number, 
    endDate: number, 
    jobTitle: string, 
    industry: string, 
    firm: string, 
    contributions: string[], 
    skills: string[],
    SkillTag: React.FunctionComponent<SkillProps>
}) {


    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    {startDate + " - " + endDate}
                </div>
                <div className="col-9">
                    {jobTitle + ", " + industry + ", " + firm}
                    {
                        contributions.map(contribution => 
                            <p>
                                {"• " + contribution}
                            </p>
                        )
                    }
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        {
                            skills.map(skill => 
                                <SkillTag text={skill} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobExperience
