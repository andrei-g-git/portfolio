import { Animation } from "./Animation";

export const animations: any = {
    walkingIn: <Animation> {
        index: 0,
        path: "assets/img/walking-left.gif",
        duration: 2200,
        preceedingAnimation: "" 
    },
    turning: <Animation> {
        index: 1,
        path: "assets/img/turn-forward.gif",
        duration: 500,
        preceedingAnimation: "walkingIn"
    },
    restingArms: <Animation> {
        index: 2,
        path: "assets/img/sitting.gif",
        duration: 500,
        preceedingAnimation: "turning"
    },
    idling: <Animation> {
        index: 3,
        path: "assets/img/idling-2.gif",
        duration: 2000,
        preceedingAnimation: "restingArms"
    },
    lookingAtThing1: <Animation> {
        index: 4,
        path: "assets/img/looking-left-1.gif",
        duration: 1500,
        preceedingAnimation: "idling"
    },
    lookingAtThing2: <Animation> {
        index: 5,
        path: "assets/img/looking-right-1.gif",
        duration: 1500,
        preceedingAnimation: "idling"
    } 
};

export const getCharacterAnimationUri = (index: number, animationsObject: any, relativePathPrefix: string): string => {

    let path: string = "";
    for(const [name, animation] of Object.entries(animationsObject)){
        if((<Animation>animation).index === index){
            path += (<Animation>animation).path; 
            break;
        }
    }
    return relativePathPrefix +  path;
};

export const getAnimationByName = (name: string, animationsObject: any): number => {
    return animationsObject[name].index;
};

export const getAnimationByDoodadNumber = (index: number) : number => {
    switch(index){
        case 1:
            return 4;
        case 2:
            return 5;
        default: 
            return 4;
    }
};