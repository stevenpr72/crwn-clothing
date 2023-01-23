import './checkout-item.styles.scss'
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
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItemHandler(false)}> &#10094; </div>
                <span className="value"> {quantity} </span>
                <div className="arrow" onClick={addItemHandler}> &#10095; </div>
            </span>
            <span className="price">{price}</span> 
            <div className="remove-button" onClick={() => removeItemHandler(true)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem