const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const participantSchema = new Schema({
    roomNo: { type: String, sparse: true},
    createdBy: {type: String, required: true},
    //participantName: { type: String, unique: true }
    participantName: {type: Array, 
        default:[{
        pname: {type: String},
        storyPt: {type: Number}
    }]
}

},{
    timestamps: true,
})

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;