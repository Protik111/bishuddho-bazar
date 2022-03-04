import nc from 'next-connect';
import Product from '../../models/Product';
import connectDb from '../../utils/db';
import data from '../../utils/data';

const router = nc();
router.get(async (req, res) => {
    try {
        await connectDb();
        await Product.deleteMany();
        await Product.insertMany(data);
        return res.status(200).json({ msg: 'Bulk Data Inseted Successfully!'})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: 'Server Error' })
    }
});

export default router;