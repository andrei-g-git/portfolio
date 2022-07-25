"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var ProjectSwiperJS_1 = require("../projectPics/ProjectSwiperJS");
// import ShowcaseItem from '../showcaseItem/ShowcaseItem';
// import ShowcaseOverlay from '../showcaseOverlay/ShowcaseOverlay';
//import { withThemeState } from '../_higherOrderComponents/withState';
var contexts_1 = require("../_context/contexts");
//const ShowcaseOverlayWithThemeState = withThemeState(ShowcaseOverlay);
function ColabCarousel(props) {
    var notifyParent = react_1.useContext(contexts_1["default"]);
    return (React.createElement("div", { className: "carousel-container" }, React.createElement(ProjectSwiperJS_1["default"], { items: mapShowcaseItems(props.showcaseItems, 
        /* props. */ notifyParent, 
        // props.selectProject,
        // props.toggleModal,
        // props.showcaseItem,
        // props.overlay
        props //can't call the component from an argument directly, apparantly
        ) })));
}
//this should be in parent
var mapShowcaseItems = function (showcaseItems, notifyParent, /* curryNotifyParent: Function, selectProject: number, toggleModal: Function, */ props /* ShowcaseItem: JSX.Element, Overlay: JSX.Element */) {
    return showcaseItems.map(function (item) {
        return React.createElement(props.ShowcaseItem, { image: item.image, key: item.index },
            React.createElement(props.Overlay, { index: item.index, title: item.name, description: item.description, notifyParent: notifyParent, key: item.index }));
    });
};
exports["default"] = ColabCarousel;
