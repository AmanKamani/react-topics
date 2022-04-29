import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/CakeActions';
import AppState from '../redux/state';

const HooksCakeContainer = () => {
    
    const numOfCakes = useSelector<AppState, number>((state) => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (<>
        <h4>Hooks CakeContainer</h4>
        <p>Number of Cakes: </p> <h4>{numOfCakes}</h4>  
        <button onClick={() => dispatch(buyCake())}>Buy One Cake</button>
    </>)
}

export default HooksCakeContainer