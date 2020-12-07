import { combineReducers } from "redux";
import reducePosts from "./reducePosts";
import { reduceOneAuthor } from "./reduceAuthors";

export default combineReducers({
	posts: reducePosts,
	authors: reduceOneAuthor,
});
