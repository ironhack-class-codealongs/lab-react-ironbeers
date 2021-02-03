import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import './BeerDetails.css'



export default class Beer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedBeer: {}
        }
    }

    componentDidMount(){
        const beerId = this.props.match.params.id
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
             .then(
                    (results)=>{
                        this.setState({
                            selectedBeer: results.data,
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
    
    


    render(){
        return (
            <div className='container'>
                <Row className='mt-5'>
                    <Col key={this.state.selectedBeer._id} className='col-sm-12 col-lg-12 mb-3'>
                        <Card >
                            <Card.Img className='mx-auto mt-3' variant="top" src={this.state.selectedBeer.image_url}/>
                            <Card.Body>
                                <Row className='mb-5'>
                                    <Col className='col-8'>
                                        <Card.Title >
                                            {this.state.selectedBeer.name}
                                            </Card.Title>
                                        <Card.Text>
                                            {this.state.selectedBeer.tagline}
                                        </Card.Text>
                                    </Col>
                                    <Col className='col-4'>
                                        <Card.Text className='text-right large-grey'>
                                            {this.state.selectedBeer.attenuation_level}
                                        </Card.Text>
                                        <Card.Text className='text-right bold'>
                                            {this.state.selectedBeer.first_brewed}
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='col-12'>
                                        <Card.Text>
                                            {this.state.selectedBeer.description}
                                        </Card.Text>
                                        <Card.Text className='muted'>
                                            {this.state.selectedBeer.contributed_by}
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
