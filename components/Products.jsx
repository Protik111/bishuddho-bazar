import ProductStyle from './ProductStyle';

const Products = ({ products }) => {
    return (
        <div className="mt-4 mb-4" id="product">
            <div className="d-flex justify-content-center">
                <h2><bold>Popular Products By Customer</bold></h2>
            </div>
            <div className="d-flex justify-content-center text-center">
                <p>See all our popular products in this week. You can choose  your daily needs products <br></br> from this list and get some special offer with free shipping.</p>
            </div>
            <div className="row ms-1 me-1 ms-md-5">
                {
                    products.map(item => <ProductStyle item={item} key={item._id}></ProductStyle>)
                }
            </div>
        </div>
    );
};


export default Products;