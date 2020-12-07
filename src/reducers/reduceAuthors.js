const reduceOneAuthor = (oldAuthors = [], { type, payload }) => {
	switch (type) {
		case "GET_ONE_AUTHOR":
			const author = payload.author;
			const authorExists = oldAuthors.filter((a) => a.id === author.id);
			console.log("reduceOneAuthor() >> payload author: ", author);
			if (authorExists[0] !== undefined) {
				return oldAuthors;
			}

			return [...oldAuthors, author];

		default:
			return oldAuthors;
	}
};

export { reduceOneAuthor };
