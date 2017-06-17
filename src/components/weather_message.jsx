import React from 'react'
import _ from 'lodash'

import Map from './google_maps'

const WeatherMessage = ({ weather }) => {
	if (_.isEmpty(weather)) {
		return <div className="spinner" />
	}
	const { name, main: { temp }, weather: [{ description, icon }], coord: { lon, lat } } = weather
	const fahrenheit = (temp * (9 / 5)) - 459.67
	return (
		<section className="weather-message text-center">
			<h3> { name } { fahrenheit.toFixed(2) } °F </h3>
			<h4>
				<img src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon" />
				{ description }
			</h4>
			<Map
				lng={lon}
				lat={lat}
				googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
				query={{
					key: 'AIzaSyBzh16sfwwZUJu2fj1XklOQR7U8zMvJl3s',
					v: '3',
					libraries: 'geometry,drawing,places'
				}}
				loadingElement={
					<div className="spinner" />
				}
				containerElement={
					<div style={{ height: '100%' }} />
				}
				mapElement={
					<div style={{ height: '100%' }} />
				}
				markers={[{
					position: {
						lat,
						lng: lon,
					},
					key: name,
				}]}
			/>
		</section>
	)
}

export default WeatherMessage
