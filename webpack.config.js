const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname),
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/, use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			},
			{ test: /\.js$/, exclude: '/node_modules', loader: 'babel-loader' }
		]
	},
	plugins: [
		new htmlWebpackPlugin({ template: './template/index.html' })
	]
};