function ProjectSlide(props: any) {
    console.log("## slide width: ", `${props.width}px`)

    return (
        <div
            style={{width: `${props.width}px`}}
        >
            <img className="awefaewf"
                style={{width: "100%", height: "100%"}}
                src={`src/assets/img/${props.image}`}
                alt="IMAGE"
            />                      
        </div>
    );
};

export default ProjectSlide;