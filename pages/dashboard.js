import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import Head from 'next/head';
import Alerts from '../components/Alerts';
import OrderProductStyle from '../components/OrderProductStyle';
import styles from '../styles/OrderProductStyle.module.css';
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from '../utils/context';
import withAuth from '../components/WithAuth';
import Navbar from '../components/Navbar';
import { MdOutlineDashboard, MdPassword } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import { GrDocumentUpdate, GrCompliance } from 'react-icons/gr';
import { FcProcess } from 'react-icons/fc';
import { BsFillCartCheckFill } from 'react-icons/bs';


const dashboard = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { cart, userInfo } = state;

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
                <title>Dashboard</title>
                <meta name="description" content="Online shop for fresh foods" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <Navbar search={false} shipping={true}></Navbar>
            <Alerts></Alerts>
            <div className="row">

                <div className={`${styles.dashboard_menu} col-md-3 mt-4 offset-md-1`}>
                    <div className="mt-3">
                        <h3>Actions</h3>
                    </div>
                    <hr />
                    <div>
                        <a href="" className="px-4 py-2"><span className="me-2"><MdOutlineDashboard></MdOutlineDashboard></span>Dashboard</a>
                    </div>
                    <div>
                        <a href="" className="px-4 py-2"><span className="me-2"><GrDocumentUpdate></GrDocumentUpdate></span>Update Profile</a>
                    </div>
                    <div>
                        <a href="" className="px-4 py-2"><span className="me-2"><MdPassword></MdPassword></span>Change Password</a>
                    </div>
                    <div>
                        <a href="" className="px-4 py-2"><span className="me-2"><AiOutlineLogout></AiOutlineLogout></span>Logout</a>
                    </div>
                </div>

                <div className="col-md-7">
                    <div className="mt-4">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className={`${styles.orderNumber} px-3 py-2`}>
                            <div>
                                <span className={`${styles.orderIcon} me-3`}><BsFillCartCheckFill></BsFillCartCheckFill></span>
                            </div>
                            <div className={`${styles.orderCounts} text-center`}>
                                <h3>Total Order</h3>
                                <p>30</p>
                            </div>
                        </div>
                        <div className={`${styles.orderNumber} px-3 py-2`}>
                            <div>
                                <span className={`${styles.orderIcon} me-3`}><FcProcess></FcProcess></span>
                            </div>
                            <div className={`${styles.orderCounts} text-center`}>
                                <h3>Processing Order</h3>
                                <p>30</p>
                            </div>
                        </div>
                        <div className={`${styles.orderNumber} px-3 py-2`}>
                            <div>
                                <span className={`${styles.orderIcon} me-3`}><GrCompliance></GrCompliance></span>
                            </div>
                            <div className={`${styles.orderCounts} text-center`}>
                                <h3>Completed</h3>
                                <p>30</p>
                            </div>
                        </div>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Order Time</th>
                                <th scope="col">Method</th>
                                <th scope="col">Status</th>
                                <th scope="col">Total $</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@mdo</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@mdo</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@mdo</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@mdo</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default withAuth(dashboard);