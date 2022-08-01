import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SlickSwiper.scss";
import { JsxElement } from "typescript";

function SlickSwiper(props: any) {

    console.log(props.items, "\n", props.width, "\n", props.settings)

    console.log("<<<<<<<ITEMS>>>>>>>   ", props.items)

    // const slides = props.items.length;
    // const gap = 5;
    // const [width, setWidth] = useState(Math.floor(window.innerWidth * 0.8));
    // //const [height, setHeight] = useState()
    // useEffect(() => {
    //     window.addEventListener("resize", event => {
    //         setWidth(Math.floor(window.innerWidth * 0.8));
    //     })
    // }, 
    //     []
    // )

    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     initialSlide: 1,
    //     adaptiveHeight: true,
    //     responsive: [
    //       {
    //         breakpoint: 1280,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 1,
    //           infinite: false,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   };

    // props.items.forEach((item: string) => {
    //     console.log(`src/assets/img/${item}`)
    // })

    return (
        <div style={{width: `${props.width}px`, height: "300px"}}>
            <div></div> {/* without this it freaks out when I shrink window too much. No idea why */}
            <Slider {...props.settings}>
                {
                    props.items.map((item: /* string *//* JSX.Element */any, index: number) => 
                        // <div key={index}
                        //     style={{width: `${props.slideWidth}px`}}
                        // >
                        //     <img className="test-slick"
                        //         style={{width: "100%", height: "100%"}}
                        //         src={`src/assets/img/${item}`}
                        //         alt="IMAGE"
                        //     />                      
                        // </div>
                        {
                            console.log(item)
                            return item
                        }
                        
                    )
                }
            </Slider>            
        </div>

    );
};

export default SlickSwiper;