import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default function Beer(props) {
    return (
        <div>
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image_url}/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                    {props.tagline}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
