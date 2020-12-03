import axiosJson from "../apis/axiosJsonPlaceholder";
import axiosJsonData from "../apis/axiosJsonPlaceholder";

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

const getAuthorsAction = () => {
	return function (dispatch) {
		return axiosJsonData.get("/users").then(({ data }) => {
			dispatch({
				type: "GET_AUTHORS",
				payload: { authors: data },
			});
		});
	};
};

export { getPostsAction, getAuthorsAction };
