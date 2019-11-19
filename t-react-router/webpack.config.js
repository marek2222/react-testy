const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: "./app/index.jsx"
	},
	output: {
		filename: "[name]_bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/"
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env", "@babel/preset-react"],
					plugins: [
						["@babel/plugin-proposal-decorators", { legacy: true }],
						["@babel/plugin-proposal-class-properties", { losoe: true }]
					]
				},
				resolve: {
					extensions: [".js", ".jsx"]
				}
			},

			{
				test: /\.(s*)css$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
					{
						loader: "sass-resources-loader",
						options: {
							resources: [
								path.resolve(__dirname, "./app/consts/styles/globals.scss")
							]
						}
					}
				]
			}
		]
	},

	devServer: {
		contentBase: path.join(__dirname, "dist"),
		historyApiFallback: true,
		compress: true,
		port: 3001
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "app/index.html"
		})
	]
};
