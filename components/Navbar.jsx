import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={`${styles.container}`}>
            <div className='ms-5 d-flex justify-content-center'>
                <Image className={styles.logo} src="/logo.jpg" width={90} height={90}></Image>
            </div>
            <div className={styles.list}>
                <ul className={styles.listItem}>
                    <li>
                        <a href="">Products</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                    <li>
                        <a href="">Offers</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;