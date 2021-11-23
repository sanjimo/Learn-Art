import {useState, useEffect} from 'react';

const useCourse = () =>{
    const [course, setCourse] = useState([]);
    useEffect(() => {
      fetch('./course.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    }, [])

    return [course, setCourse];
}

export default useCourse;