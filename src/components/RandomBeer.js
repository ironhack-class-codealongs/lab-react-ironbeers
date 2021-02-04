import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import './RandomBeer.css'



export default class RandomBeer extends Component {
    constructor(props){
        super(props)
        this.state={
            randomBeer:{},
            isLoaded: false
        }
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
             .then(
                    (results)=>{
                        console.log(results)
                        this.setState({
                            randomBeer: results.data,
                            isLoaded: true
                        })
                    },
                    (error)=>{
                        this.setState({
                            error
                        })
                        console.log(error)
                    }
                )
    }


    render() {
        const randomBeer = <Row className='mt-5'>
                            <Col key={this.state.randomBeer._id} className='col-sm-12 col-lg-12 mb-3'>
                                <Card >
                                    <Card.Img className='mx-auto mt-3' variant="top" src={this.state.randomBeer.image_url}/>
                                    <Card.Body>
                                        <Row className='mb-5'>
                                            <Col className='col-8'>
                                                <Card.Title >
                                                    {this.state.randomBeer.name}
                                                    </Card.Title>
                                                <Card.Text>
                                                    {this.state.randomBeer.tagline}
                                                </Card.Text>
                                            </Col>
                                            <Col className='col-4'>
                                                <Card.Text className='text-right large-grey'>
                                                    {this.state.randomBeer.attenuation_level}
                                                </Card.Text>
                                                <Card.Text className='text-right bold'>
                                                    {this.state.randomBeer.first_brewed}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='col-12'>
                                                <Card.Text>
                                                    {this.state.randomBeer.description}
                                                </Card.Text>
                                                <Card.Text className='muted'>
                                                    {this.state.randomBeer.contributed_by}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
        return (
            <div className='container'>
                {this.state.isLoaded ? randomBeer : "Loading...."}
            </div>
        )
    }
}
