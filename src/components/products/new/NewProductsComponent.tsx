import React, {useEffect, useState} from 'react'
import {Product} from "../../../services/models/Product";
import {products} from "../../../services/ProductService";
import ProductsLayout from "../product-layout/ProductsLayout";
import {useSearchParams} from "react-router-dom";
import {ProductSortBy} from "../types";

function NewProductsComponent() {
    const [searchParams] = useSearchParams();
    const [newProducts, setNewProducts] = useState<Product[]>([])

    useEffect(() => {
        const sortParams = searchParams.get('sort') || ProductSortBy.NONE;
        const queryParams = searchParams.get('q') || "";

        const newProds = products
            .filterBy(product => product.isNew && product.name.includes(queryParams))
            .sortBy(sortParams);

        setNewProducts(newProds);
    }, [searchParams])

    return (<ProductsLayout products={newProducts}/>)
}

export default NewProductsComponent