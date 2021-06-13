const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const participantSchema = new Schema({
    roomNo: { type: String, unique: true },
    createdBy: {type: String, required: true, unique:true},
    users: { type: Array, "default": []}

},{
    timestamps: true,
})

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;