import React from "react";
var ReactDOM = require("react-dom");
import { Provider } from "react-redux";
import store from "./redux/store";
import Index from "./components/index/Index";

ReactDOM.render(
	<Provider store={store}>
		<Index />
	</Provider>,
	document.getElementById("react")
);
