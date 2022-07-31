import SwiperCore, { Navigation, Pagination, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/effect-creative';
import './ProjectSwiperJS.scss';

import {useState, useEffect} from "react";

SwiperCore.use([Navigation, Pagination, EffectCreative]);

{/* <div className="swiper-container"//coresponds to expand-project-content in the parent component      
> 
   //was wrapping the Swiper component, apparently it's a third wheel
</div> */}

function ProjectSwiperJS(props: any) {
    const [maxWidh, setMaxWidth] = useState(800);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setMaxWidth(window.innerWidth);
        })
    },
        []
    )

    return (
            <Swiper 
                modules={[Navigation, Pagination/* , EffectCreative */]}
                spaceBetween={15} //omit if effect
                slidesPerView={3}//{4} //omit if effect
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                initialSlide={1}
                speed={400}
                breakpoints={{
                    // 480: {
                    //     width: 400,
                    //     slidesPerView: 1
                    // },
                    // 1024: {
                    //     width: 600,
                    //     slidesPerView: 2            
                    // },
                    // 1280: { //this only takes in numbers, either I'll have to add A LOT of breakpoints, or it will look ugly on different screens
                    //     width: /* maxWidh / 2 - 10, */  1200,// hard coded, no bueno
                    //     slidesPerView: 3
                    // },
                    // 1925: {
                    //     width: 1600,
                    //     slidesPerView: 4
                    // }
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 15,
                      },
                      "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 15,
                      },
                }}
            >
                {   
                    props./* images */items.map((item: any/* image: string, */ /* item: JSX.Element | React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> */, index: number) => 
                        <SwiperSlide key={index}>
                            {item}

{/*                             <img className="expand-project-pic" //needs styling
                                src={require("../../assets/img/avatar1.png")}
                                alt="screenshot"
                                style={{position: "relative", top: 0, left: "50%", zIndex: 99999}}
                            />  */}                                       
                        </SwiperSlide>

                    )                                   
                }

                {
                    console.log("MAX_WIDTH: ", maxWidh)
                }
            </Swiper>
    );
};

export default ProjectSwiperJS;