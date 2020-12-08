import { rest } from "msw";
import { setupServer } from "msw/node";

import { getOneAuthorAction } from "./AuthorsAction";

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
		"https://jsonplaceholder.typicode.com/users/:id",
		(req, res, ctx) => {
			const { id } = req.params;
			if (id) {
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

describe("TEST: getOneAuthorAction", () => {
	it("gets ONE author from remote, NOT from state", async () => {
		//ARR
		let action;
		const idDoesNotExistInState = 3;
		const mockDispatch = jest.fn((a) => {
			action = a;
		});
		const mockGetState = jest.fn(() => {
			return { authors: AUTHORS };
		});
		//ACT
		const thunk = getOneAuthorAction(idDoesNotExistInState);
		await thunk(mockDispatch, mockGetState);

		//ASS
		expect(mockDispatch).toHaveBeenCalledTimes(1);
		expect(mockGetState).toHaveBeenCalledTimes(1);
		expect(action).toHaveProperty("type");
		expect(action).toHaveProperty("payload");
		expect(action.payload.author.name).toBe("Cassia Eller");
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
