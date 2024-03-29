import * as React from 'react';
//import { createContext } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ShowcaseItem from '../showcaseItem/ShowcaseItem';
import ShowcaseOverlay from '../showcaseOverlay/ShowcaseOverlay';
import ExpandProject from '../expandProject/ExpandProject';
import ColabCarousel from './ColabCarousel';
import { getColabs, getShowcaseItems, ShowcaseObject } from './showcaseItems';
import { withThemeState, withModalState } from '../_higherOrderComponents/withState';
import { toggledShowcaseModal, selectedShowcaseItem, selectedColabItem } from '../../redux/actions';
import ModalContext from '../_context/contexts';
import "./Projects.scss";

//const ModalContext = createContext((abc: number) => {}/* : Function => {return (abc: number) => {}} */);

const ShowcaseOverlayWithThemeState = withThemeState(ShowcaseOverlay);
//const ExpandProjectWithThemeState = withThemeState(ExpandProject);
const ColabCarouselWithModalState = withModalState(ColabCarousel);

const Projects = (props: any) => {

	let upperClass = "projects-container";
	if(props.showcasing) upperClass += " blur-projects" //ternary statement in the tsx doesn't work for some reason
	return (
		<div className={props.darkTheme ? "theme-dark" : "theme-light"}>

			<div className={upperClass}
						style={{ height: props.height, maxHeight: props.height }}
					>
				<div className="projects-title">
					PROJECTS
				</div>
				<div className="showcase-container">
					{
						getShowcaseItems().map((item) => 
							<ShowcaseItem image={item.image}
								key={item.index}
							>
								<ShowcaseOverlayWithThemeState index={item.index}
									title={item.name}
									description={item.description}
									notifyParent={curryStoreSelectedProject(
										props.selectProject, 
										props.toggleModal
									)}
									key={item.index}
								/>
							</ShowcaseItem>
						)
					}
				</div>
				<ExpandProject images={getShowcaseItems()[props.selectedProject].images}
					title={getShowcaseItems()[props.selectedProject].name} //I should probably extract the showcase object once
					description={getShowcaseItems()[props.selectedProject].longDescription}
					frameworks={getShowcaseItems()[props.selectedProject].frameworks}
					logos={getShowcaseItems()[props.selectedProject].frameworkLogos}
					openSite={curryOpenProjectUrl(
						getShowcaseItems(), 
						props.selectedProject, 
						false
					)}
					openGit={curryOpenProjectUrl(
						getShowcaseItems(), 
						props.selectedProject, 
						true
					)}
				/>
				{/* <ColabCarouselWithModalState showcaseItems={getColabs} */}
				<ModalContext.Provider value={curryStoreSelectedProject(
						props.selectColab, 
						props.toggleModal
					)}
				>
					<ColabCarousel showcaseItems={getColabs()}
						ShowcaseItem={ShowcaseItem}
						Overlay={ShowcaseOverlayWithThemeState}
/* 						notifyParent={curryStoreSelectedProject(
							props.selectColab, 
							props.toggleModal
						)} */
					/>
				</ModalContext.Provider>
			</div>

		</div>

	);
};


// const getShowcasePicturesForModal = (index: number): ShowcaseObject => {
// 	const showcaseItems = getShowcaseItems();
// 	const pics = showcaseItems[index];
// 	return pics;
// }

const curryStoreSelectedProject = (selectedShowcaseItemCallback: Function, toggledCallback: Function)/* : Function */ => { //should be custom hook
	return (index: number) => {
		selectedShowcaseItemCallback(index);
		toggledCallback(true);
	};
};

const curryOpenProjectUrl = (showcaseItems: ShowcaseObject[], index: number, isGit: boolean) => {
	return (): void => {
		const showcaseObject = showcaseItems[index];
		const siteOrGit = showcaseObject[isGit? "git" : "url"]; //i don't like branching in this sort of thing I should leave this as a helper function and have separate functions for git and the site
		window.open(siteOrGit, "_blank");
	};
}

const mapStateToProps = (state: any) => {
	return{
		showcasing: state.ui.showcasing,
		selectedProject: state.ui.selectedProject, 
		selectedColab: state.ui.selectedColab
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return{
		selectProject: (index: number) => {
			dispatch(selectedShowcaseItem(index));
		},
		selectColab: (index: number) => {
			dispatch(selectedColabItem(index));
		},
		toggleModal: (isVisible: boolean) => {
			dispatch(toggledShowcaseModal(isVisible));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);