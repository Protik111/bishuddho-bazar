import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../utils/context';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import withAuth from '../components/WithAuth';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import CheckoutSteps from '../components/CheckoutSteps';
import Alerts from '../components/Alerts';

const order = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { paymentMethod } = state;
    console.log('state from order', state, paymentMethod);

    const router = useRouter();
    if(paymentMethod===null){
        router.push('/payment')
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
    }, []);

    return (
        <div>
            <Head>
                <title>Payment</title>
                <meta name="description" content="Online shop for fresh foods" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <Navbar search={false} shipping={true}></Navbar>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <Alerts></Alerts>
        </div>
    );
};

export default withAuth(order);