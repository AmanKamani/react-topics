# React with @reduxjs/toolkit

> For more details of **core redux examples**: [Click Here](https://github.com/AmanKamani/react-topics/tree/14.ReactRedux)

`@reduxjs/toolkit` is built upon  the core `redux` library. It comes with other libraries like: `redux`, `redux-thunk`, `reselect`, `@redux-devTools/extension`. So, no need to add those separately.

- It simplifies, the state modification with the `immer` library which allows to work with the state mutably. 
- It auto generates action creators.
- It allows to directly define multiple reducers while creation of the store.


## APIs of ReduxToolkit

API | Usage
---| ---|
`configureStore()` | It creates a store & allows to define multiple reducer in it.
`createSlice()` | It allows to define the action directly inside it. It auto generates the actions by looking at the name of the functions. It returns the reducer & defined actions. 
`createAsyncThunk()` | It allows to create a async action & returns the Promise.