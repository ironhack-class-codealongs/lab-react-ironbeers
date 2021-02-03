import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './NewBeer.css'

export default class NewBeer extends Component {
    constructor(props){
        super(props)
        this.state = {
            name :"",
            tagline:"",
            description:"",
            first_brewed:"",
            brewers_tips:"",
            attenuation_level:0,
            contributed_by:""
        }
    }

    handleChange = (e) =>{

    }


    render() {
        return (
            <div className='container mt-5'>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name'/>
                    </Form.Group>

                    <Form.Group controlId="formTagline">
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control type="text" name='tagline'/>
                    </Form.Group>

                    <Form.Group controlId="formControlDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} name='description'/>
                    </Form.Group>

                    <Form.Group controlId="formFirstBrewed">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control type="text" name='first_brewed'/>
                    </Form.Group>
                    
                    <Form.Group controlId="formBrewersTips">
                        <Form.Label>Brewers Tips</Form.Label>
                        <Form.Control type="text" name='brewers_tips'/>
                    </Form.Group>

                    <Form.Group controlId="formBrewersTips">
                        <Form.Label>Attenuation Level</Form.Label>
                        <Form.Control type="number" name='attenuation_level'/>
                    </Form.Group>

                    <Form.Group controlId="formContributedBy">
                        <Form.Label>Contributed By</Form.Label>
                        <Form.Control type="text" name='contribute_by'/>
                    </Form.Group>
                    
                    <div className='text-center'>
                        <Button  variant="primary" type="submit" size="lg">
                            Submit
                        </Button>
                    </div>
                    
                </Form>
            </div>
        )
    }
}
