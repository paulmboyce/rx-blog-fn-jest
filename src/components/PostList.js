import React, { useEffect } from "react";
import { connect } from "react-redux";

import UserHeader from "./UserHeader";
import { getPostsAction } from "../actions";
import axiosJson from "../apis/axiosJsonPlaceholder";

const PostList = ({ posts, getPostsAction }) => {
	useEffect(() => {
		axiosJson.get("/posts").then(({ data }) => {
			getPostsAction(data);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderPosts = () => {
		return posts.map((p) => (
			<div className="item" key={p.title}>
				<i className="user icon large"></i>
				<div className="content">
					<div className="header">{p.title}</div>
					<div className="description">{p.body}</div>
					<UserHeader name={p.authorName} />
				</div>
			</div>
		));
	};

	return <div className="ui relaxed list">{renderPosts()}</div>;
};

const mapStateToProps = (state) => {
	return { posts: state.posts };
};
export default connect(mapStateToProps, {
	getPostsAction,
})(PostList);
