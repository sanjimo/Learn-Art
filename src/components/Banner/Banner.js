import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import image1 from '../../utilities/images/logo.png';

const Banner = () => {
    return (
        <div className="shadow-lg p-2 m-3 border border-0 border-rounded center mb-3">
            <Row className="d-flex justify-content-around">
                <Col xs={12} md={8} className="mt-5">
                   <h1 className="text-danger fw-bold" style={{textShadow:"2px 2px 2px #000000"}}>Welcome to Learn Art</h1>
                   <h5>We Offer Different Kinds of Courses for Different kinds of Age Group.</h5><br/>
                   <NavLink
                   to='/academics' type="button"
                   className="text-decoration-none text-white fs-6 fw-bold btn btn-danger btn-outline-danger m-1"
                   >Visit Academics</NavLink>
                </Col>
                <Col xs={12} md={4}>
                   <Image width="200" src={image1}></Image>
                </Col>
            </Row>
        </div>
    )
};

export default Banner;