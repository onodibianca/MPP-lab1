// Details.js
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Details() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [breed, setBreed] = useState('');

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setBreed(localStorage.getItem('Breed'))
    }, []);

    return (

        <div style={{ margin: "10rem" }}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Age: {age}</Card.Subtitle>
                    <Card.Text>
                        Breed: {breed}
                    </Card.Text>
                    <Link to="/">
                        <Button variant="primary">Go Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Details;
