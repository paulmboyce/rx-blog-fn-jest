import { GET_ONE_AUTHOR } from "../actions/ActionTypes";
const reduceOneAuthor = (oldAuthors = [], { type, payload }) => {
	switch (type) {
		case GET_ONE_AUTHOR:
			const author = payload.author;
			const authorExists = oldAuthors.find((a) => a.id === author.id);
			if (authorExists) {
				return oldAuthors;
			}

			return [...oldAuthors, author];

		default:
			return oldAuthors;
	}
};

export { reduceOneAuthor };
