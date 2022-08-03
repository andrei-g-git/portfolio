//can't use typescript, swiper doesn't like it

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs, Pagination } from "swiper";

function ThumbGallerySwiper(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState();

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={false}
                navigation={true}
                pagination={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[Navigation, Thumbs, Pagination]}
            >
                {
                    props.images.map((image, index) => 
                        <SwiperSlide key={index}>
                            {
                                image
                            }
                        </SwiperSlide>
                    )
                }
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={false}
                spaceBetween={10}
                slidesPerView={3}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    props.images.map((image, index) => 
                        <SwiperSlide key={index}>
                            {
                                image
                            }
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>            
    );
}
;
export default ThumbGallerySwiper