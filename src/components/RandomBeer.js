import React, { Component } from 'react';
import './Beer.css';

export default class RandomBeer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            randomBeer: {}
        }
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => {
                return response.json()
            })
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        randomBeer: result
                    });
                    console.log(result);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state.randomBeer;
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className='single-beer'>
                    <img src={image_url} alt={name} />
                    <h2>{name}</h2>
                    <h4>{tagline}</h4>
                    <p>First brewed: {first_brewed}</p>
                    <p>Attenuation level: {attenuation_level}</p>
                    <p>{description}</p>
                    <p>Contributed by: {contributed_by}</p>
                </div>
            )
        }
    }
}
