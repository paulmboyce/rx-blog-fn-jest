import memoize from "memoizee";

import axiosJson from "../apis/axiosJsonPlaceholder";

const getOneAuthorAction = (authorId) => {
	return (dispatch, getState) => {
		const { authors } = getState();
		const author = authors.filter(({ id }) => id === authorId)[0];

		if (author) {
			return new Promise(function (resolve = () => {}) {
				dispatch({ type: "GET_ONE_AUTHOR", payload: { author } });
				resolve("OK");
			});
		} else {
			return getDataMemoized(authorId, dispatch);
		}
	};
};

const getDataFromNetwork = (authorId, dispatch) => {
	return axiosJson
		.get("/users", { params: { id: authorId } })
		.then(({ data }) => {
			dispatch({ type: "GET_ONE_AUTHOR", payload: { author: data[0] } });
		});
};

const getDataMemoized = memoize(getDataFromNetwork, { promise: true });

export { getOneAuthorAction };
