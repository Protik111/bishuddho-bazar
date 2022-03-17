import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    cart: [
        {
            name: {
                type: String,
                required: true
            },
            counts: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true
            }
        }
    ],
    paymentMethod: {
        type: String,
        required: true
    },
    shippingAddress: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        postal: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    itemsPrice: { 
        type: Number,
        required: true 
    },
    shippingPrice: {
        type: Number,
        required: true 
    },
    taxPrice: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    deliveredAt: {
        type: Date
    } 
}, { timestamps: true });

const Order = mongoose.models.Orders || mongoose.model('Orders', OrderSchema);

export default Order;