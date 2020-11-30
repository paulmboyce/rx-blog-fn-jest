import React from "react";
import { connect } from "react-redux";

import PostList from "./PostList";
import { getPostsAction } from "../actions";
import { reducePosts } from "../reducers";

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

const mapStateToProps = (state) => {
	return { posts: reducePosts };
};
export default connect(mapStateToProps, { getPostsAction })(App);
