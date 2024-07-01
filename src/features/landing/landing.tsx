import { useMachine } from "@xstate/react";
import { characterMachine } from "@/machine";

import "./landing.scss";
import { useEffect, useRef, useState, MouseEvent } from "react";

function Landing(props: any) {
    const [state, send] = useMachine(characterMachine);

    const charRef = useRef<null | HTMLDivElement>(null);

    const [x, setX] = useState<number>(0);

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
                    onClick={(event) => handleClick(event, setMouseX)}
                >
                    <div className="test-char"></div>
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

const handleClick = (event: MouseEvent, setX: React.Dispatch<React.SetStateAction<number>>) => {
    setX(event.clientX);
    console.log("clicked at positio x:   ", event.clientX)
}

const getIfGoingRighy = () => {
    
}

export default Landing
