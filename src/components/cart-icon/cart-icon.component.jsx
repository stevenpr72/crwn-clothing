import { CartIconContainer, ShoppingIcon2, ItemCount } from './cart-icon.styles';
import { useContext} from 'react';

import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartDropdownContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon2/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;