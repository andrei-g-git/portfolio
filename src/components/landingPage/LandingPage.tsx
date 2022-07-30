import {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { characterAnimationChanged } from '../../redux/actions';
import { 
    getCharacterAnimationUri
} from './animations';
import { 
    handleDoodadClick, 
    useCharacterEntrance 
} from './landingPageController';
import { 
    useHorizontalPanningPANZOOM, 
    useCenteredResizing 
} from './movementHooks';
import ShelfDoodad from '../shelfDoodad/ShelfDoodad';
import { animations } from './animations';
import image1 from '../../assets/img/testDoodad1.png';
import image2 from '../../assets/img/testDoodad2.png';
import "../landingPage/LandingPage.scss";

export const LandingPage = (props: any) => { //make this thing pannable horizontally rather than using the scrollbar

    useCharacterEntrance(props.changeCharacterAnimation, animations);

    useCenteredResizing("landing-page-container", 1920);

    useHorizontalPanningPANZOOM("landing-page-container", 1920);

    const initialAnim = "src/" + animations.walkingIn.path;
    const [animUri, setAnimUri] = useState(initialAnim)

    useEffect(() => {
        const path = getCharacterAnimationUri(props.characterAnimation, animations, "src/"); //in vite the uri path is relative to the static directory that runs in the browser, not the local project environment
        setAnimUri(path);                                                                       //although mayme it;s just relative to that if not imported...
    },
        [props.characterAnimation]
    )

    return (
        <div className="landing-page-container" 
            id="landing-page-container"
            style={{height: props.height, maxHeight: props.height}}
        >

            <div className="landing-page-background"></div>

            <ShelfDoodad image={image1}
                index={1}
                notifyClick={handleDoodadClick(props.changeCharacterAnimation, animations)}
                x="100px"
                y="200px"
            />
            <ShelfDoodad image={image2}
                index={2}
                notifyClick={handleDoodadClick(props.changeCharacterAnimation, animations)}
                x="1600px"
                y="200px"
            />
            <img className="character" 
                src={animUri + "?" + Math.random().toString()}        
                alt="char"
            />

            <div className="landing-page-foreground"></div>

        </div>

    );
}

const mapStateToProps = (state: any) => {
    return{
        characterAnimation: state.ui.characterAnimation
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        changeCharacterAnimation: (index: number) => {
            dispatch(characterAnimationChanged(index));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);


