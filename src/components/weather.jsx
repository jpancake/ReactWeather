import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WeatherForm from './weather_form'
import WeatherMessage from './weather_message'
import fetchWeather from 'actions/action_weather'

class Weather extends Component {
	constructor(props) {
		super(props)
		this._handleSearch = this._handleSearch.bind(this)
	}

	_handleSearch(city) {
		this.props.fetchWeather(city)
	}

	render() {
		return (
			<section className="weather">
				<div className="container row align-center">
					<div className="columns medium-10 large-8">
						<h2 className="text-center page-title">Weather App</h2>
						<WeatherForm fetchWeather={this._handleSearch} />
						<WeatherMessage weather={this.props.weather} />
					</div>
				</div>
			</section>
		)
	}
}

Weather.propTypes = {
	fetchWeather: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
	return state
}

export default connect(mapStateToProps, { fetchWeather })(Weather)
