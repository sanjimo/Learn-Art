import {useState, useEffect} from 'react';

const useTeachers = () =>{
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
      fetch('./teachers.json')
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    }, [])

    return [teachers, setTeachers];
}

export default useTeachers;