import SwiperCore, { Navigation, Pagination, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-creative';
import './ProjectSwiperJS.scss';

SwiperCore.use([Navigation, Pagination, EffectCreative]);

{/* <div className="swiper-container"//coresponds to expand-project-content in the parent component      
> 
   //was wrapping the Swiper component, apparently it's a third wheel
</div> */}

function ProjectSwiperJS(props: any) {
    return (

            <Swiper 
                modules={[Navigation/* , Pagination *//* , EffectCreative */]}
                spaceBetween={10} //omit if effect
                slidesPerView={3}//{4} //omit if effect
                navigation
                initialSlide={1}
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
                    1024: { //this only takes in numbers, either I'll have to add A LOT of breakpoints, or it will look ugly on different screens
                        width: 1300,
                        slidesPerView: 3
                    }
                }}
            >
                {   
                    props./* images */items.map((/* image: string, */ item: JSX.Element, index: number) => 
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
            </Swiper>
    );
};

export default ProjectSwiperJS;