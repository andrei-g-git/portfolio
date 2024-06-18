import { useEffect, useState } from "react"

export const useMarkScrolledElement_NO = (className: string) => {
    const [passed, setPassed] = useState("");
    useEffect(() => {
        window.addEventListener("scroll", function() {
            //const siblings = document.getElementsByClassName(className);
            const siblings = document.querySelectorAll<HTMLElement>(className);
            const result = Array.from(siblings).filter(elem => 
                window.scrollY > (elem.offsetTop + elem.offsetHeight)
            )
            if(result[0]) { setPassed(result[0].id); console.log("id of elem passed:   ", result[0].id)}
        })
    },
        []
    )
    return passed;
}


// export const useMarkScrolledElement = (className: string) => {
//     const [passed, setPassed] = useState("");
//     useEffect(() => {
//         window.addEventListener("scroll", function() {
//             //var elementTarget = document.getElementById("section-2");
//             const siblings = document.querySelectorAll<HTMLElement>(className); 
//             siblings.forEach(elem => {
//                 if (elementTarget && window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
//                     alert(`You've scrolled past the div   ${ elementTarget.id}`);
//                 }                
//             })

//         })
//     },
//         []
//     )        
// }