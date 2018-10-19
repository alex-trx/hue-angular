import { LightState } from "./light-state";

export class Light {

    // "state": {
    //     "on": true,
    //     "bri": 254,
    //     "hue": 8418,
    //     "sat": 140,
    //     "effect": "none",
    //     "xy": [
    //     0.4573,
    //     0.41
    //     ],
    //     "ct": 366,
    //     "alert": "none",
    //     "colormode": "ct",
    //     "mode": "homeautomation",
    //     "reachable": true
    // },
    // "swupdate": {
    //     "state": "noupdates",
    //     "lastinstall": "2018-09-01T09:08:18"
    // },
    state: LightState;
    type: string;
    name: string;
    modelid: string;
    manufacturername: string;
    productname: string;

    // "capabilities": {
    //     "certified": true,
    //     "control": {
    //     "mindimlevel": 1000,
    //     "maxlumen": 806,
    //     "colorgamuttype": "C",
    //     "colorgamut": [
    //         [
    //         0.6915,
    //         0.3083
    //         ],
    //         [
    //         0.17,
    //         0.7
    //         ],
    //         [
    //         0.1532,
    //         0.0475
    //         ]
    //     ],
    //     "ct": {
    //         "min": 153,
    //         "max": 500
    //     }
    //     },
    //     "streaming": {
    //     "renderer": true,
    //     "proxy": true
    //     }
    // },
    // "config": {
    //     "archetype": "sultanbulb",
    //     "function": "mixed",
    //     "direction": "omnidirectional"
    // },

    uniqueid: string;
    swversion: string;
    swconfigid: string;
    productid: string;

}
