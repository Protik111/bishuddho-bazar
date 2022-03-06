import Image from 'next/image';
import Navbar from '../../components/Navbar';
import styles from '../../styles/SingleProduct.module.css';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
import { useContext } from 'react';
import { StoreContext } from '../../utils/context';

const SingleProduct = ({ product }) => {
    const { state, dispatch } = useContext(StoreContext);
    const { dummy } = state;
    // const [item, setItem] = useState([]);
    // const router = useRouter();
    // const { id } = router.query;
    // useEffect(() => {
    //     const product = data.find(itm => itm.id === parseInt(id));
    //     setItem(product);
    // }, [id])
    const handleCart = async () => {
        if(product.counts <= 0 ){
            alert("Products Not Available");
        }
    }
    if (!product) {
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
                    <Image className={styles.singleImg} src={product.image} alt="Picture of the product" width={330} height={300}></Image>
                </div>
                <div className="col-md-5 mt-5 offset-1 offset-md-0">
                    <h4>{product.name}</h4>
                    <p className="me-1">{product.description}</p>
                    <p className={styles.price}>${product.price}</p>
                    <div className={styles.cartAdd}>
                        <div className={`${styles.numbers}`}>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                        <div className="ms-2">
                            <button className="btn btn-success px-4 py-3" onClick={handleCart}>Add To Cart</button>
                        </div>
                    </div>
                    <div className={styles.categoryPrice}>
                        <p className={`${styles.category} mt-2`}>Category: {product.category}</p>
                        <p className={`${styles.size} ms-2 mt-2`}>{product.size}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;

export async function getServerSideProps(context){
    const { params } = context;
    const res = await axios.get(`http://localhost:3000/api/product/${params.id}`);
    return {
        props: {
            product: res.data
        }
    }
}