import {createContext, useState, useEffect} from 'react'

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id 
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove, fullyRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1 || fullyRemove) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    } else {
        return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        );
    }
}

export const CartDropdownContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    cartTotal: 0,
})

export const CartDropdownProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    // Sets total cart items
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartCount(newCartCount);
        setCartTotal(newCartTotal);
    }, [cartItems])

    // Sets cart total price
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal);
    }, [cartItems]) 

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove, fullyRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove, fullyRemove));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, cartTotal};



    return (<CartDropdownContext.Provider value={value}>
        {children}
    </CartDropdownContext.Provider>)
}