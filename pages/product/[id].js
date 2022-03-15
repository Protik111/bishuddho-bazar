import Image from 'next/image';
import Navbar from '../../components/Navbar';
import styles from '../../styles/SingleProduct.module.css';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { StoreContext } from '../../utils/context';
import CartModal from '../../components/CartModal';
import Head from 'next/head'
import setAuthToken from '../../utils/setAuthToken';

const SingleProduct = ({ product }) => {
    const { state, dispatch } = useContext(StoreContext);
    const { cart, showCart } = state;
    // console.log('cart', cart);

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
    }, [])

    const handleCartModal = () => {
        dispatch({ type: 'EDIT_SHOW_MODAL', payload: true })
    }

    const handleCart = async () => {
        if (product.counts <= 0) {
            alert("Products Not Available");
        }
        dispatch({ type: 'ADD_TO_CART', payload: { ...product, counts: 1 } })
    }

    const item = cart.filter(item => item._id === product._id)
    // console.log('itm', item);

    if (!product && item.length === 0) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }

    const handleDecrease = (product, count) => {
        if (item[0].counts < 0) {
            alert("Products Cannot Be Negative");
        } else {
            dispatch({ type: 'ADD_TO_CART', payload: { ...product, counts: count - 1 } })
        }
    }
    const handleIncrease = async (product, count) => {
        if (item[0].counts >= product.counts) {
            alert(`${product.counts} Products Are Available`);
        } else {
            dispatch({ type: 'ADD_TO_CART', payload: { ...product, counts: count + 1 } })
        }
    }
    return (
        <div>
            <Head>
                <title>{product.name}</title>
                <meta name="description" content="Online shop for fresh foods" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <Navbar search={false} handleCartModal={handleCartModal}></Navbar>
            {showCart && <CartModal></CartModal>}
            <div className="row mt-4">
                <div className="col-md-5 offset-md-1 mt-5 offset-1">
                    <Image className={styles.singleImg} src={product.image} alt="Picture of the product" width={330} height={300}></Image>
                </div>
                <div className="col-md-5 mt-5 offset-1 offset-md-0">
                    <h4>{product.name}</h4>
                    <p className="me-1">{product.description}</p>
                    <p className={styles.price}>${product.price}</p>
                    <div className={styles.cartAdd}>
                        <div className={`${styles.numbers} px-3`}>
                            <button className={`${styles.countsBtn}`} onClick={() => handleDecrease(product, item.length === 0 ? 0 : item[0].counts)} disabled={item.length === 0 ? true : item[0].counts === 1 ? true : false}>-</button>
                            <p>
                                {
                                    item.length === 0 ? 0 : item[0].counts
                                }
                            </p>
                            <button className={styles.countsBtn} onClick={() => handleIncrease(product, item.length === 0 ? 0 : item[0].counts)} disabled={item.length === 0}>+</button>
                        </div>
                        <div className="ms-2">
                            <button className="btn btn-success px-4 py-3" onClick={handleCart} disabled={item.length > 0}>Add To Cart</button>
                        </div>
                    </div>
                    <div>
                        <p className={`${styles.category} mt-2`}>Available Items: {product.counts}</p>
                    </div>
                    <div className={styles.categoryPrice}>
                        <p className={`${styles.category}`}>Category: {product.category}</p>
                        <p className={`${styles.size} ms-2`}>{product.size}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;

export async function getServerSideProps(context) {
    const { params } = context;
    const res = await axios.get(`http://localhost:3000/api/product/${params.id}`);
    return {
        props: {
            product: res.data
        }
    }
}