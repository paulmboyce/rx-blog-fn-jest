import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import { reducePosts } from "./reducers";
const reducers = combineReducers({
	posts: reducePosts,
});
const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
