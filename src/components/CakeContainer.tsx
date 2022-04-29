import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ActionTypes } from '../redux/cake/ActionTypes'
import { buyCake } from '../redux/cake/CakeActions'
import { CakeReducer } from '../redux/reducers'
import AppState from '../redux/state'

interface CakeContainerProps{
  readonly numOfCakes?: number ;
  readonly buyOneCake?: any;
}

const CakeContainer: React.FC<CakeContainerProps> = ({numOfCakes,buyOneCake}) => {

  const [num, setNum] = useState(1);

  return (<>
    <h4>Without Hooks CakeContainer</h4>
    <input type="number" min={1} value={num} onChange={e => setNum(+e.target.value)}/> 
    <p>Number of Cakes: </p><h4>{numOfCakes}</h4>
    <button onClick={() => buyOneCake(num)}>Buy Cake</button>
</>)
}

const mapStateToProps = (state: AppState, ownProps: CakeContainerProps) => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
}

const mapDispatchToProps = (dispatch: Dispatch<{type: ActionTypes.BUY_CAKE}>) => {
  return {
    buyOneCake: (cakesToBuy: number = 1) => dispatch(buyCake(cakesToBuy))
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);


export default connector(CakeContainer);