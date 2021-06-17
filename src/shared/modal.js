import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { uuid } from 'uuidv4';
import '../App.css';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function ModalComponent() {
    const [modalShow, setShow] = useState(false);
    const [createdBy, setCreatedBy] = useState("");
    const [roomCreated, setRoomCreated] = useState("");
    const history = useHistory();

    const openModal = () => {
        //let roomNo = uuid();
        //setRoomNo(roomNo);
        setShow(true);
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        //   .then(res => {
        //     console.log(res)
        //   })

        // setRoomCreated(roomNo);
        // console.log(roomNo);
        // alert(roomNo);
        // localStorage.setItem("room number", roomNo);

    }
    const inputHandler = (e) =>{
        console.log(e.target.value)
        setCreatedBy(e.target.value);
    }
    const createRoomHandler = () => {
        let url = "http://localhost:5000/room/create";
        let postdata = {
            "createdBy":createdBy
        }
        axios.post(url, postdata)
      .then(res => {
        console.log(res)
        history.push(`/room/${res.data.roomNo}/scrum/${res.data.userName}`);
      })
      .catch(err => console.log(err))
    }
    const cancelHandler = () =>{
        setShow(!modalShow);
    }
    return (
        <div>
            <Button className="btn btn-primary createRoom" onClick={openModal}>CREATE INSTANT ROOM</Button>{" "}
            <Modal className="modalStyle"
                size="md"
                show={modalShow}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header className="modalHeader">
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Create your Room
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    <p>
                        Set-up in seconds. Use the instant room feature or sign-up to keep the same room number for future plannings - making the set-up even faster. All we need is a display name.
                    </p>
                    <div className="modalInputContainer">
                        <input type="text" className="modalInput" onChange={inputHandler} placeholder="Display Name *"/>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button className=" createRoom" onClick={cancelHandler}>CANCEL</Button>
                    <Button className=" createRoom" onClick={createRoomHandler}>CREATE ROOM</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
