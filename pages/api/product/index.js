import nc from "next-connect";
import Product from '../../../models/Product';
import connectDb from '../../../utils/db';

const router = nc();
router.get(async(req, res) => {
    await connectDb()
    const products = await Product.find({})
    res.send(products)
})

export default router;