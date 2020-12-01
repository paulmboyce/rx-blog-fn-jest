import React from "react";
import { connect } from "react-redux";

import PostList from "./PostList";
import { getPostsAction } from "../actions";

const App = ({ getPostsAction }) => {
	getPostsAction();

	return (
		<div className="ui container">
			<br />
			<h1>Hello App</h1>

			<PostList />
		</div>
	);
};

export default connect(null, { getPostsAction })(App);
