import memoize from "memoizee";

import axiosJson from "../apis/axiosJsonPlaceholder";
import { GET_ONE_AUTHOR } from "./ActionTypes";

const getOneAuthorAction = (authorId) => {
	return (dispatch) => {
		return getDataMemoized(authorId, dispatch);
	};
};

const getDataFromNetwork = (authorId, dispatch) => {
	return axiosJson.get(`/users/${authorId}`).then(({ data }) => {
		dispatch({ type: GET_ONE_AUTHOR, payload: { author: data } });
	});
};

const getDataMemoized = memoize(getDataFromNetwork, { promise: true });

export { getOneAuthorAction };
