import Image from 'next/image';
import styles from '../styles/Categories.module.css';
import Link from 'next/Link';

const Categories = () => {
    const Baby = "Baby Food";
    const Fish = "Fish";
    const Grocery = "Grocery";
    const Pickle = "Pickle Food";
    const Tea = "Tea & Snacks";
    const Meat = "Meat";
    const Fruits = "Fruits";
    return (
        <div>
            <div className="d-flex justify-content-center mb-5">
                <h2>Product Categories</h2>
            </div>
            <div className="row me-5 ms-5 text-center justify-content-center">
                <Link href={{ pathname: '/category', query: { keyword: Baby } }} passHref>
                    <div className={`${styles.categories_container} col-md-2`}>
                        <Image src="/images/categories/baby.png" width={80} height={80}></Image>
                        <h3>Baby Food</h3>
                    </div>
                </Link>
                <Link href={{ pathname: '/category', query: { keyword: Fish } }} passHref>
                <div className={`${styles.categories_container} col-md-2`}>
                    <Image src="/images/categories/fish.png" width={80} height={80}></Image>
                    <h3>Fish</h3>
                </div>
                </Link>
                <Link href={{ pathname: '/category', query: { keyword: Grocery } }} passHref>
                <div className={`${styles.categories_container} col-md-2`}>
                    <Image src="/images/categories/food.png" width={80} height={80}></Image>
                    <h3>Grocery</h3>
                </div>
                </Link>
                <Link href={{ pathname: '/category', query: { keyword: Pickle } }} passHref>
                <div className={`${styles.categories_container} col-md-2`}>
                    <Image src="/images/categories/grocery.png" width={80} height={80}></Image>
                    <h3>Pickle Food</h3>
                </div>
                </Link>
                <Link href={{ pathname: '/category', query: { keyword: Tea } }} passHref>
                <div className={`${styles.categories_container} col-md-2`}>
                    <Image src="/images/categories/lunch.png" width={80} height={80}></Image>
                    <h3>Tea & Snacks</h3>
                </div>
                </Link>
                <Link href={{ pathname: '/category', query: { keyword: Meat } }} passHref>
                <div className={`${styles.categories_container} col-md-2`}>
                    <Image src="/images/categories/meat.png" width={80} height={80}></Image>
                    <h3>Meat</h3>
                </div>
                </Link>
                <Link href={{ pathname: '/category', query: { keyword: Fruits } }} passHref>
                <div className={`${styles.categories_container} col-md-2 mt-4`}>
                    <Image src="/images/categories/apple.png" width={80} height={80}></Image>
                    <h3>Fruits</h3>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Categories;