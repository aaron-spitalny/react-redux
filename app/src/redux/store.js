import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/";
import { initialState } from "./initialState";

const middleware = [thunk];
//production
// const store = createStore(
// 	rootReducer,
// 	initialState,
// 	compose(applyMiddleware(...middleware))
// );

//dev
//install the redux dev tools in chrome
const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
