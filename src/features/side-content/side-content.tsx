import "bootstrap/dist/css/bootstrap.css";
import { ReactNode } from "react";

function SideContent({children}: {children: ReactNode}) {

    return (
        <div style={{border: "2px solid green", height: "100%"}}>
            {children}
        </div>
    )
}

SideContent.Description = ({children}: {children: ReactNode}) => <div>{children}</div>
SideContent.Navigation = ({children}: {children: ReactNode}) => <div>{children}</div>

export default SideContent
