import "bootstrap/dist/css/bootstrap.css";
import { ReactNode } from "react";

function SideContent({children}: {children: ReactNode}) {

    return (
        <div /* className="container" */ style={{border: "2px solid green", height: "1500px"}}>
            {/* <div className="side-description">

            </div>
            <div className="side-navigation">
                
            </div> */}
            {children}
        </div>
    )
}

SideContent.Description = ({children}: {children: ReactNode}) => <div>{children}</div>
SideContent.Navigation = ({children}: {children: ReactNode}) => <div>{children}</div>

export default SideContent
