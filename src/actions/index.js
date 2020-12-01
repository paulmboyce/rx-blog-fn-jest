const getPostsAction = (posts) => {
	return {
		type: "GET_POSTS",
		payload: { posts },
	};
};

export { getPostsAction };
