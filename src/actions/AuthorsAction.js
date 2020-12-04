import axiosJson from "../apis/axiosJsonPlaceholder";

const getAuthorsAction = () => {
	return function (dispatch) {
		return axiosJson.get("/users").then(({ data }) => {
			dispatch({
				type: "GET_AUTHORS",
				payload: { authors: data },
			});
		});
	};
};

export default getAuthorsAction;
