const reducePosts = (oldPosts = [], { type, payload }) => {
	if (type === "GET_POSTS") {
		// get posts from axios
		// do so as async/thunk
		return payload.posts;
	}
	return oldPosts;
};

const reduceAuthors = (oldAuthors = [], { type, payload }) => {
	if (type === "GET_AUTHORS") {
		return payload.authors;
	}

	return oldAuthors;
};
export { reducePosts, reduceAuthors };
