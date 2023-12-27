const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    typeofwaste: {
        type: String,
        required: true
    },
    qty:{
        type:String,
        required:true
    },
    qotation: {
        type: String,
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

const Buy = mongoose.model('Buy', productSchema);

module.exports = Buy;