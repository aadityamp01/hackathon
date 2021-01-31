const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userid: {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    },
    products: [
        {
            product: { type: Object, required: true },
            quantity: { type: Number, required: true }

        }
    ]
});

module.exports=mongoose.model('Order',OrderSchema);