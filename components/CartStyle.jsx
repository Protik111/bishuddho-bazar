import Image from 'next/image';
import { MdDelete } from 'react-icons/md';
import styles from '../styles/CartStyle.module.css';
import { useContext } from 'react';
import { StoreContext } from '../utils/context';

const CartStyle = ({ item }) => {
    const { state, dispatch } = useContext(StoreContext);
    const handleDelete = async(item) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item })
    }
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
            <div onClick={() => handleDelete(item)} className={styles.delete}>
                <span><MdDelete style={{fontSize: '28px', color: 'red'}}></MdDelete></span>
            </div>
        </div>
    );
};

export default CartStyle;