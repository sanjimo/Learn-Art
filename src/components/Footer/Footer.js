import React from 'react';
import logo from '../../utilities/images/logo.png';

const Footer = () => {
    return (
        <div className="mb-0 pt-2 bg-danger text-white w-100">
            <div className="pb-2 pt-2 row mx-auto mb-0">
               <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                    <h4 className="fw-bold">Learn Art</h4>
                    <img src={logo} width="35" alt="logo" />
                    <h6>Dhaka, Bangladesh</h6>
                    <h6>Contact No. 01912345678</h6>
                    <h6>E-mail : learn_art@gmail.com</h6>
                    <div className="d-flex inline pt-2 ps-2 justify-content-center">
                        <i className="fab fa-twitter ps-4 pe-2"></i>
                        <i className="fab fa-youtube ps-2 pe-2"></i>
                        <i className="fab fa-linkedin-in ps-2 pe-2"></i>
                        <i className="fab fa-github ps-2"></i>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                    <h4>Our Courses</h4>
                    <h6>Painting</h6>
                    <h6>Visual Art</h6>
                    <h6>Handwriting</h6>
                    <h6>Music</h6>
                    <h6>Theater & Dance</h6>
                </div>
            </div>
            <div className="mt-0">
                <small>Copyright <i className="far fa-copyright"></i> by Learn Art 2021.</small>
            </div>
        </div>
    );
};

export default Footer;