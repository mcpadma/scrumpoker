import React, {useState,useContext,useEffect} from 'react'
import { Formik, Field, Form } from 'formik';
import { isUuid } from 'uuidv4';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

//import roomNoContext from '../contexts/roomNoContext';
import userListContext from '../contexts/userListContext';


function Header(props) {
    let list = useContext(userListContext)[0]
    useEffect(()=>{
        console.log(list);
        })

const [loginStatus, setLoginStatus] = useState(false);
const [roomNumber, setRoomNumber] = useState("");

const history = useHistory();
    return (
        <div className="row bannerDiv">
            <div className="row roomSearchDiv">
                <Formik
                    initialValues={{ roomNo: '' }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        if (values.roomNo == localStorage.getItem("room number") && isUuid(localStorage.getItem("room number"))) {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            setLoginStatus(true);
                            setRoomNumber(values.roomNo);
                            history.push(`/room/${values.roomNo}`)
                            //history.push('/room/'+values.roomNo)
                            resetForm();
                        }
                        else {
                            alert("Invalid room number")
                            resetForm();
                        }

                    }}

                >
                    {({ isSubmitting }) => (
                        <Form className="roomInput ">
                            <div className="input-group mb-2 mt-2 form-group">
                                <Field type="text" name="roomNo" className="form-control" placeholder="Room Number" aria-label="Room Number" aria-describedby="enterRoom" />
                                <span className="input-group-text form-group enterBtn" id="enterRoom">
                                    <button type="submit" className="btn btn-primary submitRoomNo" disabled={isSubmitting}>{isSubmitting ? "Entering Room..." : "Enter"}</button>
                                </span>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="row headerDiv">
                <div className="header-inner" >
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xl-4">
                            <h4 className="mainHeading">Scrum Poker</h4>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 roomHeading">{props.room}</div>
                        {/* <div className="col-md-4 col-lg-4 col-xl-4">{loginStatus ? `${roomNumber}`: ""}</div> */}
                        {/* <div className="col-md-4 col-lg-4 col-xl-4 roomHeading">{useContext(roomNoContext)[0]}</div> */}
                        <div className="col-md-4 col-lg-4 col-xl-4">{props.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
