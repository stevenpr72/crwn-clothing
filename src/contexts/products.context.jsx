
import { createContext, useEffect, useState } from "react"
import SHOP_DATA from '../../shop-data.json'

export const ProductsContext = createContext( {
    products: null,
    setProducts: () => null,
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(null);
    const value = {products, setProducts};

    useEffect( () => {
        setProducts(SHOP_DATA);

    }, []);

    return (<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>)

}