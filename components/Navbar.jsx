import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiAccountCircleLine } from 'react-icons/ri';


const Navbar = () => {
    return (
        <div className={`${styles.container}`}>
            <div className='ms-5 d-flex justify-content-center'>
                <Image className={styles.logo} src="/logo.jpg" width={90} height={90}></Image>
            </div>
            <div className='ms-5'>
                <input type="text" name="search" id="search" className={styles.searchInput} placeholder="Search Products"/>
            </div>
            <div className={styles.list}>
                <ul className={styles.listItem}>
                    <li>
                        <a href="">Products</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                    <li>
                        <a href=""><AiOutlineShoppingCart className={styles.icons}></AiOutlineShoppingCart></a>
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