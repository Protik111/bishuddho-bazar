import nc from "next-connect";
import Product from '../../../models/Product';
import connectDb from '../../../utils/db';

const router = nc();

//@route GET /api/product/category
//@desc get all the products by category
//@access public
router.get(async(req, res) => {
    await connectDb()
    const category = req.query.category;
    try {
        const products = await Product.find({category: category})
        res.send(products)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: 'Server Error Occured' })
    }
})

export default router;