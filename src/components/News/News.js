import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Col, Image } from 'react-bootstrap';

const News = (props) => {
    const {title,deadline,discount,img} = props.n;
    return (
        <div>
            <Col className="m-4">
              <Card className="shadow-lg border border-rounded center" style={{ height:350}}>
                  <Image src={img} rounded height="150"/>
                  <Card.Body>
                      <Card.Title className="text-danger fw-bold">{title}</Card.Title>
                      <Card.Text className="fw-bold fs-4 fst-italic"><span className="text-danger">{discount}</span> OFF</Card.Text>
                      <Card.Text className="text-dark fs-6"><span className="text-danger fw-bold">Deadline </span>: {deadline}</Card.Text>
                      <NavLink
                        to='/courses' type="button"
                        className="text-decoration-none text-white fs-6 fw-bold btn btn-danger btn-outline-danger p-2"
                      >Visit Courses</NavLink>
                  </Card.Body>
              </Card>
            </Col>
        </div>
    );
};

export default News;