import React from 'react'
import TitleComponent from '../../common/title.component'
import SimpleStateWithuseReducer from './1-simpleStateWithuseReducer';
import ObjectStateWithuseReducer from './2-objectStateWithuseReducer';
import UseReducerWithUseContext from './3-useReducer-useContext.tsx/3-useReducerWithUseContext';
import UseReducerDataFetch from './4-useReducerDataFetch';

function UseReducerHook() {
    return (<>
        <TitleComponent title='useReducerHook'/>

        <SimpleStateWithuseReducer />
        <hr />

        <ObjectStateWithuseReducer />
        <hr />

        <UseReducerWithUseContext />
        <hr />

        <UseReducerDataFetch />
        <hr/>
    </>);
}

export default UseReducerHook