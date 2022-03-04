import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    counts: {
        type: Number,
        required: true
    },
    reviews: {
        type: Number,
        required: true
    }
}, { timestamps: true});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;