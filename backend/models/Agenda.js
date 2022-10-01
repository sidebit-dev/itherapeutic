const mongoose = require('mongoose');
const {Schema} = mongoose;

const agendaSchema = new Schema({
    dataDisponivel: Date,
    userId: mongoose.ObjectId,
    horaId: mongoose.ObjectId,
},
{
    timestamps: true,
}
);

const Agenda = mongoose.model('Agenda', agendaSchema);

module.exports = Agenda;