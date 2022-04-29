# React Redux

## Redux
Redux is a `predictable` `state container` for `JavaScript applications`. 

### General Architecture of Redux:
![Architecture](https://miro.medium.com/max/1000/0*RjUPZcwFAgMUbigM)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From [Medium](https://medium.com/@lizfaria/how-to-use-redux-in-a-react-app-w-examples-f4ba5fbcb48f)


## Why Redux with React?
React has a lot of features like useReducer, useContext. With that, we can easily manage and share the state throughout the application. But while using those methods, sometimes we have to lift the state management to parent component in order to share the state with child components.

Redux is available before the react-hook was introduced. `(Aug, 2015)`

Redux helps to manage the state application wide without lifting or prop drilling the state logic.

## Packages Used for React-Redux

Package | Usage
--- | --- |
[react-redux](https://www.npmjs.com/package/react-redux) | Official Redux UI binding library for React.
[redux](https://www.npmjs.com/package/redux)| To create & maintain state.
[@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit) | It is built on top of `redux`. And easy to implement. Recommended to use instead `redux`.
[redux-thunk](https://www.npmjs.com/package/redux-thunk) | It is a middleware & used as for Async actions.

### Other Packages:
Pakckage | Usage
---| ---|
[redux-logger](https://www.npmjs.com/package/redux-logger) | A middleware package, to log the state & dispatched events in the browser console.
[@types/redux-logger](https://www.npmjs.com/package/@types/redux-logger) | Typescript version of redux-logger.  
[@redux-devtools/extension](https://www.npmjs.com/package/@redux-devtools/extension) | A dev tool which works with [redux extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

## Ways to Implement Redux in React

### 1. Without Hooks:
> check the `CakeContainer.tsx` component.

### 2. With Hooks:
> check the `HooksCakeContainer.tsx` component.

Hook | Usage
---| ---|
`useSelector` | It takes state as argument & returns the entire/part of state.
`useDispatch` | It returns the reference to the dispatch method. Using that reference any action can be called.
