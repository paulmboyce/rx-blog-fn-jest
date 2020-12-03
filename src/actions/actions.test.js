import { getPostsAction, getAuthorsAction } from "../actions";
import { rest } from "msw";
import { setupServer } from "msw/node";

const authors = [
	{
		title: "Lord of the Rings",
		userId: "1",
	},
];
const server = setupServer(
	// Describe the requests to mock.
	rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(authors));
	}),
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

describe("test getPostsAction", () => {
	it("returns correct TYPE, and 'posts' have title and author", async () => {
		//ARR
		let action;
		const mockDispatcher = jest.fn((a) => {
			action = a;
		});

		//ACT
		const thunk = getPostsAction(); //(mockDispatcher);
		await thunk(mockDispatcher, () => {
			return { authors };
		});

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

	it("returned action includes authors state", async () => {
		//ARR
		let action;
		const mockDispatch = jest.fn((a) => {
			action = a;
		});

		const mockGetState = jest.fn(() => {
			return { authors };
		});

		//ACT
		const thunk = getPostsAction(); //(mockDispatcher);
		await thunk(mockDispatch, mockGetState);
		//ASS
		expect(typeof thunk).toBe("function");
		expect(mockGetState).toBeCalledTimes(1);
		expect(action.payload.authors).toBe(authors);
	});
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
