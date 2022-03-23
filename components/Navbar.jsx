import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiAccountCircleLine } from 'react-icons/ri';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { StoreContext } from '../utils/context';
import { AiOutlineLogout } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


const Navbar = ({ search, handleCart, handleCartModal, shipping }) => {
    const { state, dispatch } = useContext(StoreContext);
    const { cart, userInfo } = state;
    const [toggleMenu, setToggleMenu] = useState(false);
    const router = useRouter();

    const handleLogout = () => {
        dispatch({ type: 'LOG-OUT' });
        router.push('/login');
    }

    if (shipping && !userInfo) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }

    return (
        <div className={`${styles.container}`}>
            <Link href="/">
                <div className='ms-5 ms-sm -2 d-flex justify-content-center' style={{ cursor: 'pointer' }}>
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
                    {!shipping && <li>
                        <a onClick={(e) => {
                            e.preventDefault();
                            if (search === false) {
                                handleCartModal()
                            } else {
                                handleCart()
                            }
                        }} className={styles.cartLengthContainer} href=""><AiOutlineShoppingCart className={styles.icons}></AiOutlineShoppingCart></a><span className={styles.cartLength}>{!cart ? 0 : cart.length}</span>
                    </li>}
                    {userInfo.isAuthenticated &&
                        <li className={styles.profile}>
                            <Link href="/dashboard" passHref><a className={styles.icons}>{!userInfo.user ? '' : userInfo.user.name}</a></Link>
                        </li>}
                    {userInfo.isAuthenticated ?
                        <li className={styles.profile}>
                            <a onClick={handleLogout}><AiOutlineLogout className={styles.icons}></AiOutlineLogout></a>
                        </li> :
                        <li className={styles.profile}>
                            <Link href="/dashboard" passHref><RiAccountCircleLine className={styles.icons}></RiAccountCircleLine></Link>
                        </li>}
                </ul>
            </div>

            {/* for mobile */}
            <div className={styles.navbar_links_menu}>
                <div className="pb-5">
                    {
                        toggleMenu ?
                            <RiCloseLine color="red" size={27} onClick={() => setToggleMenu(false)} />
                            : <RiMenu3Line color="white" size={27} onClick={() => setToggleMenu(true)} />
                    }
                </div>
                {
                    toggleMenu && (<div className={styles.navbar_links_menu_items}>
                        <ul className={styles.listItem}>
                            {search !== false && <li>
                                <a href="">Products</a>
                            </li>}
                            {search !== false && <li>
                                <a href="">Contact Us</a>
                            </li>}
                            {!shipping && <li>
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    if (search === false) {
                                        handleCartModal()
                                    } else {
                                        handleCart()
                                    }
                                }} className={styles.cartLengthContainer} href=""><AiOutlineShoppingCart className={styles.icons}></AiOutlineShoppingCart></a><span className={styles.cartLength}>{!cart ? 0 : cart.length}</span>
                            </li>}
                            {userInfo.isAuthenticated &&
                                <li className={styles.profile}>
                                    <Link href="/dashboard" passHref><a className={styles.icons}>{!userInfo.user ? '' : userInfo.user.name}</a></Link>
                                </li>}
                            {userInfo.isAuthenticated ?
                                <li className={styles.profile}>
                                    <a onClick={handleLogout}><AiOutlineLogout className={styles.icons}></AiOutlineLogout></a>
                                </li> :
                                <li className={styles.profile}>
                                    <Link href="/dashboard" passHref><RiAccountCircleLine className={styles.icons}></RiAccountCircleLine></Link>
                                </li>}
                        </ul>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Navbar;