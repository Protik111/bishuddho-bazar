import data from '../utils/data.js';
import ProductStyle from './ProductStyle';

const Products = () => {
    return (
        <div className="mt-4 mb-4">
            <div className="d-flex justify-content-center">
                <h2><bold>Popular Products By Customer</bold></h2>
            </div>
            <div className="d-flex justify-content-center text-center">
                <p>See all our popular products in this week. You can choose  your daily needs products <br></br> from this list and get some special offer with free shipping.</p>
            </div>
            <div className="row ms-5">
                {
                    data.map(item => <ProductStyle item={item} key={item.id}></ProductStyle>)
                }
            </div>
        </div>
    );
};

export default Products;