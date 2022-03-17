import nc from 'next-connect';
import Order from '../../../models/Order';
import connectDb from '../../../utils/db';
import auth from '../../../utils/authMiddleware';

const router = nc();

//@route POST /api/order
//@desc creating a order
//@access Private
router.post(auth, async (req, res) => {
    await connectDb();
    const { cart, paymentMethod, shippingAddress, itemsPrice, shippingPrice, taxPrice, totalPrice } = req.body;
    const { address, city, postal, country } = shippingAddress;

    try {
        const newOrder = new Order({
            user: req.user.id,
            cart: cart,
            paymentMethod,
            shippingAddress: {
                address,
                city,
                postal,
                country
            },
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice
        });

        //saving to db
        await newOrder.save();

        return res.status(200).json({ msg: 'Order Completed Successfully!' })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Server Error' })
    }
});

export default router;