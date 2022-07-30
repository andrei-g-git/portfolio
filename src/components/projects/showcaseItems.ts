export class Showcase{
    static get GAMESTORE(){
        return{
            index: 0,
            name: "gamestore",
            url: "https://wikipedia.org"
        };
    }

    static get MOTORHEAD(){
        return{
            index: 1,
            name: "motorhead",
            url: "duckduckgo.com"
        };
    }

    static get INVOICE(){
        return{
            index: 2,
            name: "invoice",
            url: "startpage.com"
        };
    }

    static get STANDIN(){
        return{
            index: 3,
            name: "standin",
            url: "piped.kavin.rocks"
        };
    }
}

export interface ShowcaseObject{
    index: number, 
    name: string, //not String?
    description: string, 
    longDescription: string,
    frameworks: string[],
    frameworkLogos: string[],
    url: string, 
    git: string,
    image: string, 
    images: string[]
}

export interface ColabObject{
    index: number,
    name: String,
    description: String,
    describeContribution: String,
    url: String, 
    git: String,
    topCommits: String[],
    image: String, 
}

export const getShowcaseItems = (): ShowcaseObject[] => {
    return [
        {
            index: 0,
            name: "gamestore",
            description: "a game store client with server side",
            longDescription : `
                Et ligula ullamcorper malesuada proin libero nunc consequat. Ut lectus arcu bibendum at varius vel pharetra. Arcu risus quis varius quam quisque id. Amet aliquam id diam maecenas ultricies mi eget mauris. At consectetur lorem donec massa sapien faucibus. Vel orci porta non pulvinar neque. Consequat nisl vel pretium lectus quam id leo in. Vitae congue eu consequat ac felis. Pharetra vel turpis nunc eget lorem dolor. Aliquet nec ullamcorper sit amet risus nullam eget. Sed felis eget velit aliquet.
            `,
            frameworks: [
                "react", "bootstrap", "sass", "redux", "expressJS", "swiperjs" 
            ],
            frameworkLogos: [
                "skill-react.png",
                "skill-bootstrap.png",
                "skill-sass.png",
                "skill-redux.png",
                "skill-nodejs.png",
                "skill-swiperjs.png",
            ],
            url: "https://wikipedia.org",
            git: "https://github.com/andrei-g-git/game-store",
            image: "work-gamestore1.png",
            images: [
                "work-gamestore2.png",
                "work-gamestore3.png",
                "work-gamestore4.png",
            ]
        },
        {
            index: 1,
            name: "motorhead",
            description: "motorhead fan page, blah blah blah blah blah",
            longDescription : `
                Et ligula ullamcorper malesuada proin libero nunc consequat. Ut lectus arcu bibendum at varius vel pharetra. Arcu risus quis varius quam quisque id. Amet aliquam id diam maecenas ultricies mi eget mauris. At consectetur lorem donec massa sapien faucibus. Vel orci porta non pulvinar neque. Consequat nisl vel pretium lectus quam id leo in. Vitae congue eu consequat ac felis. Pharetra vel turpis nunc eget lorem dolor. Aliquet nec ullamcorper sit amet risus nullam eget. Sed felis eget velit aliquet.
            `,
            frameworks: [

            ],
            frameworkLogos: [

            ],
            url: "duckduckgo.com",
            git: "https://github.com/andrei-g-git/motorhead-fan-site",
            image: "work-motorhead1.png",
            images: [
                "awefawef", " ", "awefawef"
            ]
        },
        {
            index: 2,
            name: "invoice",
            description: "invoice management client for businesses, express backend",
            longDescription : `
                Et ligula ullamcorper malesuada proin libero nunc consequat. Ut lectus arcu bibendum at varius vel pharetra. Arcu risus quis varius quam quisque id. Amet aliquam id diam maecenas ultricies mi eget mauris. At consectetur lorem donec massa sapien faucibus. Vel orci porta non pulvinar neque. Consequat nisl vel pretium lectus quam id leo in. Vitae congue eu consequat ac felis. Pharetra vel turpis nunc eget lorem dolor. Aliquet nec ullamcorper sit amet risus nullam eget. Sed felis eget velit aliquet.
            `,
            frameworks: [

            ],
            frameworkLogos: [

            ],
            url: "startpage.com",
            git: "https://github.com/andrei-g-git/invoice-master",
            image: "work-invoice1.png",
            images: [
                "awefawef", " ", "awefawef"
            ]
        },
        {
            index: 3,
            name: "standin",
            description: "a browser extension featuring popup and context menu functionality",
            longDescription : `
                Et ligula ullamcorper malesuada proin libero nunc consequat. Ut lectus arcu bibendum at varius vel pharetra. Arcu risus quis varius quam quisque id. Amet aliquam id diam maecenas ultricies mi eget mauris. At consectetur lorem donec massa sapien faucibus. Vel orci porta non pulvinar neque. Consequat nisl vel pretium lectus quam id leo in. Vitae congue eu consequat ac felis. Pharetra vel turpis nunc eget lorem dolor. Aliquet nec ullamcorper sit amet risus nullam eget. Sed felis eget velit aliquet.
            `,
            frameworks: [

            ],
            frameworkLogos: [

            ],
            url: "piped.kavin.rocks",
            git: "https://github.com/andrei-g-git/standin",
            image: "work-standin1.png",
            images: [
                "awefawef", " ", "awefawef"
            ]
        }        
    ];
};

