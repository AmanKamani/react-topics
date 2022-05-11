import React, {useEffect, useState} from 'react'
import {products} from "../../../services/ProductService";
import ProductsLayout from "../product-layout/ProductsLayout";
import {Product} from "../../../services/models/Product";

function FeaturedProductsComponent() {

    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])

    useEffect(() => {
        setFeaturedProducts(products.filter(product => product.isFeatured))
    }, [])

    return (<ProductsLayout products={featuredProducts}/>)
}

export default FeaturedProductsComponent