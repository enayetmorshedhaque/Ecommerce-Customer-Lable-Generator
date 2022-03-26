import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import ForgotPasswordImage from '../../../Images/forgot-password.jpg';

const ForgotPassword = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <img src={ForgotPasswordImage} alt="Forgot Password" className='img-fluid' />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">
                    <div className="w-75">
                        <div className="text-start">
                            <h4 className='bold'>Forgot Password?</h4>
                            <p className="mb-5">
                                <small className='text-muted'>Enter the email associated with your account and we' we'll send an email with instructions to reset your password.</small>    
                            </p>
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-0" id="floatingInput" placeholder="name@example.com"/>
                                    <label htmlFor="floatingInput">Enter Your Email</label>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg rounded-0">
                                        <Link to="/instruction-sent" className='text-decoration-none text-white'>
                                            <small>Send Instructions</small>
                                        </Link>
                                    </button>
                                </div>
                            </form>

                            <div className="text-center mt-3">Already have an Account? &nbsp;
                                <Link to="/" className="text-decoration-none text-danger">
                                    Login Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;