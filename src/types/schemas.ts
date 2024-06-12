export type ExperienceSchema = {
    startDate: number, 
    endDate: number, 
    jobTitle: string, 
    industry: string, 
    firm: string, 
    contributions: string[], 
    skills: string[],
};

export type AboutSchema = {
    name: string,
    surname: string,
    title: string,
    headline: string,
    moreAbout: string
}

export type SkillSchema = {
    name: string,
    proficiency: number,
    hardSkill: boolean
}

export type ProjectSchema = {
    name: string,
    type: string, 
    description: string, 
    dependencies: string[],
    image: string,
    url: string
}