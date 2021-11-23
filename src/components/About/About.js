import React from 'react';
import { Card, Image} from 'react-bootstrap';
import image from '../../utilities/images/icon.jpg';

const About = () => {
    return (
        <div className="w-50 mx-auto mt-5 mb-5 vh-100">
            <Card className="shadow-lg border border-2 border-danger rounded">
                <Card.Body className="d-flex row">
                    <div className="col-sm-12 col-md-12 col-lg-8">
                       <Image src={image} rounded width="400" height="250" fluid />
                    </div>
                    <div className="mt-1 ps-4 mx-auto col-sm-12 col-md-12 col-lg-4">
                    <Card.Title className="text-danger fw-bold fs-4 pb-2">Learn Art</Card.Title>
                    <Card.Subtitle className="text-secondary fw-bold fst-italic">'<span className="text-danger">Learn Art</span>' is an online based institute. Where any gender, any age group people can enrolled their selves! We are providing Painting, Visual Art's, Music, Theater, Dance, Fashion design, Graphics design, Interior design and many more courses via online.</Card.Subtitle>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;