function ProjectSlide(props: any) {
    return (
        // <div
        //     style={{width: props.width, height: "100%"}}
        // >
        //     <img className="awefaewf"
        //         style={{width: "100%", height: "100%"}}
        //         src={`src/assets/img/${props.image}`}
        //         alt="IMAGE"
        //     />                      
        // </div>
        <img className="awefaewf"
            style={{width: "100%", height: "100%"}}
            src={`src/assets/img/${props.image}`}
            alt="IMAGE"
        />  
    );
};

export default ProjectSlide;