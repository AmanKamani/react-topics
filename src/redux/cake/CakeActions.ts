import { Action } from "redux";
import { ActionTypes } from "./ActionTypes";


interface IActionBuyCake extends Action{
    type: ActionTypes.BUY_CAKE;
    payload: number;
}

export const buyCake = (cakesToBuy: number = 1): IActionBuyCake => {
    return {
        type: ActionTypes.BUY_CAKE,
        payload: cakesToBuy
    };
};


export type CakeActions = IActionBuyCake;