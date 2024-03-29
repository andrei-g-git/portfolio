export class Pages { 
    static get HOME(){
        return {
            index: 0,
            name: "home",
            height: "100vh",
            mobileHeight: "100vh",
            tabletHeight: "100vh"
        };
    }
    static get ABOUT(){
        return {
            index: 1,
            name: "about",
            height: "100vh",
            mobileHeight: "100vh",
            tabletHeight: "100vh"
        };
    }
    static get PROJECTS(){
        return {
            index: 2,
            name: "projects",
            height: "130vh",
            mobileHeight: "199vh",
            tabletHeight: "199vh"
        };
    }
    static get CONTACT(){
        return {
            index: 3,
            name: "contact",
            height: "100vh",
            mobileHeight: "100vh",
            tabletHeight: "100vh"
        };
    }

    static getNavItems(): String[]{
        return [
            Pages.HOME.name,
            Pages.ABOUT.name,
            Pages.PROJECTS.name,
            Pages.CONTACT.name 
        ];
    }
}