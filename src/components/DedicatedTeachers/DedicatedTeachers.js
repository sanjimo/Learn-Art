import React from 'react';
import Button from '@restart/ui/esm/Button';
import { Card, Col, Image } from 'react-bootstrap';

const DedicatedTeachers = (props) => {
    const {name,designation,img} = props.teacher;
    return (
        <div className="mt-3 mb-5">
            <Col className="m-4">
               <Card className="shadow-lg p-4 m-2 border-0">
                   <Image variant="top" src={img} height="220" rounded/>
                   <Card.Body>
                       <Card.Title className="text-danger fw-bold fs-4">{name}</Card.Title>
                       <Card.Text className="fw-bold"><i className="text-danger fas fa-graduation-cap"></i>  {designation}</Card.Text>
                       <Button type="button" className="btn btn-danger btn-outlined-danger text-white fs-6 fw-bold">Contact</Button>
                   </Card.Body>
               </Card>
            </Col>
        </div>
    );
};

export default DedicatedTeachers;