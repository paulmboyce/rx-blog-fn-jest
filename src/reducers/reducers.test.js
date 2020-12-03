import { reducePosts, reduceAuthors } from "../reducers";

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
				authors: AUTHORS,
			},
		};
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

describe("test reduceAuthors", () => {
	//ARR
	let action;
	beforeAll(() => {
		action = {
			type: "GET_AUTHORS",
			payload: {
				authors: AUTHORS,
			},
		};
	});

	it("returns an array", () => {
		//ACT
		const authors = reduceAuthors(null, action);
		//ASS
		expect(Array.isArray(authors)).toEqual(true);
	});

	it("each element has a 'name' and 'id' property", () => {
		//ACT
		const authors = reduceAuthors(null, action);
		//ASS
		expect(authors.length).toBeGreaterThan(0);
		expect(authors[0]).toHaveProperty("id");
		expect(authors[0]).toHaveProperty("name");
	});

	it("returns empty array if type is not GET_AUTHORS", () => {
		//ARR
		action.type = "somethng, not GET_AUTHORS";
		//ACT
		const authors = reduceAuthors(undefined, action);
		//ASS
		expect(authors).toEqual([]);
	});
	it("returns existing authors  if type is not GET_AUTHORS", () => {
		//ARR
		action.type = "somethng, not GET_AUTHORS";
		const existingAuthors = ["any", "old", "array"];
		//ACT
		const authors = reduceAuthors(existingAuthors, action);
		//ASS
		expect(authors).toBe(existingAuthors);
	});
});
