import {useAppContext} from '../context/AppContext';
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import {useState, useLayoutEffect} from 'react';
import { useChengeQuantity, useDeleteItem, useToggleWishlist, useMakeAnOrder }  from '../context/AppContext';

const Cart = () => {
    const [total, setTotal] = useState(0);
    const state = useAppContext();
    const chengeQuantity = useChengeQuantity();
    const deleteCartItem = useDeleteItem();
    const toggleWishlist = useToggleWishlist();
    const makeAnOrder = useMakeAnOrder();
    
    useLayoutEffect(() => {
        const totalPrice = [];
        state.cartItems.map(el => totalPrice.push(el.price * el.quantity))
        setTotal(totalPrice.reduce((a, b) => a + b, 0));
    }, [state.cartItems]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order was successful");
        makeAnOrder();
    }

    const deleteItem = (el) => {
        deleteCartItem(el);
    }

    const toggleWishlistButton = (el) => {
        toggleWishlist(el);
    }
    return (
        <form className="shopping-cart" onSubmit={handleSubmit}>
            <div className="title">
                Shopping Bag
            </div>

            <div className="cart_items">
            {state.cartItems.length > 0 ? (
                state.cartItems.map(item => 
                    <div className="item" key={item.id}>
                        <div className="item_info">
                            <span>Manufacturer: {item.manufacturer}</span>
                            <span>Model: {item.model}</span>
                            <span>Country: {item.country}</span>
                            <span>Warranty: {item.warranty}</span>
                            <span>Price: ${item.price}</span>
                        </div>

                        <div className="item_details">
                        <div className="buttons">
                            <button type="button" className="btn delete-btn" onClick={() => deleteItem(item)} >delete</button>
                            <button type="button" className="btn like-btn" onClick={() => toggleWishlistButton(item)} >
                                <FaHeart className={state.wishlist.includes(item.id) ? "fas fa-heart product__icon__active" : "fas fa-heart product__icon"} />
                            </button>
                        </div>

                        <div className="cart__image-wrapper">
                            <img src={item.imageSrc} alt={item.model} className="cart__image"></img>
                        </div>
 
                        <div className="description">
                            <span>{item.description}</span>
                        </div>
 
                        <div className="quantity">
                            <button className="btn plus-btn" type="button" name="button" onClick={() => chengeQuantity(item, 1)}>
                                <span>+</span>
                            </button>
                            <input type="text" name="name" value={item.quantity} readOnly={true} />
                            <button className="btn minus-btn" type="button" name="button" onClick={() => chengeQuantity(item, -1)}>
                                <span>-</span>
                            </button>
                        </div>
                    </div>

                </div>
                )
                ) : (
                    <div className="empty_cart">
                        <p>No Products in Cart</p>
                    </div>
            )}
            </div>

            <div className="total-price">
                Total price:
                ${total}
                {state.cartItems.length > 0 ? 
                <button type="submit" className="btn total--btn" onClick={handleSubmit} >TO ORDER</button> :
                <Link to="/products" className="btn total--btn cancel-btn">
                    CANCEL
                </Link>}
            </div>
            
        </form>
    )
}

export default Cart;