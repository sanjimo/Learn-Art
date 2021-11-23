import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import notfound from '../../utilities/images/notfound.png';

const NotFound = () => {
    return (
        <div className="bg-white m-5">
            <Card className="bg-white text-dark shadow-lg border-0 rounded w-75 mx-auto">
                <Card.Img src={notfound} width="100" height="350" alt="Not found image" />
                <Card.ImgOverlay>
                   <Card.Title className="fs-1 fw-bold text-danger">404</Card.Title>
                   <Card.Title>
                       The requested page cannot be found!
                   </Card.Title>
                   <Card.Text>Go back or return to <NavLink to="/home" className="text-danger fs-5 fw-bold text-decoration-none">Learn Art</NavLink> home page.</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default NotFound;