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

### 3. Unmounting Lifecycle Methods
when a component is being removed from the DOM.

Sequence | Method | Use
--- | --- | --- |

### 4. Error Handling Lifecycle Method
When there is an error handling rendering, in a lifecycle method, or in the constructor of any child component.

Sequence | Method | Use
--- | --- | --- |
