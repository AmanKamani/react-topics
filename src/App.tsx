import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/header/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import PageNotFoundComponent from './components/pagenotfound/PageNotFoundComponent';

function App() {
  return (<div className="App">
      <HeaderComponent />

      {
        routes()
      }
  </div>);
}

const routes = () => {
  return <Routes>
    <Route path='/' element={<HomeComponent />} />
    <Route path='about' element={<AboutComponent />} />
    <Route path='*' element={<PageNotFoundComponent />} />
  </Routes>
}

export default App;
