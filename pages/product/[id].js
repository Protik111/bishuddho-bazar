import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import data from '../../utils/data.json';
import styles from '../../styles/SingleProduct.module.css';

const SingleProduct = () => {
    // const [item, setItem] = useState(data);
    // const router = useRouter();
    // const { id } = router.query;
    // useEffect(() => {
    //     const product = item.find(itm => itm.id === parseInt(id));
    //     setItem(product);
    // }, [id])
    return (
        <div>
            <Navbar search={false}></Navbar>
            <div className="row mt-4">
                <div className="col-md-5 offset-md-1 mt-4 offset-1">
                    <Image src="/images/products/clementine.png" width={300} height={300}></Image>
                </div>
                <div className="col-md-5 mt-5 offset-1 offset-md-0">
                    <h4>Eggs Benedict</h4>
                    <p className="me-1">Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel Chicken sausage Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel.</p>
                    <p className={styles.price}>$18</p>
                    <div className={styles.cartAdd}>
                        <div className={`${styles.numbers}`}>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                        <div className="ms-2">
                            <button className="btn btn-success px-4 py-3">Add To Cart</button>
                        </div>
                    </div>
                    <p className={`${styles.category} mt-2`}>Category: Fish</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;