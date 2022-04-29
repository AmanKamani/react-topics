import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/CakeActions';
import AppState from '../redux/state';

const HooksCakeContainer = () => {
    
    const [num, setNum] = useState(1);

    const numOfCakes = useSelector<AppState, number>((state) => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (<>
        <h4>Hooks CakeContainer</h4>
        <input type="number" min={1} value={num} onChange={e => setNum(+e.target.value)} />
        <p>Number of Cakes: </p> <h4>{numOfCakes}</h4>  
        <button onClick={() => dispatch(buyCake(num))}>Buy One Cake</button>
    </>)
}

export default HooksCakeContainer