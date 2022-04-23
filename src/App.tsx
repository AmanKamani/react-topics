import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/post-list.component';
import PostForm from './components/post-create.component';

function App() {
  return (
    <div className="App">
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
