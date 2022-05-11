import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/header/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import PageNotFoundComponent from './components/pagenotfound/PageNotFoundComponent';
import ProductComponent from './components/products/ProductComponent';
import NewProductsComponent from './components/products/new/NewProductsComponent';
import FeaturedProductsComponent from './components/products/featured/FeaturedProductsComponent';

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
    <Route path='products' element={<ProductComponent />}>
      <Route index element={<FeaturedProductsComponent />}  />
      <Route path='featured' element={<FeaturedProductsComponent />} />
      <Route path='new' element={<NewProductsComponent />} />
    </Route>
    <Route path='*' element={<PageNotFoundComponent />} />
  </Routes>
}

export default App;
