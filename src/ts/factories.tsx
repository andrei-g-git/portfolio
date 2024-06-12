//import * as Fa from "react-icons/fa";

import { 
    FaReact,
    FaAngular,
    FaPython,
    FaJava,
    FaCss3,
    FaNode,
    FaBootstrap,
    FaFlask,
    FaDocker,
    FaGit,
    FaLinux
} from "react-icons/fa";
import { SiCsharp, SiPytorch, SiTypescript } from "react-icons/si";
import { DiMysql, DiNginx, DiScrum } from "react-icons/di";
import { IconContext } from "react-icons";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

import wikipeddia from "../assets/images/websites/wikipedia.png"
import duckduckgo from "../assets/images/websites/ducduckgo.png"
import python from "../assets/images/websites/python.png"

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
        case "java":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><FaJava /></IconContext.Provider>         
        case "typescript":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><SiTypescript /></IconContext.Provider>    
        case "css":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><FaCss3 /></IconContext.Provider>                                            
        case "node":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><FaNode /></IconContext.Provider>     
        case "mysql":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><DiMysql /></IconContext.Provider>    
        case "next":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><RiNextjsFill /></IconContext.Provider>                                            
        case "bootstrap":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><FaBootstrap /></IconContext.Provider>  
        case "tailwind":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><RiTailwindCssFill /></IconContext.Provider>    
        case "docker":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><FaDocker /></IconContext.Provider>                                            
        case "git":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><FaGit /></IconContext.Provider>    
        case "nginx":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><DiNginx /></IconContext.Provider>                                            
        case "linux":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><FaLinux /></IconContext.Provider>  
        case "pytorch":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><SiPytorch /></IconContext.Provider>                                                        
        case "c#":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><SiCsharp /></IconContext.Provider>                                            
        case "scrum":
            return <IconContext.Provider value={{color: color, size: size.toString()}}><DiScrum /></IconContext.Provider>    
        case "flask":
        //     return <IconContext.Provider value={{color: color, size: size.toString()}}><FaFlask /></IconContext.Provider>                                            
        // case "":
        //     return <IconContext.Provider value={{color: color, size: size.toString()}}><Fa /></IconContext.Provider>  
        // case "":
        //     return <IconContext.Provider value={{color: color, size: size.toString()}}><Fa /></IconContext.Provider>                                            
        // case "":
        //     return <IconContext.Provider value={{color: color, size: size.toString()}}><Fa /></IconContext.Provider>                                                                         
                            
    }
}


export const pickLocalImage = (path: string) => {
    switch(path){
        case "duckduckgo":
            return duckduckgo;
        case "wikipedia":
            return wikipeddia;
        default:
            return python;
    }
}







`React , Typescript , CSS , HTML , Node.js , MySQL ,
Next.js , Bootstrap , Tailwind , Docker , GIT , Apache ,
Linux , Python , Pytorch , Flask , JavaFX , C# , Unity3D
, Funcional Programming , OOP , SCRUM Development`