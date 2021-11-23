import React from 'react';
import { Row } from 'react-bootstrap';
import useCourse from '../../hooks/useCourse';
import useTeachers from '../../hooks/useTeachers';
import Banner from '../Banner/Banner';
import DedicatedTeachers from '../DedicatedTeachers/DedicatedTeachers';
import ViewHomeCourse from '../ViewHomeCourse/ViewHomeCourse';

const Home = () => {
    const [course] = useCourse();
    const [teachers] = useTeachers();
    return (
        <div className="mb-3">
            <div>
                <Banner></Banner>
            </div>
            <div>
                <h2 className="text-danger fw-bold text-center p-3" style={{textShadow: "2px 2px 2px #000000"}}>Our Courses</h2>
                <Row xs={1} sm={2} md={4} className="g-1">
                    {
                        course.map(c=><ViewHomeCourse key={c.id} c={c}></ViewHomeCourse>)
                    }
                </Row>
            </div>
            <div>
                <h2 className="text-danger fw-bold text-center p-5 " style={{textShadow: "2px 2px 2px #000000"}}>Our Dedicated Teachers</h2>
                <Row xs={1} md={2} lg={4} className="g-1">
                    {
                        teachers.map(teacher=><DedicatedTeachers key={teacher.id} teacher={teacher}></DedicatedTeachers>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;