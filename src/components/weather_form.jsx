import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class WeatherForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			term: '',
		}
		this._onInputChange = this._onInputChange.bind(this)
		this._onFormSubmit = this._onFormSubmit.bind(this)
	}
	_onInputChange(e) {
		this.setState({ term: e.target.value })
	}
	_onFormSubmit(e) {
		e.preventDefault()
		this.props.fetchWeather(this.state.term)
		this.setState({ term: '' })
	}
	render() {
		return (
			<form onSubmit={this._onFormSubmit} className="weather-form">
				<input
					value={this.state.term}
					onChange={this._onInputChange}
					type="search"
					placeholder="Search Weather by City"
					required
				/>
				<button className="button expanded">Get Weather</button>
			</form>
		)
	}
}

WeatherForm.propTypes = {
	fetchWeather: PropTypes.func.isRequired,
}
