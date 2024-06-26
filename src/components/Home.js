import React, {Fragment, useEffect, useState} from "react";
import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dogs from "./Dogs";
import {} from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom'
import InputGroup from 'react-bootstrap/InputGroup';
import {useDogs} from "../api/dogsHandler";

function Home() {

    let history = useNavigate();
    const [selectedDogs, setSelectedDogs] = useState([]);
    const [myDogs] = useDogs();
    const [myBeData, setMyBeData] = useState('');
    let navigate = useNavigate();
    const handleEdit = (id, name, age, breed) => {
        navigate(`/edit`, {state: {id, name, age, breed}});
    };

    // const handleViewDetails = (id, name, age, breed) => {
    //     navigate(`/get`, {state: {id, name, age, breed}});
    // };
    const handleDelete = (id) => {
        // var index = Dogs.map(function (e) {
        //     return e.id
        // }).indexOf(id);
        //
        // Dogs.splice(index, 1);
        //
        // setMyDogs([...Dogs]);
        // history('/');
    }

    // const handleEdit = (id, name, age, breed) => {
    //     localStorage.setItem('Name', name);
    //     localStorage.setItem('Age', age);
    //     localStorage.setItem('Breed', breed);
    //     localStorage.setItem('Id', id);
    // }


    const handleViewDetails = (id, name, age, breed) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
        localStorage.setItem('Breed', breed);
        localStorage.setItem('Id', id);
    }
    // useEffect(() => {
    //     const testBE = async () => {
    //         const response = await fetch('http://localhost:4000/dogs').catch((e) => {
    //             console.log('request failed', e);
    //         });
    //         if (!response) return
    //         const myData = await response.json()
    //        setMyDogs(myData);
    //     }
    //
    //     testBE();
    // }, [])

    const handleSelection = (id) => {
        if (!selectedDogs.includes(id)) {
            setSelectedDogs([...selectedDogs, id])
        } else {
            const filteredSelectedDogs = selectedDogs.filter(dogId => dogId !== id)
            setSelectedDogs(filteredSelectedDogs)
        }
    }

    const myDelete = (value) => {
        const index = Dogs.findIndex(dog => dog.id === value);
        Dogs.splice(index, 1);
    }

    function handleBulkDelete() {
        // for (let i = 0; i < Dogs.length; i++) {
        //     if (selectedDogs.includes(Dogs[i].id)) {
        //         myDelete(Dogs[i].id, Dogs);
        //         i--;
        //     }
        // }
        // setMyDogs([...Dogs])
    }

    return (
        <Fragment>
            <div style={{margin: "10rem"}}>
                {myBeData ? <div> Connected to the BE: {myBeData} </div> :
                    <div>Loading...</div>}
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>
                            Select
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Breed
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {myDogs && myDogs.length > 0
                        ?
                        myDogs.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td><InputGroup className="mb-3">
                                        <InputGroup.Checkbox onClick={() => handleSelection(item.id)}
                                                             aria-label="Checkbox for following text input"/>
                                    </InputGroup>
                                    </td>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        {item.Breed}
                                    </td>
                                    <td>
                                        <Button onClick={() => handleDelete(item.id)}> DELETE</Button>
                                        <Button onClick={() => handleEdit(item.id, item.Name, item.Age, item.Breed)}> EDIT</Button>
                                        <Button onClick={() => handleViewDetails(item.id, item.Name, item.Age, item.Breed)}>VIEW DETAILS</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        <tr>
                            <td>"No data available"</td>
                        </tr>

                    }
                    </tbody>
                </Table>
                <br>

                </br>
                <Button onClick={handleBulkDelete}>Bulk delete</Button>
                <Link className='d-grid gap-2' to="/create">
                    <Button size="lg"> CREATE</Button>
                </Link>
            </div>
        </Fragment>

    )
}

export default Home;
