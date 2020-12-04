import axiosJson from "../apis/axiosJsonPlaceholder";

const getPostsAction = () => {
	return function (dispatch, getState) {
		return axiosJson.get("/posts").then(({ data }) => {
			const { authors } = getState();
			dispatch({
				type: "GET_POSTS",
				payload: {
					posts: data,
					authors: authors,
				},
			});
		});
	};
};

export default getPostsAction;
