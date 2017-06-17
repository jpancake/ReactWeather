import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import chalk from 'chalk'

import config from './webpack.devConfig'

const PORT = 8080

const server = new WebpackDevServer(webpack(config), {
	port: PORT,
	hot: true,
	historyApiFallback: true,
	compress: false,
	quiet: false,
	noInfo: false,
	stats: {
		colors: true
	}
})

server.listen(PORT, 'localhost', () => {
	console.log(chalk.bgWhite.bold(`Webpack Development Server is up and running on port ${PORT}`))
	console.log(chalk.blue(`Browse to http://localhost:${PORT}`))
})
