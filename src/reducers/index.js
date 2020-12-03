const reducePosts = (oldPosts = [], { type, payload }) => {
	if (type === "GET_POSTS") {
		const { authors, posts } = payload;
		if (authors && authors.length > 0) {
			const authorsMap = new Map();
			authors.forEach((a) => {
				authorsMap.set(a.id, a);
			});
			const postsWithAuthors = posts.map((p) => {
				const author = authorsMap.get(p.userId);
				p["author"] = author.name;
				return p;
			});
			return postsWithAuthors;
		}
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
