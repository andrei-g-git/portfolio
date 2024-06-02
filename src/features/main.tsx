import { Landing } from "@/features/landing";
import { SideContent } from "@/features/side-content";
import { Headline} from "@/features/about";
import "bootstrap/dist/css/bootstrap.css"


function Main(props: any) {

    return (
        <div className="main-container">
            <Landing />
            <div className="container">
                <div className="row">
                    <div className="container col-5">
                        {/* <div style={{border: "solid 2px gray", width: "85%", height: "100%"}}>

                        </div> */}
                        <SideContent>
                            <SideContent.Description>
                                <Headline />
                            </SideContent.Description>
                            <SideContent.Navigation>
                            <div>
                                <p>Home</p>
                                <p>About </p>
                                <p>Experience</p>
                                <p>Skills</p>

                            </div>
                            </SideContent.Navigation>
                        </SideContent>                        
                    </div> 

                    <div className="container col-7" style={{border: "2px solid red", height: "1500px"}}>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Main
