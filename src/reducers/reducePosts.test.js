import reducePosts from "./reducePosts";

const AUTHORS = [
	{
		id: 1,
		name: "John boy",
	},
	{
		id: 2,
		name: "Jane Doe",
	},
];

describe("test reducePosts", () => {
	it("returns correct num elements", () => {
		//ARR
		const action = {
			type: "GET_POSTS",
			payload: {
				posts: [{ userId: 1, title: "yeha" }],
			},
		};
		//ACT
		const posts = reducePosts(AUTHORS, action);
		//ASS
		expect(posts).toHaveLength(2 + 1);
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
