export const observeIntersection = (callback: IntersectionObserverCallback, className: string) => {
    const observer = new IntersectionObserver(callback); //this wil be hard to test if I hard code ... except I don't need to mock the thing siince it's embeded in javascript...
    const options = {root: null, rootMargin: "0px", threshold: 1};

    const elements = document.querySelectorAll(className);
    elements.forEach(element => {
        observer.observe(element);//, options);
    });
}