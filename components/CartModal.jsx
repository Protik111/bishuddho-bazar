import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CartModal = ({ showCart, setShowCart }) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if(e.target === modalRef.current){
            setShowCart(false);
        }
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
                <h2>CartModal</h2>
            </div>
        </div>
    );
};

export default CartModal;