function ColabSlide(props: any) {
    return (
        <div //key={index}
            style={{width: `${props.width}px`}}
        >
            <img className="test-slick"
                style={{width: "100%", height: "100%"}}
                src={`src/assets/img/${props.image}`}
                alt="IMAGE"
            />                      
        </div>
    );
};

export default ColabSlide;