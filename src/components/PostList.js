import React, { useEffect } from "react";
import { connect } from "react-redux";

import UserHeader from "./UserHeader";
import { getPostsAction, getAuthorsAction } from "../actions";

const PostList = ({ posts, authors, dispatch }) => {
	useEffect(() => {
		dispatch(getAuthorsAction());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (authors.length > 0) {
			dispatch(getPostsAction());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authors]);

	const renderPosts = () => {
		return posts.map((p) => (
			<div className="item" key={p.title}>
				<i className="user icon large"></i>
				<div className="content">
					<div className="header">{p.title}</div>
					<div className="description">{p.body}</div>
					<UserHeader name={p.author} />
				</div>
			</div>
		));
	};

	return <div className="ui relaxed list">{renderPosts()}</div>;
};

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
		authors: state.authors,
	};
};
export default connect(mapStateToProps)(PostList);
