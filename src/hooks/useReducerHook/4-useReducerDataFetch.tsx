import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'

interface State{
    isLoading: boolean;
    error: string | null;
    post: {userId: number, id: number, title: string, body: string, } | null;
}

interface Action{
    type: string;
    value?: any;
}

const initialState: State = {
    isLoading: false,
    error: null,
    post: null,
};
const reducer = (currentState: State, action: Action) => {
    switch(action.type){
        case "start_req":
            return {
                ...currentState,
                post: null,
                isLoading: true,
                error: null
            };
        case "post":
            return {
                ...currentState,
                isLoading: false,
                post: action.value!
            };
        case "error":
            return {
                ...currentState,
                isLoading: false,
                post: null,
                error: action.value!
            }
        default:
            return currentState;
    }
}

function UseReducerDataFetch() {
    const URL = "https://jsonplaceholder.typicode.com/posts/";
    const [postId, setPostId] = useState(0);
    const [flag, setFlag] = useState<number>();

    const [state, dispatch] = useReducer(reducer, initialState);

    const onFetchDetails = () => {
        dispatch({type: 'start_req'});
        axios.get(`${URL}${postId}`)
        .then(response => {
            console.log(response)
            dispatch({type: "post", value: response.data})
        })
        .catch(error => {
            console.log(error);
            dispatch({type: "error", value: "Something went wrong!"})
        })
    }

    return (<>
        <h4>Fetching data</h4>

        <input
            placeholder='Post Id to Fetch'
            type="number"
            value={postId}
            onChange={e => setPostId(+e.target.value)} />
        <button onClick={onFetchDetails}>Fetch Post</button>
        <br/>
        {
            state.isLoading ? <p>Loading...</p> : null
        }
        {
            state.post ? <p>{JSON.stringify(state.post)}</p> : null
        }
        {
            state.error ? <p>{state.error}</p> : null
        }
    </>);
}

export default UseReducerDataFetch