import React, { useContext, useEffect, useRef } from 'react';
import AOS from 'aos';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import 'aos/dist/aos.css';
import styles from '../styles/CartModal.module.css';
import { StoreContext } from '../utils/context';
import CartStyle from './CartStyle';

const CartModal = ({ showCart, setShowCart }) => {
    const { state, dispatch } = useContext(StoreContext);
    const { cart } = state;
    const modalRef = useRef();

    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowCart(false);
        }
    }
    const handleCancel = () => {
        setShowCart(false)
    }
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 300,
            easing: 'ease-in-sine',
        });
    }, [])

    return (
        <div data-aos="zoom-in-left" className="cartModal" ref={modalRef} onClick={closeModal}>
            <div className="modalContainer">
                <div className={`${styles.header} d-flex px-5 py-4`}>
                    <div className='d-flex justify-conten-center px-3'>
                        <span><AiOutlineShoppingCart></AiOutlineShoppingCart></span>
                        <h5 className="ms-1">Shopping Cart</h5>
                    </div>
                    <div onClick={handleCancel}>
                        <span className={styles.cancel}><ImCross style={{ fontSize: '1rem', color: 'red', cursor: 'pointer' }}></ImCross></span>
                    </div>
                </div>
                <div>
                    {
                        cart.map(item => <CartStyle item={item}></CartStyle>)
                    }
                </div>
                <div className={`${styles.checkout} p-4`}>
                    {cart.length > 0 ? (
                        <>
                            <div className="px-5">
                                <h6 className="mt-2">Proceed To Checkout</h6>
                            </div>
                            <div className={`${styles.price} px-3`}>
                                <h6 className='mt-2'>$26.00</h6>
                            </div></>
                    ) : (<div className="">
                        <h6 className="">There is no Product in the cart.</h6>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default CartModal;