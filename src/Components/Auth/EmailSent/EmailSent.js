import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import EmailSentImage from '../../../Images/instructions.jpg';

const EmailSent = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">
                    <div className="w-75">
                        <div className="text-center">
                            <h4 className='bold mb-5'>Check Your Email</h4>    
                            <p className='text-muted mt-2'>
                                <small>We have sent a password recover instructions to your email. Did not receive the email? Check your spam filter also.</small>
                            </p>
                        </div>    
                        <div className="d-grid mt-4">
                            <button type="submit" className="btn btn-primary btn-lg rounded-0">
                                <Link to="/" className='text-decoration-none text-white'>
                                    <small>Back to Login Page</small>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={EmailSentImage} alt="Instructions" className='img-fluid' />
                </div>
            </div>
        </div>
    );
};

export default EmailSent;