import { reducePosts } from ".";
import { getPostsAction } from "../actions";

describe("test reducePosts", () => {
	fit("returns correct num elements", async () => {
		//ARR
		const action = await getPostsAction();
		console.log("ACTION", action);
		//ACT
		const posts = reducePosts(null, action);
		//ASS
		//		console.log("POSTS: ", posts);
		expect(posts).toHaveLength(100);
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
