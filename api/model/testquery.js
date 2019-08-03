const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    phone: {
        type: String
    },
    email:{
        type:String
    }
},
);
module.exports = mongoose.model('User', user); 