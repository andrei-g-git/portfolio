import { and, createMachine, or } from 'xstate';

export const characterMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QGMAWBDATu5AXMmAdAJYQA2YAxALIDyAqgMoCiA+gMIAyAkuwNKtOzAGIAVANoAGALqJQABwD2sYrmKKAdnJAAPRAFZ9hAGwBmAEwAOAIzn9AGhABPRABZrhSV8nXrr-5IAnNaWAL6hjmhYOPhEpBQ0DCwcPPysAErcAOIAEhIy2koqapraeggAtOYA7B4OzoiBkoTV+t7t7cbhkRjYeAQk5FR8zACagiKirAAitADqAHJSskggRarqWqvlga6OLpWm3SBRfbGDCSPjmblTs4vLhcobpduIFdaBpoTWxq6Sxjs+zc1mOpxiAwA7ugyABrThgABmuESTDYXF4AhueUeq3WJS2oHK1n0gUIllMpNMrQ6klMwIQ5lcZOZgUCllc1Xc5msQVcYN6EKI0LhCORlCuEzErHoAAVcQpngSyu8jL9-oDWWy2dVzAy-K4Wm0fAb-sEwhEToL+sKYfCkSjJdi7vMlgU8UrNirGVZCPpLFTWgzzD4BdEbYQRfbxYxRLRZaw6AA1bgLLIKtae15ExDGDySANfGkdekNBAhb7Gk3+M0hMNnKF29LEKCoFF0NEpTFS-IrRXFL1vBB-QimSxWWz1A7-IytetCyNNlttiVjDLZPIy+Xu-svQm6d6BapG4Pj+cRqPN1uOtdCaX3N19zMD7MH8uScwtVmWAOGJrjhl-FnfRz3OS9lxRWN40TWgUzTDN8UHHNKkCYw-WDVxzFAxs4SvFd2FoTgeGmVN0x3Z8929D4x3JUxARqJpjFQ2xS2nVxZ1ZPNjHHElJH5Y4NEUCA4G0cEbSeF993KCoLHzX4gmqUxMLzUxAgZajLEII8A1MUxJEMfRzHMYwuktMTzniMAJMoodqLQilNSY-Tdn0yx1P0DxOR05lAUsWpzECbDbVFB1rOVIdqTJClAynRBrGqTSQLM60wKXa8wqQt8Pg-P1VIBIEyyUrDkvDc5cEUABXNA8NwDLX2kmpvh8YwFKKlS1LLP4yWMLl4tcJjSVscJwiAA */
    id: "character",
    initial: "idle",
    context:{
        selected: {
            react: false,
            nodejs: false,
            mysql: false
        },
        collision: 'none'
    },
    states: {
        idle: {
            on: {
                MOUSE_CLICK_LEFT: "walkLeft",
                MOUSE_CLICK_RIGHT: "walkRight",
                KEY_LEFT_DOWN: "walkLeft",
                KEY_RIGHT_DOWN: "walkRight"
            }
        },

        walkLeft: {
            on: {
                MOUSE_CLICK_RIGHT: "walkRight",
                KEY_LEFT_UP: "idle",
                KEY_RIGHT_DOWN: "walkRight",
                STOP_MOVING: "idle"
            }
        },

        walkRight: {
            on: {
                MOUSE_CLICK_LEFT: "walkLeft",
                KEY_RIGHT_UP: "idle",
                KEY_LEFT_DOWN: "walkLeft",
                STOP_MOVING: "idle",
                COLLIDING: {
                    target: "touchRight",
                    guard: or([
                        and(["selectedReact", "colidingReact"]),
                        and(["selectedNodejs", "colidingNodejs"]),
                        and(["selectedMysql", "colidingMysql"]),
                    ])
                }
                
            }
        },

        touchRight: {}
    }
},
{
    guards: { //don't need higher level guards, I can just mix conditions here, but maybe I might use those guards separately, who knows
        selectedReact: ({context}) => context.selected.react,
        selectedNodejs: ({context}) => context.selected.nodejs,
        selectedMysql: ({context}) => context.selected.mysql,

        collidingReact: ({context}) => context.collision == "react",
        collidingNodejs: ({context}) => context.collision == "nodejs",
        collidingMysql: ({context}) => context.collision == "mysql",

    }
});