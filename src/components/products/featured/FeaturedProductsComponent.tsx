import React, {useEffect, useState} from 'react'
import {products} from "../../../services/ProductService";
import ProductsLayout from "../product-layout/ProductsLayout";
import {Product} from "../../../services/models/Product";
import {useSearchParams} from "react-router-dom";
import {ProductSortBy} from "../types";

function FeaturedProductsComponent() {
    const [searchParams] = useSearchParams();
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])

    useEffect(() => {
        const sortParams = searchParams.get('sort') || ProductSortBy.NONE;
        const queryParams = searchParams.get('q') || "";

        const featured = products
            .filterBy(product => product.isFeatured && product.name.includes(queryParams))
            .sortBy(sortParams)
        setFeaturedProducts(featured)

    }, [searchParams])

    return (<ProductsLayout products={featuredProducts}/>)
}

export default FeaturedProductsComponent