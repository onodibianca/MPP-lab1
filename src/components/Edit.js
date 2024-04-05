import React, {useEffect, useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dogs from "./Dogs";
import {v4 as uuid} from "uuid";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useDog, useDogs} from "../api/dogsHandler";

function Edit(props){
    const {state} = useLocation();
    const[name,setName] = useState(state.name);
    const[age,setAge] = useState(state.age);
    const[id,setId] = useState(state.id);
    const[breed,setBreed] = useState(state.breed);
    const [dog] = useDog(state?.id);
    let history = useNavigate();
    console.log(state);


    const handleUpdate=(e)=>{
        e.preventDefault();

        console.log("update")
        history("/")
    }


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