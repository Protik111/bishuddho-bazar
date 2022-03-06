import { createContext, useReducer } from 'react';

export const StoreContext = createContext();

const initialState = {
    cart: [],
    dummy: 'Dummy'
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
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