import about from "../../assets/text/about.json";

function Headline(props: any) {

    return (
        <div>
            <p>
                {
                    about.name + " " + about.surname
                }
            </p>
            <p>
                {
                    about.title
                }
            </p>
            <p>
                {
                    about.headline
                }
            </p>                                   
        </div>
    )
}

export default Headline
