# Context

Context allows to directly pass the props value from the parent component to the deeply nested(child) component. 

1. Context Should be created with `React.createContext()`
2. Value should be set/provided with `ContextProvider` from parent.
3. Value can be get/consumed with `ContextConsumer` in child.