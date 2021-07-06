import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useAddToCart }  from '../context/AppContext';
import {useState, memo} from 'react';

const Product = (props) => {
    const [clicked, setClick] = useState(false);
    const { id, category, model, manufacturer, country, imageSrc, price, rating, description, warranty } = props;
    const addToCart = useAddToCart();

    const handleClick = () => {
        setClick(true);
        addToCart(props);
    }

    return (
        <div className="product" data-id={id}>

                <div className="product__header">
                    <h2 className="product__category">{category}</h2>
                    <div className="rating">{rating}</div>
                </div>

                <div className="product__main">
                    <div className="product__image-wrapper">
                        <img src={imageSrc} alt={model} className="product__image"></img>
                    </div>
                </div>

                <div className="product__info">
                        <h2 className="product__manufacturer">{manufacturer}</h2>
                        <h3 className="product__model">{model}</h3>
                        <h4 className="product__country">{country}</h4>
                        <span className="product__warranty">Warranty: {warranty}</span>
                        <p className="product__description">{description}</p>
                </div>

                <div className="product__footer">
                    <div className="product__price-wrapper">
                        <span className="product__label">Price</span>
                        <div>
                            <span className="product__price">{price}</span>
                            <span className="product__currency">USD</span>
                        </div>
                    </div>
                </div>

                    <div className="product__actions">
                        <button className="button button--primary product__button product__button--wishlist" type="button" title="Add to Wishlist">
                            <FaHeart className="fas fa-heart product__icon" />
                        </button>
                        <button className="button button--primary product__button product__button--cart" type="button" disabled={clicked} title="Add to Cart" onClick={handleClick}>
                            <FaShoppingCart className="fas fa-shopping-bag product__icon" />
                        </button>
                    </div>
            </div>
    )
}

export default memo(Product);