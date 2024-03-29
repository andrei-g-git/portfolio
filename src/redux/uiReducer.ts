import {
    WHATEVER,
    CHARACTER_ANIMATION_CHANGED,
    ACTIVE_NAV_ITEM_CHANGED,
    JUST_CLICKED_NAV_ITEM  ,
    SWITCHED_AUTOSCROLL,
    NAV_ITEM_SELECTED,
    NAV_ITEM_HIGHLIGHTED,
    SCROLLED,
    SCROLL_DIRECTION_CANGED,
    TOGGLED_THEME,
    TOGGLED_SHOWCASE_MODAL,
    SELECTED_SHOWCASE_ITEM,
    SELECTED_COLAB_ITEM,
    TOGGLED_COLAB_MODAL,
    CLOSING_SHOWCASE_MODAL //I'll try working with showcasing first and if it doesn't work I'll use this
} from "./actionTypes";
import {ReduxAction} from "./interface/ReduxAction";
//import { NavItems } from "../components/navbar/navItems";
import { Pages } from "../ts/pages";
import { Scrolling } from "../ts/navigation";

interface UiState{ //should be in the interfaces folder
    whatevs: number,
    characterAnimation: number,
    activeNavItem: number,
    clickedNavItem: boolean,
    autoScrolling: boolean,
    selectedNavItem: number,
    highlightedNavItem: number,
    scrolling: boolean,
    scrollDirection: number,
    darkTheme: boolean,
    showcasing: boolean, //this one is dangerous because I mihgt be using it universally when it really only applies to the project modal -- should rename to showProject
    selectedProject: number,
    selectedColab: number,
    showColab: boolean
}

const initialState: UiState = {
    whatevs: 123,
    characterAnimation: 0,
    activeNavItem: Pages.HOME.index,
    clickedNavItem: false,
    autoScrolling: false,
    selectedNavItem: 0,
    highlightedNavItem: 0,
    scrolling: false,
    scrollDirection: Scrolling.NONE,
    darkTheme: false,
    showcasing: false,
    selectedProject: 0,
    selectedColab: 0,
    showColab: false
};

export const uiReducer = (state: UiState = initialState, action: ReduxAction): UiState => {
    switch(action.type){
        case WHATEVER:
            return{
                ...state,
                whatevs: action.payload
            };
        case CHARACTER_ANIMATION_CHANGED:
            return{
                ...state,
                characterAnimation: action.payload
            };
        case ACTIVE_NAV_ITEM_CHANGED:
            return{
                ...state,
                activeNavItem: action.payload
            };
        case JUST_CLICKED_NAV_ITEM:
            return{
                ...state,
                clickedNavItem: action.payload
            };
        case SWITCHED_AUTOSCROLL:
            return{
                ...state,
                autoScrolling: action.payload
            };
        case NAV_ITEM_SELECTED:
            return{
                ...state,
                selectedNavItem: action.payload
            };
        case NAV_ITEM_HIGHLIGHTED:
            return{
                ...state,
                highlightedNavItem: action.payload
            };   
        case SCROLLED:
            return{
                ...state,
                scrolling: action.payload
            };
        case SCROLL_DIRECTION_CANGED:
            return{
                ...state,
                scrollDirection: action.payload
            };     
        case TOGGLED_THEME:
            return{
                ...state,
                darkTheme: action.payload
            }; 
        case TOGGLED_SHOWCASE_MODAL:
            return{
                ...state,
                showcasing: action.payload
            };   
        case SELECTED_SHOWCASE_ITEM:
            return{
                ...state,
                selectedProject: action.payload
            };        
        case SELECTED_COLAB_ITEM:
            return{
                ...state,
                selectedColab: action.payload
            };  
        case TOGGLED_COLAB_MODAL:
            return{
                ...state,
                showColab: action.payload
            }                 
        default:
            return state;
    }
};