export const getColabs = (): ColabObject[] => {
    return [
        {
            index: 0,
            name: "Tab Butler",
            description: "A streamlined chrome extension for browser tab management",
            describeContribution: "thinking about it",
            url: "tabbutler.netlify.app/", 
            git: "https://github.com/MitchellMarkGeorge/TabButler",
            topCommits: [
                "https://github.com/andrei-g-git/TabButler/commit/4cc4c08399ad39fe98d5755e5a53eed5387cc183",
                "https://github.com/andrei-g-git/TabButler/commit/ac3ce4a755f9d780555102a13c24514b362640c2"
            ],
            image: "colab-1.png"//"https://github.com/andrei-g-git/TabButler/blob/main/src/assets/Tab%20Butler%20Large%20Promo%20Image.png",             
        },
        {
            index: 1,
            name: "blah 1",
            description: "111 111 111",
            describeContribution: "thinking about it",
            url: "tabbutler.netlify.app/", 
            git: "https://github.com/MitchellMarkGeorge/TabButler",
            topCommits: [
                "https://github.com/andrei-g-git/TabButler/commit/4cc4c08399ad39fe98d5755e5a53eed5387cc183",
                "https://github.com/andrei-g-git/TabButler/commit/ac3ce4a755f9d780555102a13c24514b362640c2"
            ],
            image: "colab-2.jpg"//"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.nElVX_vQjPtczJ-URiEMwQHaFj%26pid%3DApi&f=1",             
        },
        {
            index: 2,
            name: "blah 1",
            description: "111 111 111",
            describeContribution: "thinking about it",
            url: "tabbutler.netlify.app/", 
            git: "https://github.com/MitchellMarkGeorge/TabButler",
            topCommits: [
                "https://github.com/andrei-g-git/TabButler/commit/4cc4c08399ad39fe98d5755e5a53eed5387cc183",
                "https://github.com/andrei-g-git/TabButler/commit/ac3ce4a755f9d780555102a13c24514b362640c2"
            ],
            image: "colab-3.jpg"//"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpaper-mobile.com%2Ffree_download%2F640_480_wallpapers%2F11201321%2FB%2FB_natural_n6FE7fYE.jpg&f=1&nofb=1",             
        },
        {
            index: 3,
            name: "blah 1",
            description: "111 111 111",
            describeContribution: "thinking about it",
            url: "tabbutler.netlify.app/", 
            git: "https://github.com/MitchellMarkGeorge/TabButler",
            topCommits: [
                "https://github.com/andrei-g-git/TabButler/commit/4cc4c08399ad39fe98d5755e5a53eed5387cc183",
                "https://github.com/andrei-g-git/TabButler/commit/ac3ce4a755f9d780555102a13c24514b362640c2"
            ],
            image: "colab-4.jpg"//"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.N8bP6bt1bVk7BjgtPKlLogHaFj%26pid%3DApi&f=1",             
        },
        {
            index: 4,
            name: "blah 1",
            description: "111 111 111",
            describeContribution: "thinking about it",
            url: "tabbutler.netlify.app/", 
            git: "https://github.com/MitchellMarkGeorge/TabButler",
            topCommits: [
                "https://github.com/andrei-g-git/TabButler/commit/4cc4c08399ad39fe98d5755e5a53eed5387cc183",
                "https://github.com/andrei-g-git/TabButler/commit/ac3ce4a755f9d780555102a13c24514b362640c2"
            ],
            image: "colab-5.jpg"//"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpaper-mobile.com%2Ffree_download%2F640_480_wallpapers%2F11201321%2FB%2FB_pinkfantas_6NMefqUI.jpg&f=1&nofb=1",             
        },
        {
            index: 5,
            name: "blah 1",
            description: "111 111 111",
            describeContribution: "thinking about it",
            url: "tabbutler.netlify.app/", 
            git: "https://github.com/MitchellMarkGeorge/TabButler",
            topCommits: [
                "https://github.com/andrei-g-git/TabButler/commit/4cc4c08399ad39fe98d5755e5a53eed5387cc183",
                "https://github.com/andrei-g-git/TabButler/commit/ac3ce4a755f9d780555102a13c24514b362640c2"
            ],
            image: "colab-6.jpg"//"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpaper-mobile.com%2Ffree_download%2F640_480_wallpapers%2F11201322%2FB%2FB_dubai_hOTdXVX1.jpg&f=1&nofb=1",             
        },                                
    ]
}