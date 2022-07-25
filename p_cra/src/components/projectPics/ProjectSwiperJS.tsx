import * as React from 'react';
import SwiperCore, { Navigation, Pagination, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import './ProjectSwiperJS.scss';

SwiperCore.use([Navigation, Pagination, EffectCreative]);

function ProjectSwiperJS(props: any) {
    return (
        <div className="swiper-container" //coresponds to expand-project-content in the parent component
            // style={{ //make css file
            //     display: "flex",
            //     justifyContent: "center",
            //     alignItems: "center", //??
            //     width: "80%",
            // }}
        >
            <Swiper 
                modules={[Navigation/* , Pagination *//* , EffectCreative */]}
                spaceBetween={400} //omit if effect
                slidesPerView={3} //omit if effect
                navigation
                //pagination
                //effect="creative"
                //centeredSlides={true}
                // creativeEffect={{
                //     prev: {
                //         translate: [0.01, 0, 0],
                //         scale: 0.7
                //     },
                //     next: {
                //         translate: ['100%', 0, 0],
                //         scale: 1
                //     },
                // }}
                speed={400}
                breakpoints={{
                    425: {
                        width: 425,
                        slidesPerView: 1
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2            
                    },
                    1024: {
                        width: 700,
                        slidesPerView: 4
                    }
                }}
            >
                {
                    props./* images */items.map((/* image: string, */ item: JSX.Element, index: number) => 
                        <SwiperSlide key={index}>
                            {item}

                            {/* <img className="expand-project-pic" //needs styling
                                src={require("../../assets/img/" + image)}
                                alt="screenshot"
                            />                                         */}
                        </SwiperSlide>

                    )                                   
                }
            </Swiper>
        </div>
    );
};

export default ProjectSwiperJS;