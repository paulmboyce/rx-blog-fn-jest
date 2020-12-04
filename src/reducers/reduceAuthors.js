const reduceAuthors = (oldAuthors = [], { type, payload }) => {
	switch (type) {
		case "GET_AUTHORS":
			return payload.authors;

		default:
			return oldAuthors;
	}
};

export default reduceAuthors;
