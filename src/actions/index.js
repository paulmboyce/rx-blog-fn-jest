import axiosJson from "../apis/axiosJsonPlaceholder";
import axiosJsonData from "../apis/axiosJsonPlaceholder";

const getPostsAction = () => {
	return function (dispatch) {
		return axiosJson.get("/posts").then(({ data }) => {
			dispatch({
				type: "GET_POSTS",
				payload: { posts: data },
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
