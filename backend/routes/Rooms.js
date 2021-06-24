const router = require('express').Router();
let Room = require('../models/rooms.model');

var uuid = require('uuid');

router.route('/').get((req, res) => {
    Room.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/create').post((req, res) => {
    //let roomNo = uuid.v4();
    let roomNo = Math.floor(100000 + Math.random() * 900000)
    const createdBy = req.body.createdBy;
    const newRoom = new Room({ roomNo, createdBy });
    newRoom.save()
        .then(() => {
            res.send({message:"Room created successfully!", roomNo: roomNo, userName:req.body.createdBy });
        })
        
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:roomNo').get((req, res) => {
    let roomNo = req.params.roomNo;
    Room.find({ roomNo: roomNo })
        .then(room => {
            let roomValue = room
            if (roomValue.length > 0) {
                res.json({message:"Room found successfully!", roomdata: roomValue})
            }
            res.json({message:"Room not found ", roomdata: []})
        }
        )
        .catch(err => res.status(400).json("Error: " + err));
});


module.exports = router;