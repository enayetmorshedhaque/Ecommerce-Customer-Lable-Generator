import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import NewPasswordImage from '../../../Images/new-password.jpg';

const NewPassword = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <img src={NewPasswordImage} alt="New Password" className='img-fluid' />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">
                    <div className="w-75">
                        <div className="text-start">
                            <h4 className='bold'>Create New Password</h4>
                            <p className='text-muted mt-2 mb-4'>
                                <small>You new password must be different from previous used passwords.</small>
                            </p>   
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-0" id="floatingInput" placeholder="name@example.com"/>
                                    <label htmlFor="floatingInput">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-0" id="floatingPassword" placeholder="12345678"/>
                                    <label htmlFor="floatingPassword" className="form-label">Confirm Password</label>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg rounded-0">
                                        <small>Reset Password</small>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPassword;