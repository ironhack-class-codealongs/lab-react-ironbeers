import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import './AllBeers.css'

export default class AllBeers extends Component {

    constructor(props){
        super(props)
        this.state = {
            error: '',
            isLoaded: false,
            allBeers:[]
        }
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
             .then(
                    (results)=>{
                        this.setState({
                            allBeers: results.data,
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
        const beers = this.state.allBeers.map(beer => {
            return(
                    <Link to={`/${beer._id}`} key={beer._id} className='text-center'>
                        <Card style={{maxWidth:'14.5rem', minWidth: '14.5rem',maxHeight: '400px', minHeight: '400px'}}  className='mb-2'>
                            <Card.Img variant="top" src={beer.image_url} className='mx-auto mt-5'/>
                            <Card.Body>
                                <Card.Title className='text-center'>{beer.name}</Card.Title>
                                <Card.Text className='text-center'>
                                    {beer.tagline}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
            )
        })
        return (
            <div className='container'>
                <CardDeck>
                    {this.state.isLoaded ? beers : "Loading...."}
                </CardDeck>
            </div>
        )
    }
}
