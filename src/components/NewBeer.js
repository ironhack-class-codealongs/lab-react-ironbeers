import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
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
            contributed_by:"",
            isSuccesful:false,
            message:'',
        }
    }

    handleChange = (e) =>{
        const target = e.target
        const name = target.name
        const val = target.value

        this.setState({
            [name]:val
        }, console.log(name, val))
    }

    submitForm =(e) =>{
        e.preventDefault()
        const newBeer = {
            name :this.state.name,
            tagline:this.state.tagline,
            description:this.state.description,
            first_brewed:this.state.first_brewed,
            brewers_tips:this.state.brewers_tips,
            attenuation_level:this.state.attenuation_level,
            contributed_by:this.state.contributed_by,
        }
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
             .then(
                    (response)=>{
                        console.log(response)
                        this.setState({
                                name :"",
                                tagline:"",
                                description:"",
                                first_brewed:"",
                                brewers_tips:"",
                                attenuation_level:0,
                                contributed_by:"",
                                isSuccesful:true,
                                message: 'You have successful saved your beer!'
                        })
                    },
                    (error)=>{
                        console.log(error.toString())
                        this.setState({isSuccesful: false, message:error.toString()})
                    }
                )
        
    }


    render() {
        return (
            <div className='container mt-5'>
                { this.state.isSuccesful && this.state.message !== '' 
                    ?
                        <Card bg='success' text='white' className="mb-2">
                            <Card.Header className='text-center'>SUCCESS</Card.Header>
                            <Card.Body>
                            <Card.Title>Beer Saved </Card.Title>
                            <Card.Text>
                                {this.state.message}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    : ''
                }
                { !this.state.isSuccesful && this.state.message !== '' 
                    ?
                        <Card bg='danger' text='white' className="mb-2">
                            <Card.Header className='text-center'>ERROR</Card.Header>
                            <Card.Body>
                            <Card.Title>There was a problem Saving the new Beer! </Card.Title>
                            <Card.Text>
                                {this.state.message}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    : ''
                }
                
                
                <Form onSubmit={this.submitForm}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name'onChange={this.handleChange} value={this.state.name}/>
                    </Form.Group>

                    <Form.Group controlId="formTagline">
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control type="text" name='tagline'onChange={this.handleChange} value={this.state.tagline}/>
                    </Form.Group>

                    <Form.Group controlId="formControlDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} name='description'onChange={this.handleChange} value={this.state.description}/>
                    </Form.Group>

                    <Form.Group controlId="formFirstBrewed">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control type="text" name='first_brewed'onChange={this.handleChange} value={this.state.first_brewed}/>
                    </Form.Group>
                    
                    <Form.Group controlId="formBrewersTips">
                        <Form.Label>Brewers Tips</Form.Label>
                        <Form.Control type="text" name='brewers_tips'onChange={this.handleChange} value={this.state.brewers_tips}/>
                    </Form.Group>

                    <Form.Group controlId="formBrewersTips">
                        <Form.Label>Attenuation Level</Form.Label>
                        <Form.Control type="number" name='attenuation_level'onChange={this.handleChange} value={this.state.attenuation_level}/>
                    </Form.Group>

                    <Form.Group controlId="formContributedBy">
                        <Form.Label>Contributed By</Form.Label>
                        <Form.Control type="text" name='contributed_by' onChange={this.handleChange} value={this.state.contributed_by}/>
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
