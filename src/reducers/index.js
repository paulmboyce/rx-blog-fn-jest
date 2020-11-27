const reducePosts = (oldPosts = [], { type, payload }) => {
	if ((type = "GET_POSTS")) {
		// get posts from axios
		// do so as async/thunk

		return [
			{
				title: "aHey this is great",
				body:
					"day assume that you're using Redux Thunk 1.x. You may run into issues when you run their code with 2.x. If you use Redux Thunk 2.x in CommonJS environment, don’t ",
				authorName: "John Womack",
			},
			{
				title: "I wrote this articeon stuff",
				body:
					"reMost tutorials today assume that you'rMost tutorials today assume that you'rMost tutorials today assume that you'rver",
				authorName: "Mary Bltthye",
			},
			{
				title: "Music is why we are here",
				body:
					"nto issues when you run their code with 2.x. If you use Redux Thunk 2.x in CommonJS environment, don’t forget to add .default to your import:nto issues when you run their code with 2.x. If you use Redux Thunk 2.x in CommonJS environment, don’t forget to add .default to your import:nto issues when you run their code with 2.x. If you use Redux Thunk 2.x in CommonJS environment, don’t forget to add .default to your import:",
				authorName: "Bob Gelfolft",
			},
		];
	}

	return oldPosts;
};

export { reducePosts };
