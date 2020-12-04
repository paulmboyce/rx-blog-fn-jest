import { rest } from "msw";
import { setupServer } from "msw/node";

import getAuthorsAction from "./AuthorsAction";

const server = setupServer(
	// Describe the requests to mock.
	rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					id: 1,
					name: "John boy",
				},
			])
		);
	})
);

beforeAll(() => {
	server.listen();
});

afterAll(() => {
	server.close();
});

describe("test getAuthorsAction", () => {
	it("calls /users", async () => {
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
		expect(action.type).toBe("GET_AUTHORS");
		const authors = action.payload.authors;
		expect(authors.length).toBeGreaterThan(0);
		expect(authors[0]).toHaveProperty("id");
		expect(authors[0]).toHaveProperty("name");
	});
});
