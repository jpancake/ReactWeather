import React from 'react'

const About = () => {
	return (
		<section>
			<div className="container row align-center">
				<div className="columns medium-10 large-8">
					<h2 className="text-center page-title">About</h2>
					<p>This is a simple weather application built on React and Express.</p>
					<p>Its main purpose is to get the current weather of a location of your choosing.</p>
					<p>Here are the tools I used to develop the application:</p>
					<ul>
						<li>React.js -- Front-end JavaScript Framework</li>
						<li>Redux.js - Predictable state container</li>
						<li>React Router v4 -- Complete Routing Library for React</li>
						<li>Node.js -- Back-end JavaScript Framework</li>
						<li>Express.js -- Node.js Framework</li>
						<li>Open Weather Map -- Weather REST API</li>
						<li>Google Maps -- Google Maps API</li>
						<li>Axios.js -- Promise based HTTP client for the browser and Node.js</li>
						<li>Foundation -- CSS Framework</li>
						<li>Pug -- HTML Template Engine</li>
						<li>Sass -- CSS Template Engine</li>
						<li>Webpack 2 -- Module Bundler</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default About
