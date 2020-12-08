import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getOneAuthorAction } from "../actions/AuthorsAction";

const UserHeader = ({ dispatch, id, authors }) => {
	useEffect(() => {
		dispatch(getOneAuthorAction(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const author = authors.find((a) => a.id === id);
	if (!author) {
		return null;
	}

	return <h5 className="ui header blue">{author && author.name}</h5>;
};

const mapStateToProps = (state) => {
	return { authors: state.authors };
};
export default connect(mapStateToProps)(UserHeader);
