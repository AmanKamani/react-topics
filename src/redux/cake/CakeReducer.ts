import { Action } from 'redux';
import { CakeState } from '../state';
import { ActionTypes } from './ActionTypes';
import { CakeActions } from './CakeActions';


const initialState: CakeState = {
    numOfCakes: 10
};

export const cakeReducer = (state: CakeState = initialState, action: CakeActions) => {
    switch(action.type){
        case ActionTypes.BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            };
        default:
            return state;
    }
}