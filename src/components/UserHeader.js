import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getOneAuthorAction } from "../actions/AuthorsAction";

const UserHeader = ({ dispatch, id, author }) => {
	useEffect(() => {
		dispatch(getOneAuthorAction(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!author) {
		return null;
	}
	return <h5 className="ui header blue">{author.name}</h5>;
};

const mapStateToProps = (state, ownProps) => {
	return { author: state.authors.find((a) => a.id === ownProps.id) };
};
export default connect(mapStateToProps)(UserHeader);
