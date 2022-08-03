import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useContributionsResizeListenerPixels, getSlideWidth } from "./ContributionsController";
import { colabSettings } from "./slickSettings";
import SlickSwiper from "../projectPics/SlickSwiper";
import ColabSlide from "../projectPics/ColabSlide";
import { ColabObject } from "./showcaseItems";
import { getColabs } from "./showcaseItems";
import { withThemeState } from "../_higherOrderComponents/withState";
import ShowcaseOverlay from "../showcaseOverlay/ShowcaseOverlay";
import { selectedColabItem, toggledShowcaseModal } from '../../redux/actions';

const ShowcaseOverlayWithThemeState = withThemeState(ShowcaseOverlay);

function ContributionsCarousel(props: any) {
    const gap = 5;

    let width = useContributionsResizeListenerPixels(props.percentWidth);

    return (
        //<div className="contributions-container">
            <SlickSwiper items={mapColabSlides(props.items, width, gap, colabSettings, curryStoreSelectedColab(
                props.selectProject, 
                props.toggleModal
            ))}
                settings={colabSettings}
                width={width + "px"}
            />
        //</div>
    );
};

const curryStoreSelectedColab = (selectedColabItemCallback: Function, toggledCallback: Function) => { //this can be reused
	return (index: number) => {
		selectedColabItemCallback(index);
		toggledCallback(true);
	};
};

const mapColabSlides = (items: ColabObject[], width: number, gap: number, settings: any, notifyParent: Function): JSX.Element[] => {
    return items.map(item => 
        <ColabSlide key={item.index}
            image={item.image}
            // title={item.name}
            // description={item.description}
            width={getSlideWidth(width, settings) - gap}
        >
            <ShowcaseOverlayWithThemeState index={item.index}
                title={item.name}
                description={item.description}
                notifyParent={notifyParent}
                key={item.index}
            />
        </ColabSlide>
    )
};

const mapStateToProps = (state: any) => {
	return{
		showcasing: state.ui.showcasing,
		selectedColab: state.ui.selectedColab
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return{
		selectColab: (index: number) => {
			dispatch(selectedColabItem(index));
		},
		toggleModal: (isVisible: boolean) => {
			dispatch(toggledShowcaseModal(isVisible));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ContributionsCarousel);