import React from 'react'
import TitleComponent from '../../common/title.component'
import UseRefFocus from './1-useRefFocus'
import UseRefAsValueHolder from './2-useRefAsValueHolder'

function UseRefHook() {
  return (<>
    <TitleComponent title='useRef Hook' />

    <UseRefFocus />
    <hr/>

    <UseRefAsValueHolder />
    <hr/>
  </>)
}

export default UseRefHook