import React, { Component } from 'react';
import './Beer.css';

export default class Beer extends Component {
    render() {

        const foundBeer = this.props.beers.find(elm => {
            console.log(elm);
            return elm._id === this.props.match.params.beerId
        })

        const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = foundBeer;

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
