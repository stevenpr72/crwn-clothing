import { 
    CheckoutItemContainer,
    CheckoutImageContainer,
    CheckoutImage,
    CheckoutValues,
    CheckoutQuantity,
    CheckoutArrows,
    CheckoutQuantityValue,
    RemoveButton 
 } from './checkout-item.styles';
import {useContext} from 'react'


import {CartDropdownContext} from '../../contexts/cart-dropdown.context'

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity} = cartItem;
    const {addItemToCart, removeItemFromCart} = useContext(CartDropdownContext);

    // If fullyRemove is true, removes entire item from cart, if false, removes only 1 from quantity
    const removeItemHandler = (fullyRemove) => {
        removeItemFromCart(cartItem, fullyRemove);
    }

    const addItemHandler = () => {
        addItemToCart(cartItem);
    }

    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <CheckoutImage src={imageUrl} alt={`${name}`} />
            </CheckoutImageContainer>
            <CheckoutValues className="name">{name}</CheckoutValues>
            <CheckoutQuantity className="quantity">
                <CheckoutArrows className="arrow" onClick={() => removeItemHandler(false)}> &#10094; </CheckoutArrows>
                <CheckoutQuantityValue className="value"> {quantity} </CheckoutQuantityValue>
                <CheckoutArrows className="arrow" onClick={addItemHandler}> &#10095; </CheckoutArrows>
            </CheckoutQuantity>
            <CheckoutValues className="price">{price}</CheckoutValues> 
            <RemoveButton className="remove-button" onClick={() => removeItemHandler(true)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem