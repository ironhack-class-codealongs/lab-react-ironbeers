import React, { Component } from 'react';
import './NewBeer.css';

export default class NewBeer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: '',
        }
    }

    handleInputChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name: this.state.name,
                    tagline: this.state.tagline,
                    description: this.state.description,
                    first_brewed: this.state.first_brewed,
                    brewers_tips: this.state.brewers_tips,
                    attenuation_level: this.state.attenuation_level,
                    contributed_by: this.state.contributed_by
                })
        })
        .then(() => {
            this.props.getData();
        })
        .then(() => {
            this.props.history.push('/beers');
        })
    }

    render() {
            return (
                <form action={this.props.action} method={this.props.method} onSubmit={this.handleSubmit} className='new-beer'>
                    <label>Name</label>
                    <input type='text' value={this.state.name} name='name' onChange={this.handleInputChange} />
                    <label>Tagline</label>
                    <input type='text' value={this.state.tagline} name='tagline' onChange={this.handleInputChange} />
                    <label>Description</label>
                    <textarea type='text' value={this.state.description} name='description' onChange={this.handleInputChange}></textarea>
                    <label>First brewed</label>
                    <input type='text' value={this.state.first_brewed} name='first_brewed' onChange={this.handleInputChange} />
                    <label>Brewers tips</label>
                    <input type='text' value={this.state.brewers_tips} name='brewers_tips' onChange={this.handleInputChange} />
                    <label>Attenuation level</label>
                    <input type='number' value={this.state.attenuation_level} name='attenuation_level' onChange={this.handleInputChange} />
                    <label>Contributed  by</label>
                    <input type='text' value={this.state.contributed_by} name='contributed_by' onChange={this.handleInputChange} />
                    <button type='submit'>Create</button>
                </form>
            )
    }
}

NewBeer.defaultProps = {
    action: 'https://ih-beers-api2.herokuapp.com/beers/new',
    method: 'POST'
};