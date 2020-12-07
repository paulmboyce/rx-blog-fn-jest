import { rest } from "msw";
import { setupServer } from "msw/node";

import { getAuthorsAction, getOneAuthorAction } from "./AuthorsAction";

const AUTHORS = [
	{
		id: 1,
		name: "John boy",
	},
	{
		id: 2,
		name: "Steve McQueen",
	},
];

const server = setupServer(
	rest.get(
		"https://jsonplaceholder.typicode.com/users/?:id",
		(req, res, ctx) => {
			const id = req.url.searchParams.get("id");

			if (id) {
				console.log("We got an ID");
				return res(
					ctx.status(200),
					ctx.json({
						id: id,
						name: "Cassia Eller",
					})
				);
			} else {
				return res(ctx.status(200), ctx.json(AUTHORS));
			}
		}
	)
);

beforeAll(() => {
	server.listen();
});

afterAll(() => {
	server.close();
});

describe("TEST: getAuthorsAction", () => {
	it("calls /users for ALL", async () => {
		//ARR
		let action;
		const mockDispatch = jest.fn((a) => {
			action = a;
		});

		//ACT
		const thunk = getAuthorsAction();
		await thunk(mockDispatch);

		//ASS
		expect(typeof thunk).toEqual("function");
		expect(mockDispatch).toHaveBeenCalledTimes(1);
		expect(typeof action).toEqual("object");
		expect(action.type).toBe("GET_ALL_AUTHORS");
		const authors = action.payload.authors;
		expect(authors.length).toBeGreaterThan(0);
		expect(authors[0]).toHaveProperty("id");
		expect(authors[0]).toHaveProperty("name");
	});
});

describe("TEST: getOneAuthorAction", () => {
	it("gets ONE author from remote, NOT from state", async () => {
		//ARR
		let action;
		const idDoesNotExistInState = 3;
		const mockDispatch = jest.fn((a) => {
			console.log("Called mockDispatch(action): ", a.payload);
			action = a;
		});
		const mockGetState = jest.fn(() => {
			return { authors: AUTHORS };
		});
		//ACT
		const thunk = getOneAuthorAction(idDoesNotExistInState);
		await thunk(mockDispatch, mockGetState);

		//ASS
		expect(action).toHaveProperty("type");
		expect(action).toHaveProperty("payload");
		expect(action.payload.author.name).toBe("Cassia Eller");
		expect(mockDispatch).toHaveBeenCalledTimes(1);
		expect(mockGetState).toHaveBeenCalledTimes(1);
	});

	it("gets one author from existing state", async () => {
		//ARR
		let action = null;
		const idExistsInState = 2;
		const mockDispatch = jest.fn((a) => {
			action = a;
		});
		const mockGetState = jest.fn(() => {
			return { authors: AUTHORS };
		});

		//ACT
		const thunk = getOneAuthorAction(idExistsInState);
		await thunk(mockDispatch, mockGetState);
		//ASS
		expect(mockGetState).toHaveBeenCalledTimes(1);
		expect(mockDispatch).toHaveBeenCalledTimes(1);
		expect(action).not.toBeNull();
		expect(action.payload.author.name).toEqual("Steve McQueen");
	});
});
