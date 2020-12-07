const reducePosts = (oldPosts = [], { type, payload }) => {
	switch (type) {
		case "GET_POSTS":
			console.log("POSTS PAYLOAD", payload.posts);
			return [...oldPosts, ...payload.posts];
		default:
			return oldPosts;
	}
};

export default reducePosts;
