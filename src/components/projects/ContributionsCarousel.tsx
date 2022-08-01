import {useState, useEffect} from "react";
import {computeWidthPercentOfViewport} from "../../ts/utils";

function ContributionsCarousel(props: any) {
    const slides = props.items.length;
    const gap = 5;
    const [width, setWidth] = useState(computeWidthPercentOfViewport(props.percentWidth));

    useEffect(() => {
        window.addEventListener("resize", event => {
            setWidth(computeWidthPercentOfViewport(props.percentWidth));
        })
    }, 
        []
    )
  return (
    <div>ContributionsCarousel</div>
  );
};

export default ContributionsCarousel;