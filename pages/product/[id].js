import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import data from '../../utils/data.js';
import styles from '../../styles/SingleProduct.module.css';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';

const SingleProduct = () => {
    const [item, setItem] = useState([]);
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        const product = data.find(itm => itm.id === parseInt(id));
        setItem(product);
    }, [id])
    console.log('image', item.image, item.name);
    if (item.length <= 0) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }
    return (
        <div>
            <Navbar search={false}></Navbar>
            <div className="row mt-4">
                <div className="col-md-5 offset-md-1 mt-5 offset-1">
                    <Image src={item.image} alt="Picture of the product" width={300} height={300}></Image>
                </div>
                <div className="col-md-5 mt-5 offset-1 offset-md-0">
                    <h4>{item.name}</h4>
                    <p className="me-1">{item.fullDescription}</p>
                    <p className={styles.price}>${item.price}</p>
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
                    <div className={styles.categoryPrice}>
                        <p className={`${styles.category} mt-2`}>Category: {item.category}</p>
                        <p className={`${styles.size} ms-2 mt-2`}>{item.size}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;