import "./TextButton.scss";
import "../../css/Common.scss";

function TextButton(props: any) {
	console.log("CLASS: ", `button-border ${props.theme ? props.theme : ""}`)
	return (
		<div className={`button-border ${props.theme ? props.theme : ""}`}
			onClick={props.handleClick}
		>
			{props.children}
		</div>
	);
};

export default TextButton;