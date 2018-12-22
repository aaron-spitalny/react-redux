const path = require("path");
module.exports = {
	entry: {
		index: "./app/src/index-react.js"
	},
	output: {
		path: __dirname + "/app/public/js",
		filename: "[name]-build.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					"presets":["@babel/preset-react", "@babel/preset-env"],
					"plugins": ["transform-class-properties"]
				}
			}
		]
	}
};
