import { Action } from "redux";
import { ActionTypes } from "./ActionTypes";


interface IActionBuyCake extends Action{
    type: ActionTypes.BUY_CAKE;

}

export const buyCake = (): IActionBuyCake => {
    return {
        type: ActionTypes.BUY_CAKE
    };
};


export type CakeActions = IActionBuyCake;