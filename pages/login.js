import React, { useContext, useEffect, useState } from 'react';
import CartModal from '../components/CartModal';
import Navbar from '../components/Navbar';
import { StoreContext } from '../utils/context';
import styles from '../styles/Login.module.css';
import Link from 'next/link';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { v4 as uuidv4 } from 'uuid';
import Alerts from '../components/Alerts';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Login = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { showCart, userInfo } = state;
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const router = useRouter();

    const loadUser = async () => {
        try {
            const { data } = await axios.get('https://bishuddho-bazar.herokuapp.com/api/user/auth');
            dispatch({ type: 'LOAD_USER', payload: data })
        } catch (error) {
            dispatch({ type: 'LOAD_USER_FAIL' })
        }
    }
    const triggerAlert = (msg, alertType) => {
        const id = uuidv4();
        dispatch({ type: 'SET_ALERT', payload: { id, msg, alertType } });

        setTimeout(() => dispatch({ type: 'REMOVE_ALERT', payload: id }), 3000);
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
            loadUser();
        }
    }, [loadUser])

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
            const { data } = await axios.post('https://bishuddho-bazar.herokuapp.com/api/user/auth', { email, password });
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'LOGIN_FAIL' });
            triggerAlert('Invalid Credentials', 'danger');
        }
    }
    if(userInfo.isAuthenticated){
        router.push('/');
    }
    return (
        <div className="container-fluid p-0">
            <Head>
                <title>Login User</title>
                <meta name="description" content="Online shop for fresh foods" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <Navbar search={false} handleCartModal={handleCartModal}></Navbar>
            <Alerts></Alerts>
            {showCart && <CartModal></CartModal>}

            <div className={`${styles.loginContainer} mt-5`}>
                <div className="pt-5">
                    <h3 className="d-flex justify-content-center">Login</h3>
                    <h6 className={`${styles.title} d-flex justify-content-center mx-5 text-center`}>Login with your email and password.</h6>
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
                        <input className={`${styles.loginBtn} justify-content-center`} type="submit" id="login" value={userInfo.loading === false ? 'Logging In..' : 'Login'} />
                    </div>
                </form>
                <div className="d-flex justify-content-center mt-2">
                    <h6 className={styles.account}>Do not Have an Account?</h6>
                    <Link href="/register" passHref><h6 className={`${styles.register} ms-1`}>Register</h6></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;