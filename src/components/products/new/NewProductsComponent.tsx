import React, {useEffect, useState} from 'react'
import {Product} from "../../../services/models/Product";
import {products} from "../../../services/ProductService";
import ProductsLayout from "../product-layout/ProductsLayout";

function NewProductsComponent() {
    const [newProducts, setNewProducts] = useState<Product[]>([])

    useEffect(() => {
        setNewProducts(products.filter(product => product.isNew))
    }, [])

    return (<ProductsLayout products={newProducts}/>)
}

export default NewProductsComponent