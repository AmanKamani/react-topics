import {Product} from "../../../services/models/Product";
import "./productLayout.css";

const ProductsLayout = (props: { products: Product[] }) => {

    const {products} = props;

    const getProductCard = (product: Product) => {
        const {name, id, imageUrl, description, price} = product
        return (<div className='product-card' key={id}>
            <img className='image' src={imageUrl} alt={name}/>
            <h5 className='title'>{name}</h5>
            <p className='description'>{description.length > 100 ? `${description.slice(0, 90)}...` : description}</p>
            <div className='footer'>
                <span className='price'>{price} $</span>
                <button className='buy'>Buy Now</button>
            </div>
        </div>)
    }

    return (<div className='product-container'>
        {
            products.map(product => getProductCard(product))
        }
    </div>);
}

export default ProductsLayout;