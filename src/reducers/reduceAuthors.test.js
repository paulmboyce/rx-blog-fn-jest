import { reduceAuthors, reduceOneAuthor } from "./reduceAuthors";

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

describe("TEST: reduceAuthors", () => {
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

describe("TEST: reduceOneAuthor", () => {
	it("Adds author to state is does not already exist", () => {
		//ARR
		const newAuthor = {
			name: "New Author",
			id: 9,
		};
		const authorNotInStateAction = {
			type: "GET_ONE_AUTHOR",
			payload: {
				author: newAuthor,
			},
		};
		//ACT
		const authorState = reduceOneAuthor(AUTHORS, authorNotInStateAction);
		//ASS
		//		expect(authorState).not.toBe(AUTHORS);
		expect(Array.isArray(authorState)).toEqual(true);
		expect(authorState.length).toBe(3);
		expect(authorState).toEqual([...AUTHORS, newAuthor]);
	});

	it("Does not add author to state IF author exists", () => {
		//ARR
		const existingAuthor = {
			id: 2,
			name: "Jane Doe",
		};
		const authorIsInStateAction = {
			type: "GET_ONE_AUTHOR",
			payload: {
				author: existingAuthor,
			},
		};
		//ACT
		const authorState = reduceOneAuthor(AUTHORS, authorIsInStateAction);
		//ASS
		//		expect(authorState).not.toBe(AUTHORS);
		expect(Array.isArray(authorState)).toEqual(true);
		expect(authorState.length).toBe(AUTHORS.length);
		expect(authorState).toEqual([...AUTHORS]);
	});
});
