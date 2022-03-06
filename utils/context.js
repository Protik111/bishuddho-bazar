import { createContext, useReducer } from 'react';

export const StoreContext = createContext();

const initialState = {
    cart: []
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            const newProduct = action.payload;
            const existProduct = state.cart.find(product => product._id === newProduct._id);
            const cartProducts = existProduct ? state.cart.map(product => product._id === existProduct._id ? newProduct : product) : [...state.cart, newProduct]
            return {
                ...state, cart: cartProducts
            }
        default:
            return state;
    }
}

export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer,initialState);
    const value = { state, dispatch };
    return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>
}