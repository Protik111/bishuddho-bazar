import nc from 'next-connect';
import auth from '../../../utils/authMiddleware';
import Order from '../../../models/Order';

const router = nc();
router.get(auth,async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id });
        if(!orders){
            return res.status(400).json({ msg: 'Orders Not Found' })
        };
        return res.status(200).json(orders);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: 'Server Error Occured' })
    }
})

export default router;