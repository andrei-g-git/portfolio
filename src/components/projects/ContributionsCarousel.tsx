import { useContributionsResizeListenerPixels, getSlideWidth } from "./ContributionsController";
import { colabSettings } from "./slickSettings";
import SlickSwiper from "../projectPics/SlickSwiper";
import ColabSlide from "../projectPics/ColabSlide";
import { ColabObject } from "./showcaseItems";

function ContributionsCarousel(props: any) {
    const gap = 5;

    let width = useContributionsResizeListenerPixels(props.percentWidth);

    return (
        <SlickSwiper items={mapColabSlides(props.items, width, gap, colabSettings)}
            settings={colabSettings}
            width={width + "px"}
        />
    );
};

const mapColabSlides = (items: ColabObject[], width: number, gap: number, settings: any): JSX.Element[] => {
    return items.map(item => 
        <ColabSlide key={item.index}
            image={item.image}
            title={item.name}
            description={item.description}
            width={getSlideWidth(width, settings) - gap}
        />
    )
};

export default ContributionsCarousel;