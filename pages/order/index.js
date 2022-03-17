import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { useRouter } from 'next/router';
import Head from 'next/head';
import CheckoutSteps from '../../components/CheckoutSteps';
import Alerts from '../../components/Alerts';
import OrderProductStyle from '../../components/OrderProductStyle';
import styles from '../../styles/OrderProductStyle.module.css';
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from '../../utils/context';
import withAuth from '../../components/WithAuth';
import Navbar from '../../components/Navbar';

const order = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { cart, paymentMethod, userInfo, shippingAddress } = state;
    // const { address, city, postal, country } = shippingAddress;
    console.log('state from order', state, paymentMethod);
    const taxPrice = 5.00;
    const shippingPrice = 0.00;
    const taxShipping = taxPrice + shippingPrice;
    const itemsPrice = cart.reduce((acc, cur) => acc + cur.price * cur.counts, 0);
    const totalPrice = (itemsPrice+taxShipping).toFixed(2)


    const router = useRouter();
    if (paymentMethod === null) {
        router.push('/payment')
    }
    const triggerAlert = (msg, alertType) => {
        const id = uuidv4();
        dispatch({ type: 'SET_ALERT', payload: { id, msg, alertType } });

        setTimeout(() => dispatch({ type: 'REMOVE_ALERT', payload: id }), 3000);
    }

    const handleOrder = async() => {
        try {
            const { data } = await axios.post('http://localhost:3000/api/order', { cart, paymentMethod, shippingAddress, itemsPrice, shippingPrice, taxPrice, totalPrice})
            triggerAlert("Order Placed Successfully!", "success");
            router.push(`/order/${data._id}`);
            dispatch({ type: 'REMOVE_AFTER_MAKING_ORDER' })
        } catch (error) {
            triggerAlert("Order Cannot Placed Successfully!", "danger")
        }
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
        <div className="container-fluid p-0">
            <Head>
                <title>Order</title>
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
                        <p>{!shippingAddress ? '' : shippingAddress.address}, {!shippingAddress ? '' : shippingAddress.city}, {!shippingAddress ? '' : shippingAddress.postal}, {!shippingAddress ? '' : shippingAddress.country}</p>
                    </div>
                    <hr />
                    <div>
                        <h2>Payment</h2>
                        <p>{!paymentMethod ? '' : paymentMethod}</p>
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
                            {itemsPrice.toFixed(2)}
                        </p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-around">
                        <p>Shipping</p>
                        <p>${shippingPrice}</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-around">
                        <p>Tax</p>
                        <p>${taxPrice}</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-around">
                        <p>Total</p>
                        <p>$
                            {totalPrice}
                        </p>
                    </div>
                    <hr />
                    <div className="mt-2">
                        <input onClick={handleOrder} className={`${styles.loginBtn} w-100`} type="submit" id="login" value="Place Order" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(order);