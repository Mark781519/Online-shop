import {memo} from 'react';
import CartButton from './CartButton'

const Header = () => {
    return (
    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">Online Shop</h1>
            <div className="header__actions">
            <button className="button button--primary header__button" type="button" title="Sign In">Sign In</button>
                <CartButton />
            </div>
        </div>
    </header>
    )
}

export default memo(Header);