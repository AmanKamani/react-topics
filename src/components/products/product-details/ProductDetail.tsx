import "./product-detail.css"
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {products} from "../../../services/ProductService";
import {Product} from "../../../services/models/Product";

const ProductDetail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product>();

    const productId: number = +params.productId!;

    useEffect(() => {
        setProduct(products[productId-1]);
    }, [productId]);

    const onCancelClick = () => {
        navigate(-1);
    }

    return (
        <div className='product-details'>
            <div className='header'>
            </div>
            {
                product && <>
                    <h5>{product.name}</h5>
                    <img id='image' src={product.imageUrl} alt={product.name}/>
                    <p id='description'>{product.description}</p>
                    <p id='price'>Price: {product.price} $</p>
                    <button id='cancel' onClick={onCancelClick}>Cancel</button>
                    <button id='buy' onClick={() => alert('Out of Stock')}>Buy</button>
                </>
            }
        </div>
    );
}

export default ProductDetail;