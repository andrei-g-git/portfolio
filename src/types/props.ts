import { ReactNode } from "react"
import { IconType } from "react-icons"
import { ProjectSchema } from "./schemas"

export type LinkButtonProps = {
    text: string,
    link: string
}

export type GaugeProps = {
    index: number,
    proficiency: number
}

export type SkillProps = {
    index: number,
    name: string,
    icon: /* string |  */JSX.Element | undefined, //should be generic or w/e with *.extension substring
    children: ReactNode
}

// export interface ProjectProps extends ProjectSchema {
//     Image: React.FunctionComponent | string
// }