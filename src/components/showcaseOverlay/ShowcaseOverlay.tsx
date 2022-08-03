import "./ShowcaseOverlay.scss";

function ShowcaseOverlay(props: any) { //switch dark/light theme
    console.log(props.title)
    return (
        <div className={props.darkTheme ? "theme-dark" : "theme-light"}>
            <div className="showcase-overlay-container">
                <h3 className="showcase-title">
                    {props.title}
                </h3>

                <p className="showcase-description">
                    {props.description}
                </p>

                <div className="showcase-button"
                    onClick={() => { props.notifyParent(props.index); console.log("clicked overlay") }}
                >
                    EXPAND
                </div>
            </div>
        </div>
    );
}

export default ShowcaseOverlay;