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