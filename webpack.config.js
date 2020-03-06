const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: "./src/entry.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "connect4.js",
		library: "Connect4"
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.scss$/,
				exclude: /(node_modules|bower_components)/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].min.css",
			chunkFilename: "[id].min.css"
		})
	],
	watch: true,
	devtool: "inline-source-map"
};
