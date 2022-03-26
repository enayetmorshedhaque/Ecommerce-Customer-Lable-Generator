import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

import RegistrationImage from '../../../Images/sign-up.jpg'

const Registration = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">
                        <div className="w-75">
                            <div className="text-start">
                                <h4 className='bold mb-5'>Create Account and Start</h4>    
                                <form>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control rounded-0" id="floatingInput" placeholder="name@example.com"/>
                                        <label htmlFor="floatingInput">Enter Your Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control rounded-0" id="floatingPassword" placeholder="12345678"/>
                                        <label htmlFor="floatingPassword" className="form-label">Enter Your Password</label>
                                    </div>
                                    <div className="d-flex mb-5 align-items-center">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                        </div>
                                        <span className="ms-auto">
                                            <a href="forgot-password.html"
                                                className="text-decoration-none text-danger">Forgot Password?</a>
                                        </span>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary btn-lg rounded-0">
                                            <small>Sign In</small>
                                        </button>
                                    </div>
                                </form>
                                <span className="d-block my-3 text-muted text-center">
                                    Or sign up with social media
                                </span>
                                <hr/>
                                <div className="social-sign-up-section d-grid">
                                    <div className="d-flex justify-content-center gap-lg-3 gap-sm-3">
                                        {/* <NavLink to='/' className="text-decoration-none text-dark">
                                            <div className="social-login google">
                                                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                                            </div>
                                        </NavLink>
                                        <NavLink to='/' className="text-decoration-none text-dark">
                                            <div className="social-login facebook">
                                                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                                            </div>
                                        </NavLink>
                                        <NavLink to='/' className="text-decoration-none text-dark">
                                            <div className="social-login twitter">
                                                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                            </div>
                                        </NavLink> */}
                                    </div>
                                </div>

                                <div className="text-center mt-3">No Account? <NavLink to="/registration"
                                        className="text-decoration-none text-danger">Create Now</NavLink></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={RegistrationImage} alt="Registration" className='img-fluid' />
                    </div>
                </div>
        </div>
    );
};

export default Registration;