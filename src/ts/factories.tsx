//import * as Fa from "react-icons/fa";

import { 
    FaReact,
    FaAngular,
    FaPython,
    FaJava
} from "react-icons/fa";

import { IconContext } from "react-icons";

export const pickReactIconOld = async (name: string) => {
    // const capitalized = name.charAt(0).toUpperCase();
    // const dict = {};
    // dict[""] = Fa[`Fa${capitalized}`]; 

    switch(name){
        case "react":
            const {FaReact} = await import("react-icons/fa");
            return <FaReact/>;
        case "python":
            const {FaPython} = await import("react-icons/fa");
            return <FaPython/>;       
        case "angular":
            const {FaAngular} = await import("react-icons/fa");
            return <FaAngular/>; 
        case "java":
            const {FaJava} = await import("react-icons/fa");
            return <FaJava/>;                                          
    }
}

export const pickReactIconNah = (name: string, AllIcons: any) => {
    const capitalized = name.charAt(0).toUpperCase();
    return AllIcons[`Fa${capitalized}`];
}

export const pickReactIcon = (name: string, color: string, size: number) => {
    switch(name){
        case "react":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><FaReact /></IconContext.Provider> 
        case "angular":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><FaAngular /></IconContext.Provider> 
        case "python":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><FaPython /></IconContext.Provider> 
        case "Java":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><FaJava /></IconContext.Provider>                                 
                            
    }
}