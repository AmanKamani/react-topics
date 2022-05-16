import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/header/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import PageNotFoundComponent from './components/pagenotfound/PageNotFoundComponent';
import NewProductsComponent from './components/products/new/NewProductsComponent';
import FeaturedProductsComponent from './components/products/featured/FeaturedProductsComponent';
import ProductDetail from "./components/products/product-details/ProductDetail";
import ProfileComponent from "./components/profile/ProfileComponent";
import {AuthProvider} from "./components/auth/auth";
import LoginComponent from "./components/auth/LoginComponent";
import AuthGuard from "./components/auth/AuthGuard";
// import ProductComponent from "./components/products/ProductComponent";
const LazyProduct = React.lazy(() => import ("./components/products/ProductComponent"));


function App() {
    return (<AuthProvider>
        <div className="App">
            <HeaderComponent/>
            {routes()}
        </div>
    </AuthProvider>);
}

const routes = () => {
    return <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='about' element={<AboutComponent/>}/>
        <Route path='products' element={
            <React.Suspense fallback={<p>Loading...</p>}>
                <LazyProduct />
            </React.Suspense>
        }>
            <Route index element={<FeaturedProductsComponent/>}/>
            <Route path='featured' element={<FeaturedProductsComponent/>}/>
            <Route path='new' element={<NewProductsComponent/>}/>
            <Route path=':productId' element={<ProductDetail/>}/>
        </Route>
        <Route path='login' element={<LoginComponent />}/>
        <Route path='profile' element={
            <AuthGuard>
                <ProfileComponent />
            </AuthGuard>
        }/>
        <Route path='*' element={<PageNotFoundComponent/>}/>
    </Routes>
}

export default App;
