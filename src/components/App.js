import React, { useEffect } from "react";
import { connect } from "react-redux";

import PostList from "./PostList";
import { getPostsAction } from "../actions";
import axiosJson from "../apis/axiosJsonPlaceholder";

const App = ({ getPostsAction }) => {
	return (
		<div className="ui container">
			<br />
			<h1>Hello App</h1>

			<PostList />
		</div>
	);
};

export default App;
