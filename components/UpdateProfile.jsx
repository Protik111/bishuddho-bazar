import React, { useContext, useState } from 'react';
import styles from '../styles/Login.module.css';
import { StoreContext } from '../utils/context';

const UpdateProfile = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { cart, userInfo } = state;
    const [formData , setFormData] = useState({
        name: userInfo.user.name,
        email: userInfo.user.email
    })
    const { name, email } = formData;
    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        setFormData({...formData}, [e.target.name] = e.target.value)
    }
    return (
        <div>
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
                
                <div className="mt-4">
                    <input className={`${styles.loginBtn} justify-content-center`} type="submit" id="" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;