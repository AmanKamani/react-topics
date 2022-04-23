# Hooks

Hooks is a feature, which allows to easily use react features without having to write a class. Like: state.

> Hooks `can't` be used inside `Class Components`.

## Why Hooks?
- `this` keyword works very different within javascript class compare to other language.
- In react, Classes don't `minify` very well.
- In order to `reuse` the logic, we have to use `HOC or Render Props`. Which ends up having more components to achieve reusability.  

## Types of Hooks

#### 1. useState: 
Creates a state & returns an array of state variable & setter function of the state.

