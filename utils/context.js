import { createContext, useReducer } from 'react';

export const StoreContext = createContext();

const initialState = {
    cart: [],
    showCart: false
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
        case 'REMOVE_FROM_CART':
            const deleteItem = action.payload;
            const restItems = state.cart.filter(item => item._id !== deleteItem._id)
            return {
                ...state, cart: restItems
            }
        case 'EDIT_SHOW_MODAL':
            return {
                ...state, showCart: action.payload
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