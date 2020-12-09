import axiosJson from "../apis/axiosJsonPlaceholder";
import { GET_ONE_AUTHOR } from "./ActionTypes";

const getOneAuthorAction = (authorId) => {
	return async (dispatch) => {
		return await getDataFromNetwork(authorId, dispatch);
	};
};

const getDataFromNetwork = (authorId, dispatch) => {
	return axiosJson.get(`/users/${authorId}`).then(({ data }) => {
		dispatch({ type: GET_ONE_AUTHOR, payload: { author: data } });
	});
};

export { getOneAuthorAction };
