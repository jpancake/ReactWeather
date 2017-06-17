const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const VENDOR_LIBS = [
	'babel-polyfill',
	'script-loader!jquery/dist/jquery.min.js',
	'react',
	'react-dom',
]

module.exports = {
	entry: {
		bundle: [
			'app'
		],
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/',
		filename: '[name].js'
	},
	externals: {
		jquery: 'jQuery'
	},
	resolve: {
		modules: ['node_modules', path.resolve(__dirname, 'src')],
		extensions: ['.js', '.jsx', '.sass', '.scss'],
		mainFiles: ['index', 'configureStore', 'styles', 'reducers']
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/
			},
			{
				test: /\.(sass|scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader',
						{
							loader: 'sass-loader',
							query: {
								includePaths: [path.resolve(__dirname, 'node_modules/foundation-sites/scss')]
							}
						}]
				})
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor'],
			filename: '[name]'.js,
			minChunks: Infinity
		}),
		new ExtractTextPlugin({
			filename: 'style.css',
			disable: false,
			allChunks: true
		}),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/views/template.pug',
			filetype: 'pug',
			filename: 'index.pug'
		}),
		new HtmlWebpackPugPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	]
}
