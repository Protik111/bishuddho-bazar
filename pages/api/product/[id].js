import nc from "next-connect";
import Product from '../../../models/Product';
import connectDb from '../../../utils/db';

const router = nc();

//@route GET /api/product/:id
//@desc get a product by id
//@access public
router.get(async(req, res) => {
    const { query: { id } } = req;
    await connectDb()
    const product = await Product.findById(id)
    res.send(product)
})

export default router;