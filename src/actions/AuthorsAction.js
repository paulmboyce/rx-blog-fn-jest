import axiosJson from "../apis/axiosJsonPlaceholder";
import axiosJsonData from "../apis/axiosJsonPlaceholder";

const getAuthorsAction = () => {
	return function (dispatch) {
		return axiosJson.get("/users").then(({ data }) => {
			dispatch({
				type: "GET_ALL_AUTHORS",
				payload: { authors: data },
			});
		});
	};
};

const getOneAuthorAction = (authorId) => {
	console.log(`ENTER: getOneAuthorAction(id: ${authorId}) ...`);
	return (dispatch, getState) => {
		const { authors } = getState();
		const author = authors.filter(({ id }) => id === authorId)[0];

		if (author !== undefined) {
			console.log("GOT from state: ", author);
			return new Promise(function (
				resolve = () => {
					console.log("Promise resolve called");
					dispatch({ type: "GET_ONE_AUTHOR", payload: { author } });
				}
			) {
				dispatch({ type: "GET_ONE_AUTHOR", payload: { author } });
				resolve("OK");
			});
		} else {
			return axiosJsonData
				.get("/users", { params: { id: authorId } })
				.then(({ data }) => {
					dispatch({ type: "GET_ONE_AUTHOR", payload: { author: data } });
				});
		}
	};
};

export { getAuthorsAction, getOneAuthorAction };
