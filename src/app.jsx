/* globals $ */

// Importing Modules
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

// Import Components
import Navigation from 'components/navigation'
import Weather from 'components/Weather'
import About from 'components/about'

// Import Styles
import 'styles'

// Redux Store Configuration
import configureStore from 'store'
const store = configureStore()

// Render JSX onto screen
render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Switch>
					<div>
						<Route path="/" component={Navigation} />
						<Route path="/about" component={About} />
						<Route exact path="/" component={Weather} />
					</div>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	$('#app')[0]
)

if (module.hot) {
	module.hot.accept()
}
