import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SlickSwiper.scss";

function SlickSwiper(props: any) {

    return (
        <div style={{width: `${props.width}px`, height: "300px"}}>
            <div></div> {/* without this it freaks out when I shrink window too much. No idea why */}
            <Slider {...props.settings}>
                {
                    props.items.map((item: JSX.Element) => 
                        {
                            return item //doesn't work without the return statement...
                        }                    
                    )
                }
            </Slider>            
        </div>

    );
};

export default SlickSwiper;