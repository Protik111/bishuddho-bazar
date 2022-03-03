import Image from "next/image";
import styles from '../styles/ProductStyle.module.css';
import { BsFillCartPlusFill } from 'react-icons/bs';

const ProductStyle = ({ item }) => {
    const { name, description, size, price, category, image } = item;
    return (
        <div className={`${styles.container} col-md-2 m-3 px-3`}>
            <div className="pt-3 d-flex justify-content-center">
                <Image className={styles.productImg} src='/images/products/cranberry.png' width={200} height={130}></Image>
            </div>
            <div className={`${styles.cartInfo} mt-4`}>
                <div className={styles.info}>
                    <p className={styles.size}>{size}</p>
                    <p className={styles.price}>${price}</p>
                    <p className={styles.name}><bold>{name}</bold></p>
                </div>
                <div className={styles.addBtn}>
                    <button><BsFillCartPlusFill className={styles.addIcon}></BsFillCartPlusFill></button>
                </div>
            </div>
        </div>
    );
};

export default ProductStyle;