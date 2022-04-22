# Lifecycle

This branch demonstrates the lifeycle of react class component.

## Category of Methods
- Mounting
- Updating
- Unmounting
- Error Handling

### 1. Mounting Lifecycle Methods
When an instance of component is being created and inserted into DOM.

Sequence | Method | Use
--- | --- | --- |
1 | `constructor()` | When a new component object is created.
2 | `static getDerivedStateFromProps(state, props): new-state` | When the state of the component depends on changes in props over time.
3 | `render()` | Required. Renders the component UI.
4 | Child Component Lifecycle | After render method, invokes the child component lifecycles.
5 | `componentDidMount()` | Invokes immediately after the component & all its children components have been rendered to DOM.

### 2. Updating Lifecycle Methods
When a component is being re-rendered as a result of changes to either its props or states.

Sequence | Method | Use
--- | --- | --- |
1 | `static getDerivedStateFromProps(props, state): new-state` | Method is called every time a component is re-renderd.
2 | `shouldComponentUpdate(nextProps, nextState): boolean` | Dectates if the component should re-render or not. By detauls it always returns true for normal component. For Pure Component, it compares the props & states with previous values.
3 | `render()` | Required. Returns the JSX.
4 | Child Component Update Lifecycle | after parent render child component Lifecycle will run till `getSnapshotBeforeUpdate()`
5 | `getSnapshotBeforeUpdate(prevProps, prevState): null | any` | Called just before the changes from the virtual DOM are to be reflected in the DOM. Used for capturing information from DOM.
6 | Child Component Update Lifecycle | after parent getSnapshotBeforeUpdate(), child will run `componentDidUpdate()`
7 | `componentDidUpdate(prevProps, prevState, snapshot )` | This is the last method which will be called after the getSnapshotBeforeUpdate & child update lifecycle methods are finished. Snapshot value will be the value returned from getSnapshotBeforeUpdate().

### 3. Unmounting Lifecycle Methods
when a component is being removed from the DOM.

Sequence | Method | Use
--- | --- | --- |
1 | `componentWillUnmount()` |  It will be called before unmounting the component. It is used for cancelling/removing network request, event handlers, subscriptions, etc.
### 4. Error Handling Lifecycle Method
When there is an error handling rendering, in a lifecycle method, or in the constructor of any child component.

Sequence | Method | Use
--- | --- | --- |
1 | `static getDerivedStateFromError(error)` | 
2 | `componentDidCatch(error, info)` | 