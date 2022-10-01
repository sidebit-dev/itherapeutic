const mongoose = require('mongoose');
const {Schema} = mongoose;

const horaSchema = new Schema({
    hora: String,
},
{
    timestamps: true,
}
);

const Agenda = mongoose.model('Hora', horaSchema);

module.exports = Hora;