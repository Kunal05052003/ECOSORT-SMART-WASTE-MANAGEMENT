const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    typeofwaste: {
        type: String,
        required: true
    },
    qty:{
        type:Number,
        required:true
    },
    qotation: {
        type: Number,
        required: true,
        
    },

    query: {
        type:String,
        required: true,
        
    },
    image:{
        type:String,
        required:true,
    }
})

const Sell = mongoose.model('Sell', productSchema);

module.exports = Sell;