// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const commonPaths = require('./config/commonPaths');

module.exports = (env) => ({
	mode: env.production ? 'production' : 'development',
	entry: path.join(commonPaths.src, 'index.tsx'),
	output: {
		filename: 'bundle.[name].js',
		path: commonPaths.dist
	},
	devServer: {
		open: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		}
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js)$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				resolve: {
					extensions: ['.ts', '.tsx', '.js', '.json']
				}
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|ttf|woff|woff2)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'static/media/[name][ext]?[contenthash]'
				}
			},
			{
				test: /\.svg$/,
				type: 'asset/inline'
			}
		]
	},
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: ['.ts', '.tsx', '.js', '.css']
	},
	devtool: env.production ? undefined : 'source-map',
	plugins: [
		new DefinePlugin({ 'process.env.devServer': JSON.stringify(env.devServer) }),
		new Dotenv(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: './index.html'
		}),
		new ForkTsCheckerWebpackPlugin()
	],
	optimization: env.production
		? {
				minimize: true,
				minimizer: [new TerserPlugin({ extractComments: false, terserOptions: { keep_fnames: /plugin/ } })],
				splitChunks: {
					cacheGroups: {
						commons: {
							test: /[\\/]node_modules[\\/]/,
							name: 'vendor',
							chunks: 'all'
						}
					}
				}
		  }
		: {
			runtimeChunk: 'single',
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendor',
						chunks: 'all'
					}
				}
			}
		}
});
