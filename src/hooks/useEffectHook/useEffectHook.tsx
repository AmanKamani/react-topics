import React from 'react'
import TitleComponent from '../../common/title.component'
import UseEffectDocTitle from './1-ChangeDocTitle/1-useEffectDocTitle'
import DocTitleWithClass from './1-ChangeDocTitle/WithClassComponent'
import UseEffectMouseContainer from './2-MouseEvent/2-useEffectMouseContainer'
import WithClassMouseEvent from './2-MouseEvent/withClassMouseEvent'
import UseEffectIntervalCounter from './3-IntervalCounter/3-useEffectIntervalCounter'
import WithClassIntervalCounter from './3-IntervalCounter/withClassIntervalCounter'
import UseEffectDataFetch from './4-DataFetch/4-useEffectDataFetch'

function UseEffectHook() {
  return (<>
    <TitleComponent title='useEffect Hook' />
    
    {/* <DocTitleWithClass /> */}
    <UseEffectDocTitle />
    <hr />

    {/* <WithClassMouseEvent /> */}
    <UseEffectMouseContainer />
    <hr />

    {/* <WithClassIntervalCounter /> */}
    <UseEffectIntervalCounter />
    <hr />

    <UseEffectDataFetch />
    <hr />

  </>)
}

export default UseEffectHook