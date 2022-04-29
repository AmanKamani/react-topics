import { UserState } from "../state";
import { UserActionTypes } from "./ActionTypes";
import { UserActions } from "./userActions";

const initialState: UserState = {
    loading: false,
    data: [],
    error: null
}

export const UserReducer = (state: UserState = initialState, action: UserActions) => {

    switch(action.type){
        case UserActionTypes.USER_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UserActionTypes.USER_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case UserActionTypes.USER_FETCH_FAILED:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        default: return state;
    }

}