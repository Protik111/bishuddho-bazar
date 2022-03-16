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
import OrderProductStyle from '../components/OrderProductStyle';
import styles from '../styles/OrderProductStyle.module.css';

const order = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { cart, paymentMethod, userInfo, shippingAddress } = state;
    const { address, city, postal, country } = shippingAddress;
    console.log('state from order', state, paymentMethod);
    const tax = 5.00;
    const shipping = 0.00;
    const taxShipping = tax + shipping;

    const router = useRouter();
    if (paymentMethod === null) {
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

    const total = cart.reduce((acc, cur) => acc + cur.price * cur.counts, 0);

    return (
        <div className="container-fluid p-0">
            <Head>
                <title>Payment</title>
                <meta name="description" content="Online shop for fresh foods" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <Navbar search={false} shipping={true}></Navbar>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <Alerts></Alerts>
            <div className="row">
                <div className="col-md-7 offset-md-1">
                    <div>
                        <h2>Shipping</h2>
                        <p>{address}, {city}, {postal}, {country}</p>
                    </div>
                    <hr />
                    <div>
                        <h2>Payment</h2>
                        <p>{paymentMethod}</p>
                    </div>
                    <hr />
                    <div>
                        <div>
                            <h2>Order Items: </h2>
                        </div>
                        <div>
                            {
                                cart.map(item => <OrderProductStyle item={item}></OrderProductStyle>)
                            }
                        </div>
                    </div>
                </div>
                <div className={`${styles.summery} col-md-3 mt-4 ms-1`}>
                    <div className="mt-3">
                        <h3>Order Summery</h3>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-around">
                        <p>Items' Price</p>
                        <p>$
                            {total.toFixed(2)}
                        </p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-around">
                        <p>Shipping</p>
                        <p>${shipping}</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-around">
                        <p>Tax</p>
                        <p>${tax}</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-around">
                        <p>Total</p>
                        <p>$
                            {(total+taxShipping).toFixed(2)}
                        </p>
                    </div>
                    <hr />
                    <div className="mt-2">
                        <input className={`${styles.loginBtn} w-100`} type="submit" id="login" value="Place Order" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(order);