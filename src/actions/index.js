import axiosJson from "../apis/axiosJsonPlaceholder";

const getPostsAction = (posts) => {
	return function (dispatch) {
		return axiosJson.get("/posts").then(({ data }) => {
			dispatch({
				type: "GET_POSTS",
				payload: { posts: data },
			});
		});
	};
};

export { getPostsAction };
