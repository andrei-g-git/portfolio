"use strict";
exports.__esModule = true;
exports.closingShowcaseModal = exports.selectedColabItem = exports.selectedShowcaseItem = exports.toggledShowcaseModal = exports.toggledTheme = exports.scrollDirectionChanged = exports.scrolled = exports.navItemSelected = exports.navItemHighlighted = exports.switchedAutoscroll = exports.justClickedNavItem = exports.activeNavItemChanged = exports.characterAnimationChanged = exports.whatever = void 0;
var actionTypes_1 = require("./actionTypes");
exports.whatever = function (value) {
    return {
        type: actionTypes_1.WHATEVER,
        payload: value
    };
};
exports.characterAnimationChanged = function (index) {
    return {
        type: actionTypes_1.CHARACTER_ANIMATION_CHANGED,
        payload: index
    };
};
exports.activeNavItemChanged = function (navIndex) {
    return {
        type: actionTypes_1.ACTIVE_NAV_ITEM_CHANGED,
        payload: navIndex
    };
};
exports.justClickedNavItem = function (justClicked) {
    return {
        type: actionTypes_1.JUST_CLICKED_NAV_ITEM,
        payload: justClicked
    };
};
exports.switchedAutoscroll = function (autoScrolling) {
    return {
        type: actionTypes_1.SWITCHED_AUTOSCROLL,
        payload: autoScrolling
    };
};
exports.navItemHighlighted = function (navIndex) {
    return {
        type: actionTypes_1.NAV_ITEM_HIGHLIGHTED,
        payload: navIndex
    };
};
exports.navItemSelected = function (navIndex) {
    return {
        type: actionTypes_1.NAV_ITEM_SELECTED,
        payload: navIndex
    };
};
exports.scrolled = function (isScrolling) {
    return {
        type: actionTypes_1.SCROLLED,
        payload: isScrolling
    };
};
exports.scrollDirectionChanged = function (scrollDirection) {
    return {
        type: actionTypes_1.SCROLL_DIRECTION_CANGED,
        payload: scrollDirection
    };
};
exports.toggledTheme = function (isDark) {
    return {
        type: actionTypes_1.TOGGLED_THEME,
        payload: isDark
    };
};
exports.toggledShowcaseModal = function (showcasing) {
    return {
        type: actionTypes_1.TOGGLED_SHOWCASE_MODAL,
        payload: showcasing
    };
};
exports.selectedShowcaseItem = function (selectedItem) {
    return {
        type: actionTypes_1.SELECTED_SHOWCASE_ITEM,
        payload: selectedItem
    };
};
exports.selectedColabItem = function (selectedItem) {
    return {
        type: actionTypes_1.SELECTED_COLAB_ITEM,
        payload: selectedItem
    };
};
exports.closingShowcaseModal = function (closing) {
    return {
        type: actionTypes_1.CLOSING_SHOWCASE_MODAL,
        payload: closing
    };
};
