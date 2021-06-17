const router = require('express').Router();
let Participant = require('../models/participants.model');

var uuid = require('uuid');

router.route('/').get((req, res) => {
    Participant.find()
        .then(participants => res.json(participants))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/create').post((req, res) => {
    const roomNo = req.body.roomNo;
    const createdBy = req.body.createdBy;
    let participantName = {};
    participantName.pname = req.body.pname;
    participantName.storyPt = req.body.storyPt;
    console.log(participantName);
    Participant.find({ roomNo: roomNo }).then(participantRoom => {
        let partValue = participantRoom;
        if (partValue.length > 0) {
            participantRoom.roomNo = req.body.roomNo;
            participantRoom.createdBy = req.body.createdBy;
            participantRoom.participantName.push(participantName)
            console.log(participantRoom)
             //participantRoom.save({"roomNO": roomNo},{"$push":{"participantName": participantName}})
              participantRoom.save()
             .then(() => res.json("Participant added Successfully!"))
             .catch(err => res.status(400).json("Errors: "+err));

        }
        else {
            const newParticipant = new Participant({ roomNo, createdBy, participantName });
            newParticipant.save()
                .then(() => res.json("Participant added Successfully!"))
                .catch(err => res.status(400).json("Error: " + err));
        }

    })
    //const participantName = req.body.participantName;

});

// router.route('/:roomNo').get((req, res) => {
//     let roomNo = req.params.roomNo;
//     Room.find({ roomNo: roomNo })
//         .then(room => {
//             let roomValue = room
//             if (roomValue.length > 0) {
//                 res.json(roomValue)
//             }
//             res.send("Room number not found")
//         }
//         )
//         .catch(err => res.status(400).json("Error: " + err));
// });


module.exports = router;