import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiAccountCircleLine } from 'react-icons/ri';
import Link from 'next/link';
import { useContext } from 'react';
import { StoreContext } from '../utils/context';


const Navbar = ({ search }) => {
    const { state, dispatch } = useContext(StoreContext);
    const { cart } = state;
    return (
        <div className={`${styles.container}`}>
            <Link href="/" passHref>
                <div className='ms-5 d-flex justify-content-center' style={{cursor: 'pointer'}}>
                    <Image className={styles.logo} src="/logo.jpg" width={90} height={90}></Image>
                </div>
            </Link>
            {search !== false && <div className='ms-5'>
                <input type="text" name="search" id="search" className={styles.searchInput} placeholder="Search Products" />
            </div>}
            <div className={styles.list}>
                <ul className={styles.listItem}>
                    {search !== false && <li>
                        <a href="">Products</a>
                    </li>}
                    {search !== false && <li>
                        <a href="">Contact Us</a>
                    </li>}
                    <li>
                        <a className={styles.cartLengthContainer} href=""><AiOutlineShoppingCart className={styles.icons}></AiOutlineShoppingCart></a><span className={styles.cartLength}>{cart.length}</span>
                    </li>
                    <li>
                        <a href=""><RiAccountCircleLine className={styles.icons}></RiAccountCircleLine></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;