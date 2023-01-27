import { useContext } from 'react';

import './product-card.styles.scss'
import Button, {BUTTON_TYPES_CLASSES} from '../button/button.component';

import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartDropdownContext);

    const addProductToCart = () => {
        addItemToCart(product);
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='cost'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart} >Add to Cart</Button>
        </div>
    )
}

export default ProductCard;