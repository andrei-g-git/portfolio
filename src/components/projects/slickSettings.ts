import React from "react";
export const colabSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const getProjectSettings = (imagePaths: string) => {
    return {
        customPaging: (i: number): any => {
            return (
                React.createElement(
                    "a",
                    null,
                    React.createElement(
                        "img",
                        {
                            src: imagePaths[i]
                        },
                        null
                    )
                )
            )
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1        
    }

  };