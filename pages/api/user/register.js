import nc from 'next-connect';
import connectDb from '../../../utils/db';
import { body, validationResult } from 'express-validator';
import gravatar from 'gravatar';
import bcrypt from 'bcrypt';
import User from '../../../models/User';
import jwt from 'jsonwebtoken';
// import auth from '../../_middleware';
import auth from '../../../utils/authMiddleware';
const router = nc();

//@route GET /api/product
//@desc get all the products
//@access public
router.post(
    body('name', 'Name is Required.').notEmpty(),
    body('email', 'Plese Enter a Valid Email.').isEmail(),
    body('password', 'Please enter a password with 6 or more characters.').isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, password, password2 } = req.body;
        try {
            await connectDb();

            //check user exist
            const user = await User.findOne({ email })
            if(user){
                return res.status(400).json({ msg: 'User Already Exists.' })
            }

            //taking gravatar by email
            const profilePic = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });

            //creating new user instances
            const newUser = new User({
                name,
                email,
                password,
                profilePic
            });
            
            //hashing password
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            newUser.password = await bcrypt.hash(password, salt);
            //saving to db
            await newUser.save();

            const payload = {
                user: {
                    id: newUser.id
                }
            };
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
                res.status(200).json({ token });
            })

        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: 'Server Error' })
        }
    })

router.get(auth, async (req, res) => {
    await connectDb();
    return res.json({ msg: 'Protected Route'})
})
export default router;