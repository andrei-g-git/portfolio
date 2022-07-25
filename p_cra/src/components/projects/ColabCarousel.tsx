import * as React from 'react';
import { useContext } from 'react';
import { getColabs, ColabObject } from './showcaseItems';
import ProjectSwiperJS from '../projectPics/ProjectSwiperJS';
// import ShowcaseItem from '../showcaseItem/ShowcaseItem';
// import ShowcaseOverlay from '../showcaseOverlay/ShowcaseOverlay';
//import { withThemeState } from '../_higherOrderComponents/withState';
import ModalContext from '../_context/contexts';
//const ShowcaseOverlayWithThemeState = withThemeState(ShowcaseOverlay);

function ColabCarousel(props: any) {

	const notifyParent = useContext(ModalContext);

	return (
		<div className="carousel-container">
			{
				<ProjectSwiperJS items = {mapShowcaseItems(
						props.showcaseItems,
						/* props. */notifyParent,
						
						// props.selectProject,
						// props.toggleModal,
						// props.showcaseItem,
						// props.overlay
						props //can't call the component from an argument directly, apparantly
					)}
				/>
			}
		</div>
	);
}

//this should be in parent
const mapShowcaseItems = (showcaseItems: ColabObject[], notifyParent: Function,/* curryNotifyParent: Function, selectProject: number, toggleModal: Function, */ props: any/* ShowcaseItem: JSX.Element, Overlay: JSX.Element */) => {
	return showcaseItems.map(item => 
		<props.ShowcaseItem image={item.image}
			key={item.index}
		>
			<props.Overlay index={item.index}
				title={item.name}
				description={item.description}
				notifyParent={notifyParent}
				key={item.index}
			/>
		</props.ShowcaseItem>
	);
}

export default ColabCarousel;