import { reducePosts } from ".";

describe("test reducePosts", () => {
	it("returns correct num elements", () => {
		//ARR
		const action = { type: "GET_POSTS" };
		//ACT
		const posts = reducePosts(null, action);
		//ASS
		expect(posts).toHaveLength(3);
	});

	it("has a default original state (for any other type)", () => {
		//ARR
		const action = { type: "Anythng: and NOT GET_POSTS " };
		//ACT
		const posts = reducePosts(undefined, action);
		//ASS
		console.log(posts);
		expect(posts).toEqual([]);
	});

	it("returns original state for any other type", () => {
		//ARR
		const action = { type: "Anythng: and NOT GET_POSTS " };
		const original = [1, 2, 3];
		//ACT
		const posts = reducePosts(original, action);
		//ASS
		expect(posts).toHaveLength(3);
		expect(posts).toEqual(original);
	});
});
