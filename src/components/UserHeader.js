import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getOneAuthorAction } from "../actions/AuthorsAction";

const UserHeader = ({ dispatch, id, authors }) => {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		const author = authors.filter((a) => a.id === id)[0];
		if (author) {
			setAuthor(author);
		} else {
			dispatch(getOneAuthorAction(id));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authors]);

	return <h5 className="ui header blue">{author && author.name}</h5>;
};

const mapStateToProps = (state) => {
	return { authors: state.authors };
};
export default connect(mapStateToProps)(UserHeader);
