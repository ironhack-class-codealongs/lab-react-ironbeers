import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AllBeers.css';

export default class AllBeers extends Component {

    render() {
        const beersList = this.props.beers.map(beer => {
            return (
                <div key={beer._id} className='beer-item'>
                    <img src={beer.image_url} alt={beer.name} />
                    <div>
                        <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                        <p>{beer.tagline}</p>
                        <p>Contributed by: {beer.contributed_by}</p>
                    </div>
                </div>
            )
        })

        return (
            <div>
                {beersList}
            </div>
        )
    }
}
