import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../utils/context';
import { useRouter } from 'next/router';
import withAuth from '../components/WithAuth';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import CheckoutSteps from '../components/CheckoutSteps';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import styles from '../styles/Shipping.module.css';
import Alerts from '../components/Alerts';
import { v4 as uuidv4 } from 'uuid';

const Payment = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { shippingAddress, paymentMethod } = state;
    const [payment, setPayment] = useState('');

    const triggerAlert = (msg, alertType) => {
        const id = uuidv4();
        dispatch({ type: 'SET_ALERT', payload: { id, msg, alertType } });

        setTimeout(() => dispatch({ type: 'REMOVE_ALERT', payload: id }), 3000);
    }

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(payment){
            dispatch({ type: 'ADD_PAYMENT', payload: payment})
            router.push('/order');
        }else{
            triggerAlert('Select A Payment Method', 'danger');
        }
    }

    if (!shippingAddress) {
        router.push('/shipping');
    }
    if(paymentMethod !== null){
        router.push('/order')
    }
    const loadUser = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/user/auth');
            dispatch({ type: 'LOAD_USER', payload: data })
        } catch (error) {
            dispatch({ type: 'LOAD_USER_FAIL' })
        }
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
            loadUser();
        }
    }, [loadUser])
    return (
        <div>
            <Head>
                <title>Payment</title>
                <meta name="description" content="Online shop for fresh foods" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <Navbar search={false} shipping={true}></Navbar>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <Alerts></Alerts>
            <div className={`${styles.paymentContainer} mt-5`}>
                <div className="pt-5">
                    <h3 className="d-flex justify-content-center">Payment</h3>
                    <hr />
                </div>
                <form onSubmit={handleSubmit} className={styles.allInput}>
                    <div className="form-check">
                        <input onChange={(e) => setPayment(e.target.value)} value="Paypal" className="form-check-input" type="radio" name="Paypal" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="Paypal">
                            Paypal
                        </label>
                    </div>
                    <div className="mt-4">
                        <input className={`${styles.loginBtn} justify-content-center`} type="submit" id="login" value="Continue" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withAuth(Payment);