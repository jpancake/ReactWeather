const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		bundle: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:8080/',
			'webpack/hot/dev-server',
			'babel-polyfill',
			'script-loader!jquery/dist/jquery.min.js',
			'script-loader!foundation-sites/dist/js/foundation.min.js',
			'app.jsx',
		],
	},
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/',
		filename: '[name].js',
	},
	externals: {
		jquery: 'jQuery',
	},
	resolve: {
		modules: ['node_modules', path.resolve(__dirname, 'src')],
		extensions: ['.js', '.jsx', '.sass'],
		mainFiles: ['index', 'configureStore', 'styles', 'reducers'],
	},
	module: {
		rules: [
	    {
	    	test: /\.pug$/,
		    loader: 'pug-loader',
		    query: {
	    		pretty: true,
		    },
	    },
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(sass|scss)$/,
				loaders: ['style-loader', 'css-loader',
					{
						loader: 'sass-loader',
						query: {
							includePaths: [path.resolve(__dirname, 'node_modules/foundation-sites/scss')],
						},
					}],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/views/template.pug',
			filename: 'index.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	devtool: 'inline-source-map',
}
