import React from 'react';
import { Row } from 'react-bootstrap';
import useNews from '../../hooks/useNews';
import News from '../News/News';
import TeacherList from '../TeacherList/TeacherList';

const Academics = () => {
    const [news] = useNews();
    return (
        <div>
            <div className="mb-4">
               <h2 className="text-danger fw-bold pt-5 pb-2" style={{textShadow:"2px 2px 2px #000000"}}>Learn Art News</h2>
               <Row xs={1} md={2} lg={4} className="g-4">
               {
                   news.map(n=><News key={n.id} n={n}></News>)
               }
               </Row>
            </div>
            <div className="m-4">
               <h2 className="text-danger fw-bold pt-5 pb-2" style={{textShadow:"2px 2px 2px #000000"}}>Teachers List</h2>
               <TeacherList></TeacherList>
            </div>
        </div>
    );
};

export default Academics;