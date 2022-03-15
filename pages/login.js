import React, { useContext, useEffect, useState } from 'react';
import CartModal from '../components/CartModal';
import Navbar from '../components/Navbar';
import { StoreContext } from '../utils/context';
import styles from '../styles/Login.module.css';
import Link from 'next/link';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

const login = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { showCart } = state;
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const loadUser = async () => {
        const { data } = await axios.get('http://localhost:3000/api/user/auth');
        console.log('load user', data);
        dispatch({ type: 'LOAD_USER', payload: data })
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            console.log('token from useEffect', token);
            setAuthToken(token);
            loadUser();
        }
    }, [])

    const { email, password } = formData;

    useEffect(() => {
        dispatch({ type: 'EDIT_SHOW_MODAL', payload: false })
    }, [])

    const handleCartModal = () => {
        dispatch({ type: 'EDIT_SHOW_MODAL', payload: true })
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('http://localhost:3000/api/user/auth', { email, password });
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });

        } catch (error) {
            alert(error);
        }
    }
    console.log('state', state);
    return (
        <div className="container-fluid p-0">
            <Navbar search={false} handleCartModal={handleCartModal}></Navbar>
            {showCart && <CartModal></CartModal>}

            <div className={`${styles.loginContainer} mt-5`}>
                <div className="pt-5">
                    <h3 className="d-flex justify-content-center">Login</h3>
                    <h6 className={`${styles.title} d-flex justify-content-center`}>Login with your email and password.</h6>
                </div>
                <form onSubmit={handleSubmit} className={styles.allInput}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="email" name="email" id="email" value={email} onChange={handleChange} placeholder="Enter Email" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="password" name="password" id="password" value={password} onChange={handleChange} placeholder="Enter Password" />
                    </div>
                    <div className="mt-4">
                        <input className={`${styles.loginBtn} justify-content-center`} type="submit" id="login" value="Login" />
                    </div>
                </form>
                <div className="d-flex justify-content-center mt-2">
                    <h6 className={styles.account}>Don't Have an Account?</h6>
                    <Link href="/register" passHref><h6 className={`${styles.register} ms-1`}>Register</h6></Link>
                </div>
            </div>
        </div>
    );
};

export default login;