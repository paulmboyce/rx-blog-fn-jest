import { getPostsAction } from ".";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
	// Describe the requests to mock.
	rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
		console.log("MSW Intercepted '/posts' OK");
		return res(
			ctx.status(200),
			ctx.json([
				{
					title: "Lord of the Rings",
					author: "J. R. R. Tolkien",
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

describe("test getPostsAction", () => {
	it("returns correct TYPE", async () => {
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
		console.log("TYPE: ", action.type);
		console.log("PAYLOAD: ", action.payload);
		expect(action.type).toBe("GET_POSTS");
		expect(typeof action).toEqual("object");
		expect(Array.isArray(action.payload.posts)).toEqual(true);
		const posts = action.payload.posts;
		expect(posts.length).toBeGreaterThan(0);
		expect(posts[0].title).toBeTruthy();
		expect(posts[0].author).toBeTruthy();
	});
});
