import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../utils/context';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/Alerts.module.css';

const Alerts = () => {
    const { state } = useContext(StoreContext);
    const { alerts } = state;

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 300,
            easing: 'ease-in-sine',
        });
    }, [])
    return (
        <div>
            {alerts !== null && alerts.length > 0 && alerts.map(alert => <div className={`${styles.alert_cotainer} mt-2`} data-aos="zoom-out-down" key={alert.id}>
                <p className={`${styles.alertTitle} ${alert.alertType === 'Pcreated' && styles.alertTitle_success} px-5 py-2`}>{alert.msg}</p>
            </div>)}
        </div>
    );
};

export default Alerts;