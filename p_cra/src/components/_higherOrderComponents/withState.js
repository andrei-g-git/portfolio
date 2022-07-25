"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.withModalState = exports.withThemeState = exports.withPageState = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../redux/actions");
exports.withPageState = function (WrappedComponent) {
    return react_redux_1.connect(mapPageState, {})(function (props) {
        return (React.createElement(WrappedComponent, __assign({}, props)));
    });
};
var mapPageState = function (state) {
    return {
        page: state.ui.highlightedNavItem
    };
};
//--------------------------------------------------------------------
exports.withThemeState = function (// DRY!!!!!!!
WrappedComponent) {
    return react_redux_1.connect(mapThemeState, {})(function (props) {
        return (React.createElement(WrappedComponent, __assign({}, props)));
    });
};
var mapThemeState = function (state) {
    return {
        darkTheme: state.ui.darkTheme
    };
};
//doesn't work, it doesn't see it as a valid component
// export const withModalState = (WrappedComponent: | typeof React.Component | React.ComponentClass<any> | React.FunctionComponent<any>) => {
//     return connectWrappedComponent(WrappedComponent);
// }
exports.withModalState = function (// DRY!!!!!!!
WrappedComponent) {
    return react_redux_1.connect(mapModalState, mapModalDispatch)(function (props) {
        return (React.createElement(WrappedComponent, __assign({}, props)));
    });
};
var mapModalState = function (state) {
    return {
        selectedItems: state.ui.selectedItems
    };
};
var mapModalDispatch = function (dispatch) {
    return {
        toggleModal: function (isVisible) {
            dispatch(actions_1.toggledShowcaseModal(isVisible));
        }
    };
};
var connectWrappedComponent = function (WrappedComponent) {
    return function () {
        return react_redux_1.connect(mapModalState, mapModalDispatch)(function (props) {
            return (React.createElement(WrappedComponent, __assign({}, props)));
        });
    };
};
