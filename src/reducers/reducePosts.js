import { GET_POSTS } from "../actions/ActionTypes";

const reducePosts = (oldPosts = [], { type, payload }) => {
	switch (type) {
		case GET_POSTS:
			return [...oldPosts, ...payload.posts];
		default:
			return oldPosts;
	}
};

export default reducePosts;
