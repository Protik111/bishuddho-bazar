import Image from 'next/image';
import styles from '../styles/Categories.module.css';

const Categories = () => {
    return (
        <div>
            <div className="d-flex justify-content-center mb-5">
                <h2>Product Categories</h2>
            </div>
            <div className="row me-5 ms-5 text-center justify-content-center">
                <div className={`${styles.categories_container} col-md-2`}>
                    <Image src="/images/categories/apple.png" width={80} height={80}></Image>
                    <h3>Food For</h3>
                </div>
                <div className={`${styles.categories_container} col-md-2`}>
                    <Image src="/images/categories/baby.png" width={80} height={80}></Image>
                    <h3>Food For</h3>
                </div>
                <div className={`${styles.categories_container} col-md-2`}>
                    <Image src="/images/categories/fish.png" width={80} height={80}></Image>
                    <h3>Food For</h3>
                </div>
                <div className={`${styles.categories_container} col-md-2`}>
                    <Image src="/images/categories/food.png" width={80} height={80}></Image>
                    <h3>Food For</h3>
                </div>
                <div className={`${styles.categories_container} col-md-2`}>
                    <Image src="/images/categories/grocery.png" width={80} height={80}></Image>
                    <h3>Food For</h3>
                </div>
                <div className={`${styles.categories_container} col-md-2`}>
                    <Image src="/images/categories/lunch.png" width={80} height={80}></Image>
                    <h3>Food For</h3>
                </div>
                <div className={`${styles.categories_container} col-md-2 mt-4`}>
                    <Image src="/images/categories/meat.png" width={80} height={80}></Image>
                    <h3>Food For</h3>
                </div>
            </div>
        </div>
    );
};

export default Categories;