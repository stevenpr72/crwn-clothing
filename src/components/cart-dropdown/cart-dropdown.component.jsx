import { CartDropdownContainer, CartItems, CheckoutButton } from './cart-dropdown.styles';
import {useNavigate} from 'react-router-dom'
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.components'
import { useContext } from 'react';

import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

const CartDropdown = () => {
    const {cartItems} = useContext(CartDropdownContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </CartItems>
            <CheckoutButton onClick={goToCheckoutHandler}>Go to Checkout</CheckoutButton>

        </CartDropdownContainer>
    )
}

export default CartDropdown;