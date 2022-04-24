import React from 'react'
import TitleComponent from '../../common/title.component'
import ChComponent1 from './1-customCounter/ch-component1'
import ChComponent2 from './2-customInputBinder/ch-component2'

function CustomHooks() {
    return (<>
        <TitleComponent title='Custom Hooks' />

        <ChComponent1 />
        <hr />

        <ChComponent2 />
        <hr/>
    </>)
}

export default CustomHooks