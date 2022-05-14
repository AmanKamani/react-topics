# React Router

[react-router-dom](https://www.npmjs.com/package/react-router-dom) is a client & server routing library for react. It is used for navigating between the URLs.

## Features

- Configuring Routes
- Navigation with Events & Programmatically
- Dynamic Routes
- Nested Routes
- Route with Parameters
- Lazy Loading
- Authentication

## How to Use?
- Install [react-router-dom](https://www.npmjs.com/package/react-router-dom).
- Wrap the `AppComponent` withing `<BrowserRouter></BrowserRouter>`.
- Define routes within `<Routes></Routes>` & use `<Route />` to configure the routes with elements.
- Use `<Link />` or `<NavLink />` for interactive navigation.
> Unlike `<Link />`, `<NavLink />` by default adds `active` class to the selected route. And also contains `isActive property` as `props`.
- use `<Outlet />` to load the child/sub rouets in parent component.

## react-router-dom Hooks

| Hook            | Usage                                                                                                             |
|-----------------|-------------------------------------------------------------------------------------------------------------------|
| `useNavigate()` | Helps to navigate programmatically. <br/>And returns a function. That function takes 2 args:<br/> [ to, options ] |
| `useParams()`   | To get the value of dynamic route params. <br /> It returns params object with key,value.                         |
| `useLocation()` | To get the details of current path like: pathname, state, ...                                                     |