import nc from 'next-connect';
import auth from '../../../utils/authMiddleware';
import User from '../../../models/User';
import connectDb from '../../../utils/db';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = nc();

//@route GET /api/user/auth
//@desc get user by token's id
//@access private
router.get(auth, async(req, res) => {
    await connectDb();
    try {
        const user = await User.findById(req.user.id).select('-password')
        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: 'Server Error' })
    }
});

//@route POST /api/user/auth
//@desc authenticating a user
//@access public
router.post(
    body('email', 'Email is Required').isEmail(),
    body('password', 'Password is Required').exists(),
    async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;
    try {
        //checking user exists
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({ errors: [{ msg: 'Invalid Credentials' }] })
        }
        
        //checking matching of password
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token)=> {
            if(err) throw err;
            return res.status(200).json({ token })
        })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: 'Server Error' })
    }
})

export default router;