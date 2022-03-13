import React, { useContext } from 'react';
import CartModal from '../components/CartModal';
import Navbar from '../components/Navbar';
import { StoreContext } from '../utils/context';
import styles from '../styles/Login.module.css';

const login = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { showCart } = state;
    
    const handleCartModal = () => {
        dispatch({ type: 'EDIT_SHOW_MODAL', payload: true })
    }
    return (
        <div className="container-fluid p-0">
            <Navbar search={false} handleCartModal={handleCartModal}></Navbar>
            {showCart && <CartModal></CartModal>}

            <div className={`${styles.loginContainer} mt-5`}>
                <div className="pt-5">
                    <h3 className="d-flex justify-content-center">Login</h3>
                    <h6 className={`${styles.title} d-flex justify-content-center`}>Login with your email and password.</h6>
                </div>
                <form action="" className={styles.allInput}>
                    <div>
                        <label  htmlFor="email">Email</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="email" name="email" id="" placeholder="Enter Email"/>
                    </div>
                    <div className="mt-3">
                        <label  htmlFor="password">Password</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="password" name="password" id="" placeholder="Enter Password"/>
                    </div>
                    <div className="mt-4">
                        <input className={`${styles.loginBtn} justify-content-center`} type="submit" id="" value="Login"/>
                    </div>
                </form>
                <div className="d-flex justify-content-center mt-2">
                    <h6 className={styles.account}>Don't Have an Account?</h6>
                    <h6 className={`${styles.register} ms-1`}>Register</h6>
                </div>
            </div>
        </div>
    );
};

export default login;