import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { StoreContext } from '../utils/context';

const GlobalCart = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { cart, showCart } = state;

    const handleCartModal = () => {
        dispatch({ type: 'EDIT_SHOW_MODAL', payload: !showCart})
    }
    return (
        <div onClick={handleCartModal} className="globalModal">
            <div className="globalItemsContainer px-3">
                <span className="d-flex justify-content-center" style={{fontSize: '2rem', color: '#1abb85'}}><AiOutlineShoppingCart></AiOutlineShoppingCart></span>
                <p className="globalItems">{!cart ? 0 : cart.length} {" "} items</p>
            </div>
            <div>
                <p className="globalPrice px-3 py-2">${cart.reduce((acc, cur) => acc + cur.price * cur.counts, 0).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default GlobalCart;