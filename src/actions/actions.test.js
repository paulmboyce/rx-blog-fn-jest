import { getPostsAction } from ".";
import Dispatch from "redux";

describe("test getPostsAction", () => {
	it("returns correct TYPE", () => {
		const action = getPostsAction(Dispatch);

		console.log("ACTION: ", action());
		expect(action.type).toBe("GET_POSTS");
	});
});
