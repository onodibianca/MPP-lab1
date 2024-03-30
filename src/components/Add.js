import React, {useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dogs from "./Dogs";
import {v4 as uuid} from "uuid";
import{useNavigate} from 'react-router-dom'

function Add(){
        const[name,setName] = useState('');
        const[age,setAge] = useState(0);
        const[breed,setBreed] = useState('');

        let history = useNavigate();

        const handleSubmit=(e)=>{
            e.preventDefault();

            const ids = uuid();
            let uniqueId = ids.slice(0,8);

            let a = name,
                b=age,
                c=breed;
            Dogs.push({id: uniqueId, Name: a, Age:b,Breed:c});

            history("/")
        }

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className = "mb-3" controlId="forName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e)=> setName(e.target.value)}>

                    </Form.Control>

                </Form.Group>
                <Form.Group className = "mb-3" controlId="forName">
                    <Form.Control type="number" placeholder="Enter Age" required onChange={(e)=> setAge(e.target.value)}>

                    </Form.Control>

                </Form.Group>
                <Form.Group className = "mb-3" controlId="forName">
                    <Form.Control type="text" placeholder="Enter Breed" required onChange={(e)=> setBreed(e.target.value)}>

                    </Form.Control>

                </Form.Group>
                <Button onClick={(e)=>handleSubmit(e)} type="submit">SUBMIT</Button>

            </Form>
        </div>
    )
}

export default Add;