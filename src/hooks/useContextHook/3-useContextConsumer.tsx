import React, { useContext } from 'react'
import { FoodContext, UserContext } from './UseContextHook'

function UseContextConsumeValue() {
  
    const user = useContext(UserContext);
    const food = useContext(FoodContext);
  
    return (
        <p><b>{user.name}</b> likes <b>{food.favorite}</b></p>
    )
}

export default UseContextConsumeValue