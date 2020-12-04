const reducePosts = (oldPosts = [], { type, payload }) => {
	switch (type) {
		case "GET_POSTS":
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
			break;

		default:
			return oldPosts;
	}
};

export default reducePosts;
