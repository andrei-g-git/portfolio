import { ReactNode } from "react"

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
    icon: string, //should be generic or w/e with *.extension substring
    children: ReactNode
}