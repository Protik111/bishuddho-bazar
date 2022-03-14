import React, { useContext, useEffect } from 'react';
import CartModal from '../components/CartModal';
import Navbar from '../components/Navbar';
import { StoreContext } from '../utils/context';
import styles from '../styles/Login.module.css';
import Link from 'next/link';

const Register = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { showCart } = state;

    useEffect(() => {
        dispatch({ type: 'EDIT_SHOW_MODAL', payload: false })
    }, [])

    const handleCartModal = () => {
        dispatch({ type: 'EDIT_SHOW_MODAL', payload: true })
    }
    return (
        <div className="container-fluid p-0">
            <Navbar search={false} handleCartModal={handleCartModal}></Navbar>
            {showCart && <CartModal></CartModal>}

            <div className={`${styles.loginContainer} mt-5`}>
                <div className="pt-5">
                    <h3 className="d-flex justify-content-center">Register</h3>
                    <h6 className={`${styles.title} d-flex justify-content-center`}>Register with your name, email and password.</h6>
                </div>
                <form action="" className={styles.allInput}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="name" name="name" id="" placeholder="Enter Full Name" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="email" name="email" id="" placeholder="Enter Email" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="password" name="password" id="" placeholder="Enter Password" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password2">Confirm Password</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="password2" name="password2" id="" placeholder="Confirm Password" />
                    </div>
                    <div className="mt-4">
                        <input className={`${styles.loginBtn} justify-content-center`} type="submit" id="" value="Login" />
                    </div>
                </form>
                <div className="d-flex justify-content-center mt-2">
                    <h6 className={styles.account}>Already Have an Account?</h6>
                    <Link href="/login" passHref><h6 className={`${styles.register} ms-1`}>Login</h6></Link>
                </div>
            </div>
        </div>
    );
};

export default Register;