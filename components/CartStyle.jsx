import Image from 'next/image';
import { MdDelete } from 'react-icons/md';
import styles from '../styles/CartStyle.module.css';

const CartStyle = ({ item }) => {
    return (
        <div className={styles.container}>
            <div className="ms-md-3">
                <Image className={styles.cartImage} width={70} height={70} src={item.image}></Image>
            </div>
            <div className={`${styles.price} mx-md-5 my-md-2`}>
                <h6>{item.name}</h6>
                <p>Item Price: ${item.price}</p>
                <p>Total Items: {item.counts}</p>
                <h5>Total : ${item.counts * item.price}</h5>
            </div>
            <div className={styles.delete}>
                <span><MdDelete style={{fontSize: '30px', color: 'red'}}></MdDelete></span>
            </div>
        </div>
    );
};

export default CartStyle;