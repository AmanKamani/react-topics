import React from 'react'
import Level1Component from './level1.component';

export const UserContext = React.createContext({name: "JemsBond"});
export const FoodContext = React.createContext({favorite: "Fafda-Jalebi"});

function UseContextHook() {
    return (<>
        <UserContext.Provider value={{name: "Jadoo"}}>
            <FoodContext.Provider value = {{favorite: "Dhokla"}}>
                <Level1Component />
            </FoodContext.Provider>    
        </UserContext.Provider>  
    </>)
}

export default UseContextHook