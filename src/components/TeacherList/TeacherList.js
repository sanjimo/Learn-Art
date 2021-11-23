import React from 'react';
import { Image, Table } from 'react-bootstrap';

const TeacherList = () => {
    return (
        <div className="container shadow border-0 m-3 p-2 pt-3 mx-auto mb-5">
             <Table striped bordered hover size="sm">
                <thead>
                   <tr>
                      <th>Teacher Photo</th>
                      <th>Teacher Name</th>
                      <th>Designation</th>
                      <th>Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       <td><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjF-X468R8B6LQAGXp8RLpzpnT3wGTVe-Gw&usqp=CA" width="50" height="50" roundedCircle/></td>
                       <td>Alvina</td>
                       <td>Art Teacher</td>
                       <td>alvina@gmail.com</td>
                    </tr>
                    <tr>
                       <td><Image src="https://images.wunderstock.com/Man-Wearing-Green-Polo-Shirt_99kBK7kAuISd_400.jpeg" width="50" height="50" roundedCircle/></td>
                       <td>Jhon</td>
                       <td>Music Teacher</td>
                       <td>jhon@gmail.com</td>
                    </tr>
                    <tr>
                       <td><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwmlnki-Fu34fe95gBQA2jS1wxZ-oFZ9htw&usqp=CAU"
                       width="50" height="50" roundedCircle/></td>
                       <td>Rose</td>
                       <td>Design Teacher</td>
                       <td>rose@gmail.com</td>
                    </tr>
                    <tr>
                       <td><Image src="https://cdn.pixabay.com/photo/2015/09/09/22/04/woman-933684_1280.jpg" width="50" height="50" roundedCircle/></td>
                       <td>Iliyana</td>
                       <td>Dance Teacher</td>
                       <td>iliyana@gmail.com</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default TeacherList;