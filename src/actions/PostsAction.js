import axiosJson from "../apis/axiosJsonPlaceholder";
import { GET_POSTS } from "./ActionTypes";
const getPostsAction = () => {
	return function (dispatch) {
		return axiosJson.get("/posts").then(({ data }) => {
			dispatch({
				type: GET_POSTS,
				payload: {
					posts: data,
				},
			});
		});
	};
};

export { getPostsAction };
