import React, { Component } from 'react'

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
            contributed_by: ''
        }
    }

    handleInputChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <label>Name</label>
                <input type='text' value={this.state.name} name='name' onChange={this.handleInputChange} />
                <label>Tagline</label>
                <input type='text' value={this.state.tagline} name='tagline' onChange={this.handleInputChange} />
                <label>Description</label>
                <textarea type='text' value={this.state.description} name='description' onChange={this.handleInputChange}></textarea>
                <label>First brewed</label>
                <input type='text' value={this.state.firstBrewed} name='first_brewed' onChange={this.handleInputChange} />
                <label>Brewers tips</label>
                <input type='text' value={this.state.brewersTips} name='brewers_tips' onChange={this.handleInputChange} />
                <label>Attenuation level</label>
                <input type='number' value={this.state.attenuationLevel} name='attenuation_level' onChange={this.handleInputChange} />
                <label>Contributed  by</label>
                <input type='text' value={this.state.contributedBy} name='contributed_by' onChange={this.handleInputChange} />
                <button type='submit'>Create</button>
            </form>
        )
    }
}