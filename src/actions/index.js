import { getOneAuthorAction } from "./AuthorsAction";
import { getPostsAction } from "./PostsAction";

const fetchPostsAndUsers = () => {
	return async (dispatch, getState) => {
		await dispatch(getPostsAction());
		const { posts } = getState();
		const ids = posts.map((p) => p.userId);
		const uniqueIds = new Set(ids);
		uniqueIds.forEach((userId) => {
			dispatch(getOneAuthorAction(userId));
		});
	};
};

export { fetchPostsAndUsers };
