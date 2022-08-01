import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import LandingPage from '../landingPage/LandingPage';
import NavBar from '../navbar/NavBar';
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import { 
    switchedAutoscroll,
    navItemHighlighted 
} from '../../redux/actions';
import { 
    scrollToActiveNavItem,
    useHighlightNavItemByScrollHeight,
    getPageVh, //should be somewhere else, it's not a hook...
    useResponsiveHeight
} from './mainHooks';
import { Pages } from '../../ts/pages';
import {withThemeState} from '../_higherOrderComponents/withState';
import "./MainComponent.scss";

const ProjectsThemed = withThemeState(Projects);

function MainComponent(props: any) {

    useHighlightNavItemByScrollHeight(props.highlightNavItem);

    useEffect(() => {
        scrollToActiveNavItem(props.selectedNavItem);
    },
        [props.clickedNavItem]
    );

    const projectsHeiht = useResponsiveHeight(getPageVh, Pages.PROJECTS.name, 480); //not sure how this works since it's a const but it seems to work...

    return (
        <div className="main" id="main">
            <LandingPage height="100vh"/> {/* heights are stored in the Pages class */}

            <NavBar />

            <About height="100vh"/>

            <ProjectsThemed height={projectsHeiht}/>

            <Contact height="100vh" />
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        clickedNavItem: state.ui.clickedNavItem, 
        autoScrolling: state.ui.autoScrolling,
        selectedNavItem: state.ui.selectedNavItem,
        showcasing: state.ui.showcasing 
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        toggleAutoscrolling: (isAutoScrolling: boolean) => {
            dispatch(switchedAutoscroll(isAutoScrolling));
        },
        highlightNavItem: (navIndex: number) => {
            dispatch(navItemHighlighted(navIndex));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
