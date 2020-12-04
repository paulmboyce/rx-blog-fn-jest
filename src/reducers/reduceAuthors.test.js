import reduceAuthors from "./reduceAuthors";

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
