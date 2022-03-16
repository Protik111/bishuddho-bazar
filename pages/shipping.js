import React, { useState, useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import withAuth from '../components/WithAuth';
import Head from 'next/head';
import { StoreContext } from '../utils/context';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import CheckoutSteps from '../components/CheckoutSteps';
import styles from '../styles/Shipping.module.css';

const shipping = () => {
    const { state, dispatch } = useContext(StoreContext);
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        postal: '',
        country: ''
    });
    const { address, city, postal, country } = formData;
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('after submit', formData);
    }
    const loadUser = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/user/auth');
            console.log('load user', data);
            dispatch({ type: 'LOAD_USER', payload: data })
        } catch (error) {
            dispatch({ type: 'LOAD_USER_FAIL' })
        }
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            console.log('token from useEffect', token);
            setAuthToken(token);
            loadUser();
        }
    }, [])
    console.log('state from shippiung', state);
    return (
        <div>
            <Head>
                <title>Shipping</title>
                <meta name="description" content="Online shop for fresh foods" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <Navbar search={false} shipping={true}></Navbar>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <div className={`${styles.loginContainer} mt-5 mb-5`}>
                <div className="pt-5">
                    <h3 className="d-flex justify-content-center">Shipping</h3>
                </div>
                <form onSubmit={handleSubmit} className={styles.allInput}>
                    <div>
                        <label htmlFor="address">Address</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="text" name="address" id="address" value={address} onChange={handleChange} placeholder="Enter Address" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="city">City</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="text" name="city" id="city" value={city} onChange={handleChange} placeholder="Enter City" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="postal">Postal Code</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="text" name="postal" id="postal" value={postal} onChange={handleChange} placeholder="Enter Postal Code" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="country">Country</label>
                        <br />
                        <input className={`${styles.input} justify-content-center`} type="text" name="country" id="country" value={country} onChange={handleChange} placeholder="Enter Country"/>
                    </div>
                    <div className="mt-4 mb-4">
                        <input className={`${styles.loginBtn} justify-content-center`} type="submit" id="" value="Continue" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withAuth(shipping);