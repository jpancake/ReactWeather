import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import fetchWeather from 'actions/action_weather'

class Navigation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			term: ''
		}
		this._onSearch = this._onSearch.bind(this)
	}
	_onSearch(e) {
		e.preventDefault()

		this.props.fetchWeather(this.state.term)
		this.props.history.push('/')
		this.setState({ term: '' })
	}
	render() {
		return (
    	<nav className="top-bar">
		    <div className="top-bar-left">
			    <ul className="menu">
				    <li className="menu-text">React Weather</li>
				    <Link to="/">Get Weather</Link>
				    <li><Link to="/about">About</Link></li>
			    </ul>
		    </div>
		    <form className="top-bar-right" onSubmit={this._onSearch}>
			    <ul className="menu">
				    <li>
					    <input
						    type="search"
					      value={this.state.term}
					      onChange={e => this.setState({ term: e.target.value })}
					      placeholder="Search Weather by City"
					    />
				    </li>
				    <li>
					    <button
					      className="button"
					    >
						    Get Weather
					    </button>
				    </li>
			    </ul>
		    </form>
	    </nav>
		)
	}
}

Navigation.propTypes = {
	fetchWeather: PropTypes.func.isRequired,
	history: {
		push: PropTypes.func.isRequired
	}.isRequired
}

export default connect(null, { fetchWeather })(Navigation)
