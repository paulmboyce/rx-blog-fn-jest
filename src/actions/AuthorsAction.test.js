import { rest } from "msw";
import { setupServer } from "msw/node";

import { getOneAuthorAction } from "./AuthorsAction";

const server = setupServer(
	rest.get(
		"https://jsonplaceholder.typicode.com/users/:id",
		(req, res, ctx) => {
			const { id } = req.params;
			return res(
				ctx.status(200),
				ctx.json({
					id: id,
					name: "Cassia Eller",
				})
			);
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
		//ACT
		const thunk = getOneAuthorAction(idDoesNotExistInState);
		await thunk(mockDispatch);

		//ASS
		expect(mockDispatch).toHaveBeenCalledTimes(1);
		expect(action).toHaveProperty("type");
		expect(action).toHaveProperty("payload");
		expect(action.payload.author.name).toBe("Cassia Eller");
	});
});
