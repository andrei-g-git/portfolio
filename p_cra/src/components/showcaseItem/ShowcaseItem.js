"use strict";
exports.__esModule = true;
var React = require("react");
require("./ShowcaseItem.scss");
function ShowcaseItem(props) {
    console.log(props.width + "px    " + props.height + "px");
    return (React.createElement("div", { className: "showcase-item-container", style: { width: props.width + "px", height: props.height + "px" } },
        React.createElement("div", { className: "showcase-pic", style: {
                backgroundImage: "url(" + require("../../assets/img/" + props.image) + ")"
            } }),
        props.children));
}
exports["default"] = ShowcaseItem;
