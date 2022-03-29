import React from 'react';
import Image from "next/image";
import styles from '../styles/OrderProductStyle.module.css';

const OrderProductStyle = ({ item }) => {
    const {_id, name, description, size, price, category, image, counts } = item;
    return (
        <div className={`${styles.container} p-3 my-2`}>
            <div>
                <Image className={styles.productImg} height={60} width={70} src={image} alt="product"></Image>
            </div>
            <div>
                <h5>{name}</h5>
            </div>
            <div>
                <h5>${price} X {counts} {" "} = ${price*counts}</h5>
            </div>
        </div>
    );
};

export default OrderProductStyle;