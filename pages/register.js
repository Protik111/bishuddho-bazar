import React, { useContext, useEffect, useState } from 'react';
import CartModal from '../components/CartModal';
import Navbar from '../components/Navbar';
import { StoreContext } from '../utils/context';
import styles from '../styles/Login.module.css';
import Link from 'next/link';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Alerts from '../components/Alerts';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Register = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { showCart, userInfo } = state;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const router = useRouter();

    const loadUser = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/user/auth');
            console.log('load user', data);
            dispatch({ type: 'LOAD_USER', payload: data })
        } catch (error) {
            dispatch({ type: 'LOAD_USER_FAIL' })
        }
    }

    const { name, email, password, password2 } = formData;

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== password2){
            triggerAlert("Password Didn't Matched!", "danger")
        }else{
            try {
                const { data } = await axios.post('http://localhost:3000/api/user/register', {name, email, password});
                dispatch({ type: 'REGISTER_SUCCESS', payload: data });
                router.push('/');
            } catch (error) {
                const errors = error.response.data.errors;
                console.log('e', errors);
                errors.map(err => triggerAlert(err.msg, 'danger'))
                dispatch({ type: 'REGISTER_FAIL' })
            }
        }
        
    }

    const triggerAlert = (msg, alertType) => {
        const id = uuidv4();
        dispatch({ type: 'SET_ALERT', payload: { id, msg, alertType } });

        setTimeout(() => dispatch({ type: 'REMOVE_ALERT', payload: id }), 3000);
    }

    useEffect(() => {
        dispatch({ type: 'EDIT_SHOW_MODAL', payload: false });

        const token = localStorage.getItem('token');
        if (token) {
            console.log('token from useEffect', token);
            setAuthToken(token);
            loadUser();
        }

    }, [])

    const handleCartModal = () => {
        dispatch({ type: 'EDIT_SHOW_MODAL', payload: true })
    }

    if(userInfo.isAuthenticated){
        router.push('/shipping');
    }
    return (
        <div className="container-fluid p-0">
            <Head>
                <title>Register User</title>
                <meta name="description" content="Online shop for fresh foods" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <Navbar search={false} handleCartModal={handleCartModal}></Navbar>
            <Alerts></Alerts>
            {showCart && <CartModal></CartModal>}

            <div className={`${styles.loginContainer} mt-5`}>
                <div className="pt-5">
                    <h3 className="d-flex justify-content-center">Register</h3>
                    <h6 className={`${styles.title} d-flex justify-content-center`}>Register with your name, email and password.</h6>
                </div>
                <form onSubmit={handleSubmit} className={styles.allInput}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="text" name="name" id="name" value={name} onChange={handleChange} placeholder="Enter Full Name" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="email" name="email" id="email" value={email} onChange={handleChange} placeholder="Enter Email" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="password" name="password" id="password" value={password} onChange={handleChange} placeholder="Enter Password" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password2">Confirm Password</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="password" name="password2" id="password2" value={password2} onChange={handleChange} placeholder="Confirm Password"/>
                    </div>
                    <div className="mt-4">
                        <input className={`${styles.loginBtn} justify-content-center`} type="submit" id="" value="Register" />
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