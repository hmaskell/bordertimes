
import aldergroveIcon from "./img/BorderDelays_Aldergrove.png";
import peaceArchIcon from "./img/BorderDelays_PeaceArch.png";
import truckCrossingIcon from "./img/BorderDelays_TruckX.png";
import { StringLiteral } from "@babel/types";

export interface IBorderData{
    name: string;
    icon: string;
    delay: string;
    className: "left" | "middle" | "right";
}

export const borderData: IBorderData[] = [

    {
        name: "Peace Arch",
        icon: peaceArchIcon,
        delay: "less yeet",
        className: "left"
    },

    {
        name: "Truck Crossing",
        icon: truckCrossingIcon,
        delay: "yeet",
        className: "middle"
    },

    {
        name: "Aldergrove",
        icon: aldergroveIcon,
        delay: "extra yeet",
        className: "right"
    },

];