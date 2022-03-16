import { createContext, useReducer } from 'react';

export const StoreContext = createContext();

const initialState = {
    cart: typeof window !== 'undefined' && localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    showCart: false,
    alerts: [],
    userInfo: {
        isAuthenticated: false,
        token: typeof window !== 'undefined' && localStorage.getItem('token'),
        user: null,
        loading: true,
    },
    shippingAddress: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('shippingAddress')) : {},
    paymentMethod: typeof window !== 'undefined' ? localStorage.getItem('paymentMethod') : null
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_ALERT':
            return {
                ...state, alerts: [...state.alerts, action.payload]
            }
        case 'REMOVE_ALERT':
            return {
                ...state,
                alerts: state.alerts.filter(alert => alert.id !== action.payload)
            }
        case 'ADD_TO_CART':
            const newProduct = action.payload;
            const existProduct = state.cart.find(product => product._id === newProduct._id);
            const cartProducts = existProduct ? state.cart.map(product => product._id === existProduct._id ? newProduct : product) : [...state.cart, newProduct]
            localStorage.setItem('cart', JSON.stringify(cartProducts));
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
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                userInfo: {
                    isAuthenticated: true,
                    token: action.payload.token,
                    user: null,
                    loading: false
                }
            }
        case 'LOGIN_FAIL':
        case 'REGISTER_FAIL':
        case 'LOAD_USER_FAIL':
        case 'LOG-OUT':
            localStorage.removeItem('token')
            return {
                ...state,
                userInfo: {
                    isAuthenticated: false,
                    token: null,
                    user: null,
                    loading: true
                }
            }
        case 'LOAD_USER':
            return {
                ...state,
                userInfo: {
                    isAuthenticated: true,
                    token: typeof window !== 'undefined' && localStorage.getItem('token'),
                    user: action.payload,
                    loading: false
                }
            }
        case 'ADD_SHIPPING_ADDRESS':
            localStorage.setItem('shippingAddress', JSON.stringify(action.payload))
            return {
                ...state,
                shippingAddress: action.payload
            }
        case 'FAIL_SHIPPING_ADDRESS':
            localStorage.removeItem('shippingAddress')
            return {
                ...state,
                shippingAddress: {}
            }
        case 'ADD_PAYMENT':
            localStorage.setItem('paymentMethod', action.payload)
            return {
                ...state,
                paymentMethod: action.payload
            }
        case 'PAYMENT_FAIL':
            localStorage.removeItem('paymentMethod')
            return {
                ...state,
                paymentMethod: null
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