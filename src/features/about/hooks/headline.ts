import { useState, useEffect } from "react";

export const useAboutFile = (fullPath: string) => {
    //let about: {name: string, surname: string, title: string, headline: string} = {name: "", surname: "", title: "", headline: ""};

    const [about, setAbout] = useState({name: "blah", surname: "", title: "", headline: ""})
    useEffect(() => {
        fetch(fullPath)
            .then(response => response.json())
            .then(file => {
                setAbout(file);
                console.log("about file:  ", file);
            })

    },
        []
    )
    return about;
}