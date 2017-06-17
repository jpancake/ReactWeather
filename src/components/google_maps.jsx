import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import withScriptjs from 'react-google-maps/lib/async/withScriptjs'


const Map = withScriptjs(
	withGoogleMap(
		props => (
			<GoogleMap
				ref={props.onMapLoad}
        defaultZoom={14}
			  center={{ lat: props.lat, lng: props.lng }}
			>
				{props.markers.map(marker => (
					<Marker
						{...marker}
					/>
				))}
			</GoogleMap>
		)
	)
)

export default Map

