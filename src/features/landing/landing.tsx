import { useMachine } from "@xstate/react";
import { characterMachine } from "@/machine";

import "./landing.scss";
import { useEffect, useRef, useState, MouseEvent } from "react";

function Landing(props: any) {
    const charDiv = document.getElementsByClassName("test-char")[0];

    const [state, send] = useMachine(characterMachine);

    const charRef = useRef<null | HTMLDivElement>(null);

    const [x, setX] = useState<number>(charRef.current? charRef.current.offsetLeft: 0);

    const [mouseX, setMouseX] = useState<number>(0);

    useEffect(() => {
        setX(getX(charRef));
    },
        [charRef]
    )

    return (
        <div className="landing-container">
            <div className="landing-canvas">
                <div className="test-container"
                    onClick={(event) => handleClick(
                        charDiv,
                        mouseX,
                        event, 
                        x, 
                        charRef.current? charRef.current.offsetWidth : 0, 
                        setMouseX, 
                        () => {})
                    }
                >
                    <div className="test-char"
                        ref={charRef}
                        style={{
                            position: 'absolute',
                            left: `calc(${mouseX}px - ${charRef.current? charRef.current.offsetWidth/2 : 0}px)`
                        }}
                    >

                    </div>
                    <div className="test-react"></div>
                    <div className="test-nodejs"></div>
                    <div className="test-mysql"></div>                    
                </div>

            </div>
        </div>
    )
}

const getX = (ref: React.MutableRefObject<null | HTMLDivElement>) => {
    if (!ref.current) return 0;
    return ref.current?.offsetLeft;
}

const handleClick = (charDiv: Element, mouseX: number, event: MouseEvent, charX: number, charWidth: number, setMouseX: React.Dispatch<React.SetStateAction<number>>, pickDirection: Function) => {
    setMouseX(event.clientX);
    console.log("clicked at positio x:   ", event.clientX)

    const delta = event.clientX - (charX + charWidth/2);
    const isGoingRight = Boolean(Math.max(0, delta));
    console.log('delta   ', delta)
    console.log('GOING RIGHT:   ', isGoingRight)

    console.log("MouseX:   ", mouseX)

    charDiv.classList.add("test-move-animation") //gotta remove
    return isGoingRight;
}

const getIfGoingRight = (mouseX: number, charX: number) => {
    
}

export default Landing
