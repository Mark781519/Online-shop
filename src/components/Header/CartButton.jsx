import { IoBagHandle } from "react-icons/io5";
import {useAppContext} from '../../context/AppContext';

const CartButton = () => {
    const state = useAppContext();
    return (
        <div className="cart-button" onClick={() => {}}>
            <span className="cart-button__quantity">{state.cartItems.length}</span>
            <button className="button button--secondary cart-button__button" type="button" title="Open cart">
                <IoBagHandle className="cart-button__icon" />
            </button>
        </div>
    )
}

export default CartButton;