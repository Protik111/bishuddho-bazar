import React, { useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import withAuth from '../components/WithAuth';
import Head from 'next/head';
import { StoreContext } from '../utils/context';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';

const shipping = () => {
    const { state, dispatch } = useContext(StoreContext);
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
            <h2>Shipment</h2>
        </div>
    );
};

export default withAuth(shipping);