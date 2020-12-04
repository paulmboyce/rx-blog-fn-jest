const reduceAuthors = (oldAuthors = [], { type, payload }) => {
	if (type === "GET_AUTHORS") {
		return payload.authors;
	}

	return oldAuthors;
};

export default reduceAuthors;
