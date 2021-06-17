const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomNo: { type: Number },
    createdBy: {type: String, required: true, unique:true},
    isValidRoom: { type: Boolean}

},{
    timestamps: true,
})

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;