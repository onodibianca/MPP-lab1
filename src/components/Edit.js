import React, {useEffect, useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dogs from "./Dogs";
import {v4 as uuid} from "uuid";
import{Link,useNavigate} from 'react-router-dom'

function Edit(){
    const[name,setName] = useState('');
    const[age,setAge] = useState(0);
    const[id,setId] = useState('');
    const[breed,setBreed] = useState('');

    let history = useNavigate();

    var index = Dogs.map(function(e){
        return e.id
    }).indexOf(id);

    const handleUpdate=(e)=>{
        e.preventDefault();

        let a = Dogs[index];
        a.Name=name;
        a.Age=age;
        a.Breed=breed;

        history("/")
    }

    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setBreed(localStorage.getItem('Breed'))
        setId(localStorage.getItem('Id'))

    },[])

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className = "mb-3" controlId="forName">
                    <Form.Control type="text" placeholder="Enter Name" value ={name} required onChange={(e)=> setName(e.target.value)}>

                    </Form.Control>

                </Form.Group>
                <Form.Group className = "mb-3" controlId="forName">
                    <Form.Control type="number" placeholder="Enter Age" value={age} required onChange={(e)=> setAge(e.target.value)}>

                    </Form.Control>

                </Form.Group>
                <Form.Group className = "mb-3" controlId="forName">
                    <Form.Control type="text" placeholder="Enter Breed" value ={breed} required onChange={(e)=> setBreed(e.target.value)}>

                    </Form.Control>

                </Form.Group>
                <Button onClick={(e)=>handleUpdate(e)} type="update">UPDATE</Button>

            </Form>
        </div>
    )

}

export default Edit;