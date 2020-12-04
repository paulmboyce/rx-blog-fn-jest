import { combineReducers } from "redux";
import reducePosts from "./reducePosts";
import reduceAuthors from "./reduceAuthors";

export default combineReducers({
	posts: reducePosts,
	authors: reduceAuthors,
});
