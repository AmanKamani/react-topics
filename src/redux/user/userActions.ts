import axios from "axios";
import { Dispatch } from "redux";
import { UserActionTypes } from "./ActionTypes";

interface IUserFetchRequestAction{
    type: UserActionTypes.USER_FETCH_REQUEST
}
interface IUserFetchSuccessAction{
    type: UserActionTypes.USER_FETCH_SUCCESS
    payload: any
}
interface IUserFetchFailedAction{
    type: UserActionTypes.USER_FETCH_FAILED
    payload: any
}

export const fetchUserRequest = (): IUserFetchRequestAction => {
    return {
        type: UserActionTypes.USER_FETCH_REQUEST
    }
}

const fetchUserSuccess = (users: any): IUserFetchSuccessAction => {
    return {
        type: UserActionTypes.USER_FETCH_SUCCESS,
        payload: users
    }
}
const fetchUserFailed = (error: any): IUserFetchFailedAction => {
    return {
        type: UserActionTypes.USER_FETCH_FAILED,
        payload: error
    }
}

export const fetchUsers = () => {

    return (dispatch: Dispatch) => {

        dispatch(fetchUserRequest());
        
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => {
                    dispatch(fetchUserSuccess(res.data))
                })
                .catch(error => {
                    dispatch(fetchUserFailed(error.message))
                })
        }, 2000)
    }
}

export type UserActions = IUserFetchRequestAction | IUserFetchFailedAction | IUserFetchSuccessAction;