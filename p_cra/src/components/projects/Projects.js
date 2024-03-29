"use strict";
exports.__esModule = true;
var React = require("react");
//import { createContext } from 'react';
var react_redux_1 = require("react-redux");
var ShowcaseItem_1 = require("../showcaseItem/ShowcaseItem");
var ShowcaseOverlay_1 = require("../showcaseOverlay/ShowcaseOverlay");
var ExpandProject_1 = require("../expandProject/ExpandProject");
var ColabCarousel_1 = require("./ColabCarousel");
var showcaseItems_1 = require("./showcaseItems");
var withState_1 = require("../_higherOrderComponents/withState");
var actions_1 = require("../../redux/actions");
var contexts_1 = require("../_context/contexts");
require("./Projects.scss");
//const ModalContext = createContext((abc: number) => {}/* : Function => {return (abc: number) => {}} */);
var ShowcaseOverlayWithThemeState = withState_1.withThemeState(ShowcaseOverlay_1["default"]);
//const ExpandProjectWithThemeState = withThemeState(ExpandProject);
var ColabCarouselWithModalState = withState_1.withModalState(ColabCarousel_1["default"]);
var Projects = function (props) {
    var upperClass = "projects-container";
    if (props.showcasing)
        upperClass += " blur-projects"; //ternary statement in the tsx doesn't work for some reason
    return (React.createElement("div", { className: props.darkTheme ? "theme-dark" : "theme-light" },
        React.createElement("div", { className: upperClass, style: { height: props.height, maxHeight: props.height } },
            React.createElement("div", { className: "projects-title" }, "PROJECTS"),
            React.createElement("div", { className: "showcase-container" }, showcaseItems_1.getShowcaseItems().map(function (item) {
                return React.createElement(ShowcaseItem_1["default"], { image: item.image, key: item.index },
                    React.createElement(ShowcaseOverlayWithThemeState, { index: item.index, title: item.name, description: item.description, notifyParent: curryStoreSelectedProject(props.selectProject, props.toggleModal), key: item.index }));
            })),
            React.createElement(ExpandProject_1["default"], { images: showcaseItems_1.getShowcaseItems()[props.selectedProject].images, title: showcaseItems_1.getShowcaseItems()[props.selectedProject].name, description: showcaseItems_1.getShowcaseItems()[props.selectedProject].longDescription, frameworks: showcaseItems_1.getShowcaseItems()[props.selectedProject].frameworks, logos: showcaseItems_1.getShowcaseItems()[props.selectedProject].frameworkLogos, openSite: curryOpenProjectUrl(showcaseItems_1.getShowcaseItems(), props.selectedProject, false), openGit: curryOpenProjectUrl(showcaseItems_1.getShowcaseItems(), props.selectedProject, true) }),
            React.createElement(contexts_1["default"].Provider, { value: curryStoreSelectedProject(props.selectColab, props.toggleModal) },
                React.createElement(ColabCarousel_1["default"], { showcaseItems: showcaseItems_1.getColabs(), ShowcaseItem: ShowcaseItem_1["default"], Overlay: ShowcaseOverlayWithThemeState })))));
};
// const getShowcasePicturesForModal = (index: number): ShowcaseObject => {
// 	const showcaseItems = getShowcaseItems();
// 	const pics = showcaseItems[index];
// 	return pics;
// }
var curryStoreSelectedProject = function (selectedShowcaseItemCallback, toggledCallback) {
    return function (index) {
        selectedShowcaseItemCallback(index);
        toggledCallback(true);
    };
};
var curryOpenProjectUrl = function (showcaseItems, index, isGit) {
    return function () {
        var showcaseObject = showcaseItems[index];
        var siteOrGit = showcaseObject[isGit ? "git" : "url"]; //i don't like branching in this sort of thing I should leave this as a helper function and have separate functions for git and the site
        window.open(siteOrGit, "_blank");
    };
};
var mapStateToProps = function (state) {
    return {
        showcasing: state.ui.showcasing,
        selectedProject: state.ui.selectedProject,
        selectedColab: state.ui.selectedColab
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        selectProject: function (index) {
            dispatch(actions_1.selectedShowcaseItem(index));
        },
        selectColab: function (index) {
            dispatch(actions_1.selectedColabItem(index));
        },
        toggleModal: function (isVisible) {
            dispatch(actions_1.toggledShowcaseModal(isVisible));
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Projects);
