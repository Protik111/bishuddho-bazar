import nc from 'next-connect';
import Order from '../../../models/Order';
import connectDb from '../../../utils/db';
import auth from '../../../utils/authMiddleware';

const router = nc();

//@route GET /api/order/:id
//@desc get a order by id
//@access private
router.get(async(req, res) => {
    await connectDb();
    const { query: { id } } = req;
    try {
        const order = await Order.findById(id);
        res.status(200).json(order);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Server Error' })
    }
});

export default router;