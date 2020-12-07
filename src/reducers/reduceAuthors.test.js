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
