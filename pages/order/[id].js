import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import Head from 'next/head';
import Alerts from '../../components/Alerts';
import OrderProductStyle from '../../components/OrderProductStyle';
import styles from '../../styles/OrderProductStyle.module.css';
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from '../../utils/context';
import withAuth from '../../components/WithAuth';
import Navbar from '../../components/Navbar';

const SingleOrder = ({ order }) => {
    const { state, dispatch } = useContext(StoreContext);
    const { userInfo } = state;
    const { cart, isDelivered, isPaid, paymentMethod, shippingAddress, itemsPrice, shippingPrice, taxPrice, totalPrice } = order;
    const { address, city, postal, country } = shippingAddress;

    const triggerAlert = (msg, alertType) => {
        const id = uuidv4();
        dispatch({ type: 'SET_ALERT', payload: { id, msg, alertType } });

        setTimeout(() => dispatch({ type: 'REMOVE_ALERT', payload: id }), 3000);
    }

    const handlePayment = () => {
        triggerAlert("Cash On Delivery Available Now", "danger");
    }


    const loadUser = async () => {
        try {
            const { data } = await axios.get('https://bishuddho-bazar.herokuapp.com/api/user/auth');
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
    }, [loadUser]);
    return (
        <div className="container-fluid p-0">
            <Head>
                <title>Your Order</title>
                <meta name="description" content="Online shop for fresh foods" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <Navbar search={false} shipping={true}></Navbar>
            <Alerts></Alerts>
            <div className="row">
                <div className="col-md-7 offset-md-1">
                    <div className="mt-4">
                        <h2>Order - {order._id}</h2>
                        <h5>Name: {!userInfo.user ? '' : userInfo.user.name}</h5>
                        <h5>Email: {!userInfo.user ? '' : userInfo.user.email}</h5>
                        <p>{address}, {city}, {postal}, {country}</p>
                        <div className={`${isDelivered ? styles.paid : styles.notPaid} px-1`}>
                            <h3>{isDelivered ? 'Delivered' : 'Not Delivered'}</h3>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h2>Payment</h2>
                        <p>{paymentMethod}</p>
                        <div className={`${isPaid ? styles.paid : styles.notPaid} px-1`}>
                            <h3>{isPaid ? 'Paid' : 'Not Paid'}</h3>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div>
                            <h2>Order Items: </h2>
                        </div>
                        <div>
                            {
                                cart.map(item => <OrderProductStyle item={item} key={item. _id}></OrderProductStyle>)
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
                        <p>Items Price</p>
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
                        <input onClick={handlePayment} className={`${styles.loginBtn} w-100`} type="submit" id="login" value="Make Payment" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(SingleOrder);

export async function getServerSideProps(context){
    const { params } = context;
    const { data } = await axios.get(`https://bishuddho-bazar.herokuapp.com/api/order/${params.id}`);
    return {
        props: {
            order: data
        }
    }
}