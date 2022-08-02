import { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggledShowcaseModal } from '../../redux/actions';
import ProjectSimpleGallery from '../projectPics/ProjectSimpleGallery';
import { getDelayAndAppendToClassName } from './ExpandProjectController';
import TextButton from '../buttons/TextButton';
import ProjectInfo from './ProjectInfo';
import ProjectCarousel from './ProjectCarousel';
import "./ExpandProject.scss";


export const ExpandProject = (props: any) => {

    const [modalCloseClass, setPopupClass] = useState("");

    const {popupClass, delay} = getDelayAndAppendToClassName(0.4);

    const widthRatio = 0.50;

    return ( 
        props.visible ? 
            <div className={props.darkTheme? "theme-dark" : "theme-light"}>
                <div className="expand-project-container">
                    <div className={"expand-project-modal" + modalCloseClass}
                        style={{width: (widthRatio * 100) + "%"}}
                    >

                        <div className="expand-project-upper">
                            {/* <ProjectSimpleGallery images={props.images} /> */}
                            <ProjectCarousel images = {props.images}//images={props.images} 
                                percentWidth={0.85 * widthRatio}
                            />

                            <div className="expand-project-info-wrapper">
                                <ProjectInfo title={props.title}
                                    description={props.description}
                                    logos={props.logos}
                                    frameworks={props.frameworks}
                                />
                            </div>

                        </div>

                        <div className="expand-project-buttons-padding">
                            <div className="expand-project-buttons">
                                <div className="expand-project-buttons-left">
                                    <TextButton handleClick={props.openSite}
                                        theme="button-color-cta"
                                    >
                                        Visit Website
                                    </TextButton>

                                    <TextButton handleClick={props.openGit}
                                        theme="button-color-cta"
                                    >
                                        Github
                                    </TextButton>

                                </div>
                                <TextButton handleClick={close(
                                        props.closeModal,
                                        delay,
                                        setPopupClass,
                                        popupClass
                                    )}
                                    theme="button-color-plain"
                                > 
                                    Close 
                                </TextButton>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        :
            null               
    );
};

const close = (closeModal: Function, delay: number, setPopupClass: Function, popupClass: String): Function => {
    return () => {
        setPopupClass(popupClass);
        setTimeout(() => {
            closeModal(false);
            setPopupClass("");
        },
            delay
        );        
    };
};

const mapStateToProps = (state: any) => {
    return{
        visible: state.ui.showcasing,
        darkTheme: state.ui.darkTheme //delete, testing to see if the higher order redux component is interfering with this
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        closeModal: (isVisible: boolean, delay: number) => {
            setTimeout(() => {
                dispatch(toggledShowcaseModal(isVisible));
            },
                delay
            );
            
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpandProject);