const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true,
        
    },
    confirmpassword: {
        type: String,
        required: true,
        
    }
})

const Sing = mongoose.model('Sign', productSchema);

module.exports = Sing;