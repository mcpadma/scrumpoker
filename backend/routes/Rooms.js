const router = require('express').Router();
let Room = require('../models/rooms.model');

var uuid = require('uuid');

router.route('/').get((req, res) => {
    Room.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/create').post((req, res) => {
    let roomNo = uuid.v4();
    const createdBy = req.body.createdBy;
    const newRoom = new Room({ roomNo, createdBy });
    newRoom.save()
        .then(() => res.json("Room Created Successfully!"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:roomNo').get((req, res) => {
    let roomNo = req.params.roomNo;
    Room.find({ roomNo: roomNo })
        .then(room => {
            let roomValue = room
            if (roomValue.length > 0) {
                res.json(roomValue)
            }
            res.send("Room number not found")
        }
        )
        .catch(err => res.status(400).json("Error: " + err));
});


module.exports = router;