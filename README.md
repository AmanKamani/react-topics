# Hooks

Hooks is a feature, which allows to easily use react features without having to write a class. Like: state.

> Hooks `can't` be used inside `Class Components`.

## Why Hooks?
- `this` keyword works very different within javascript class compare to other language.
- In react, Classes don't `minify` very well.
- In order to `reuse` the logic, we have to use `HOC or Render Props`. Which ends up having more components to achieve reusability.  

## Types of Hooks

### 1. useState: 
Creates a state & returns an array of state variable & setter function of the state.

### 2. useEffect:
It allows to perform the `side effects` like: subscribing-unsubscribing, timers,
- It is a replacement of `componentDidMount`, `componentDidUpdate` & `componentWillUnmount`.
- It takes 2 argument:
    1. function: by default it gets executed after every render of the component.
    2. array of state (optional): useEffect will watch for the given states, if it changes then only it executes the function. If the array is empty, then function will get executed only once(for the first time).
- It returns a function. Which automatically runs on the component unmount.
 
### 3. useContext:
It is used for passing data through the component tree without having to pass down manually at every level.
- It takes context object as an argument. and returns the value set by the context provider.

### 4. useReducer:
It is used for state management. And alternative to useState.
> `useState` is built using `useReducer`

- It takes 2 arguments:
    1. reducer-function: A function which takes 2 argument (currentState, action) & returns new state.
    2. initialState
- It returns array with 2 elements:
    1. state
    2. dispatch method

#### useState v/s useReducer

Scenario | useState | useReducer
---| ---| ---|
`No. of State` | One-Two | Too many
`Type of State` | premitive types | complex types (Ex: Object/Class/Array)
`Related States` | should not use | should use this (Ex: loading, error, response)
`Business Logic` | No | Complex business logic (Ex: Data transformation)
`Scope` | for Local State Management| for Global State Management

### 5. useCallback:
To optimize the re-render in functional component we use `React.memo` higher order function. Now, sometimes we pass a function as a props to other component. At that time `memo` can't  identify that function didn't change. So, every time when some state gets change the other components also gets re-render.

`useCallback` returns a memoized version of the callback function that only changes if one of the related dependency has changed. This helps React.memo to optimize the functions.

- It takes 2 arguments: 
    1. function: to execute
    2. state: to watch for
- It returns a function

> useCallback `caches` the entire `function`.


### 6. useMemo:
useMemo has the similar implementation to useCallback.
Only difference between them is:

> useMemo `caches` the `function result`.

- It takes 2 arguments: 
    1. function: to execute
    2. state: to watch for
- It returns a any type value


### 7. useRef:
It allows to directly access the DOM Node into the functional component.

> `Other Usecase:`
useRef can also be used as a value holder(except DOM value). So, that it can be used even after component re-renders. For more details see `2-useRefAsValueHolder.tsx`


### 8. Custom:
Hooks are just a reusable code extracted into a function. So, we can also create the custom hooks.