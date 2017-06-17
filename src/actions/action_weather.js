import axios from 'axios'

const API_KEY = '5925f0d6c913d137aa2b21f27a741475'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

export const FETCH_WEATHER = 'fetch_weather'

export default function fetchWeather(location) {
	return async (dispatch) => {
		const URL = `${ROOT_URL}&q=${location},us`
		const request = await axios.get(URL)
		return dispatch({
			type: FETCH_WEATHER,
			payload: request
		})
	}
}
