import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import ViewCourses from '../ViewCourses/ViewCourses';

const Courses = () => {
    const [courses] = useCourses();

    return (
        <div className="bg-white mb-3">
            <h2 className="text-danger fw-bold pt-3 pb-3" style={{textShadow:"2px 2px 2px #000000"}}>Recent Courses</h2>
            <Row xs={1} sm={1} md={2} lg={4} className="g-2">
                {
                    courses.map(course=><ViewCourses key={course.id} course={course}></ViewCourses>)
                }
            </Row>
        </div>
    );
};

export default Courses;