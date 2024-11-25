const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true      
    },
    email: {
        type: String,
        required: true,
        unique: true,   
        trim: true,
        lowercase: true, 
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'] 
    },
    role: {
       type: String,
       enum: ['user', 'admin', 'moderator'],
        default:'user'
    },
    password: {
        type: String,
        required: true,
        minlength: 6     
    }
}, {
    timestamps: true 
});



const User = mongoose.model('User', userSchema);

module.exports = User;
