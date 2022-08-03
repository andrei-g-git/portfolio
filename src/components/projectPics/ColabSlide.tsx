import "./ColabSlide.scss";

function ColabSlide(props: any) {
    return (
        <div className="colab-slide-container"
            style={{width: `${props.width}px`}}
        >
            <img className="colab-pic"
                style={{width: "100%", height: "100%"}}
                src={`src/assets/img/${props.image}`}
                alt="IMAGE"
            />   

            {props.children}                   
        </div>
    );
};

export default ColabSlide;