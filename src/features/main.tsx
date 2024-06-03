import { Landing } from "@/features/landing";
import { SideContent } from "@/features/side-content";
import { Headline} from "@/features/about";
import "bootstrap/dist/css/bootstrap.css"
import "./main.scss";

function Main(props: any) {

    return (
        <div className="container">
            <Landing />

            <div className="row">
                <div className="col-5 sticky-top vh-100"> 
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
    )
}

export default Main
