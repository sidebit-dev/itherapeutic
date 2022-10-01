const mongoose = require('mongoose');
const {Schema} = mongoose;

const userShema = new Schema({
    name: String,
    email: String,
    password: String,
    ativo: Boolean,
},
{
    timestamps: true,
}
);

const User = mongoose.model('User', userShema);

module.exports = User;