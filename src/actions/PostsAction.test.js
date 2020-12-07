import { rest } from "msw";
import { setupServer } from "msw/node";

import getPostsAction from "./PostsAction";

const AUTHORS = [
	{
		title: "Lord of the Rings",
		userId: "1",
	},
];

const server = setupServer(
	// Describe the requests to mock.
	rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(AUTHORS));
	})
);

beforeAll(() => {
	server.listen();
});
afterAll(() => {
	server.close();
});

describe("test getPostsAction", () => {
	it("returns correct TYPE, and 'posts' have title and author", async () => {
		//ARR
		let action;
		const mockDispatcher = jest.fn((a) => {
			action = a;
		});

		//ACT
		const thunk = getPostsAction(); //(mockDispatcher);
		await thunk(mockDispatcher);

		expect(typeof thunk).toBe("function");
		expect(mockDispatcher).toBeCalledTimes(1);

		expect(typeof action).toEqual("object");
		expect(action.type).toBe("GET_POSTS");

		const posts = action.payload.posts;
		expect(Array.isArray(posts)).toEqual(true);
		expect(posts.length).toBeGreaterThan(0);
		expect(posts[0]).toHaveProperty("title");
		expect(posts[0]).toHaveProperty("userId");
	});
});
