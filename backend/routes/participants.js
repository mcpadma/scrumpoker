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
    // let user ={};
    // user['username'] = req.body.users[username];
    // user['storyPoint'] = req.body.users[storyPoint];
    const users = req.body.users;
    const newParticipant = new Participant({ roomNo, createdBy, users});
    newParticipant.save()
        .then(() => res.json("Participant added Successfully!"))
        .catch(err => res.status(400).json("Error: " + err));
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