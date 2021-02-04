import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AllBeers.css';

export default class AllBeers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            beers: this.props.beers
        }
    }

    handleInput = e => {
        this.setState({
            search: e.target.value
        })
        fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
        .then(response => {
            return response.json()
        })
        .then(result => {
            this.setState({
                beers: result
            })
        })
    }

    render() {
        const beersList = this.state.beers.map(beer => {
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
            <React.Fragment>
                <input type='text' name='search' value={this.state.search} onChange={this.handleInput} />
                <div>
                    {beersList}
                </div>
            </React.Fragment>
        )
    }
}
