import { getPostsAction } from ".";

describe("test getPostsAction", () => {
	it("returns correct TYPE", () => {
		expect(getPostsAction().type).toBe("GET_POSTS");
	});
});
