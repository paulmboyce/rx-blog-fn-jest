import React from "react";
import { connect } from "react-redux";

import UserHeader from "./UserHeader";

const PostList = ({ posts }) => {
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
export default connect(mapStateToProps)(PostList);
