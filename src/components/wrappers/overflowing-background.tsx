import "bootstrap/dist/css/bootstrap.css"
import { ReactNode } from "react"
import "./overflowing-background.scss"

// type OverflowingBackgroundProps = {
//     children: ReactNode
// }

function OverflowingBackground({children}: {children: ReactNode}) {


    return (
        <div className="position-relative">
            <div className="overflowing-bg position-absolute"></div>
            <div className="position-absolute">
                {
                    children
                }
            </div>
        </div>
    )
}

export default OverflowingBackground
