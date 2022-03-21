import nc from 'next-connect';
import auth from '../../../utils/authMiddleware';
import { body, validationResult } from 'express-validator';
import User from '../../../models/User';

const router = nc();
router.put(auth, 
    body('name', 'Name is Required.').notEmpty(),
    body('email', 'Email is Required.').notEmpty(),
    async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if(!user){
            return res.status(400).json({ msg: 'User Not Found!'})
        }
        const updatedUser = await User.findByIdAndUpdate(req.user.id, {$set: req.body}, { new: true }).select('-password');
        // const withoutPassUser = updatedUser
        return res.send(updatedUser)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: 'Server Error Occured' })
    }
})

export default router;