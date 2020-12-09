import React, { useEffect } from "react";
import { connect } from "react-redux";

const UserHeader = ({ dispatch, id, author }) => {
	if (!author) {
		return null;
	}
	return <h5 className="ui header blue">{author.name}</h5>;
};

const mapStateToProps = (state, ownProps) => {
	return { author: state.authors.find((a) => a.id === ownProps.id) };
};
export default connect(mapStateToProps)(UserHeader);
