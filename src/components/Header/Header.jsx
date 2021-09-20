import {memo} from 'react';
import { NavLink, Link } from "react-router-dom";
import CartButton from './CartButton';

const Header = () => {
    return (
    <header className="header">
        <div className="header__wrapper">
            <NavLink exact to="/products">
                <h1 className="header__title">Products</h1>
            </NavLink>
            <div className="header__actions">
                <NavLink exact to="/singUp">
                    <button className="button button--primary header__button" type="button" title="Sign In">Sign In</button>    
                </NavLink>
                <NavLink exact to="/cart">
                    <CartButton />
                </NavLink>
            </div>
        </div>
    </header>
    )
}

export default memo(Header);
