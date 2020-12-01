import { reducePosts } from ".";

describe("test reducePosts", () => {
	it("returns correct num elements", () => {
		//ARR
		const action = { type: "GET_POSTS", payload: { posts: [{}] } };
		//ACT
		const posts = reducePosts(null, action);
		//ASS
		expect(posts).toHaveLength(1);
	});

	it("has a default original state (for any other type)", async () => {
		//ARR
		const action = { type: "Anythng: and NOT GET_POSTS " };
		//ACT
		const posts = await reducePosts(undefined, action);
		//ASS
		expect(posts).toEqual([]);
	});

	it("returns original state for any other type", async () => {
		//ARR
		const action = { type: "Anythng: and NOT GET_POSTS " };
		const original = [1, 2, 3];
		//ACT
		const posts = await reducePosts(original, action);
		//ASS
		expect(posts).toHaveLength(3);
		expect(posts).toEqual(original);
	});
});
