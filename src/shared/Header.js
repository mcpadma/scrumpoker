import React from 'react'
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
function Header() {
    
    return (
        <div className="row bannerDiv">
            <div className="row roomSearchDiv">
                <Formik
                    initialValues={{ roomNo: ''}}
                    onSubmit={(values, { setSubmitting, resetForm  }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            resetForm();
                        }, 1000);
                    }}
                   
                >
                    {({ isSubmitting }) => (
                        <Form className="roomInput ">
                            <div class="input-group mb-2 mt-2 form-group">
                                <Field type="number" name="roomNo" className="form-control" placeholder="Room Number" aria-label="Room Number" aria-describedby="enterRoom" />
                                <span className="input-group-text form-group enterBtn" id="enterRoom">
                                <button type="submit" className="btn btn-primary submitRoomNo" disabled={isSubmitting}>{isSubmitting ? "Entering Room..." : "Enter"}</button>
                                </span>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className = "row headerDiv">
                <div className="header-inner" >
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xl-4">
                            <h4 className="mainHeading">Scrum Poker</h4>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4"></div>
                        <div className="col-md-4 col-lg-4 col-xl-4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
