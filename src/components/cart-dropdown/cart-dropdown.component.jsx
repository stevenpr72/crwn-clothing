import './cart-dropdown.styles.scss';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.components'
import { useContext } from 'react';

import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

const CartDropdown = () => {
    const {cartItems} = useContext(CartDropdownContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button>Go to Checkout</Button>

        </div>
    )
}

export default CartDropdown;