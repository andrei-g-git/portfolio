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

            // const ul = document.getElementsByClassName("slick-dots")[0];
            // ul.setAttribute("style", "bottom: - calc(100% / 3)");
            // const lists = ul.querySelectorAll("li");
            // lists.forEach((li) =>{
            //     li.setAttribute("style", "width: 33%"/* "width: calc(25% - 10px);height: 100%;" */)
            // })
            return (
                React.createElement(
                    "a",
                    null,
                    React.createElement(
                        "img",
                        {
                            src: "src/assets/img/" + imagePaths[i],
                            width: "100%"/* "100px" *//* `calc(100% / ${imagePaths.length})` */,
                            height: "100%"
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