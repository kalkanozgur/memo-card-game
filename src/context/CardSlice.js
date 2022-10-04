import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	items: [
		{
			id: nanoid(),
			img: "angular2.png",
		},
		{
			id: nanoid(),
			img: "babel.png",
		},
		{
			id: nanoid(),
			img: "bower.png",
		},
		{
			id: nanoid(),
			img: "browserify.png",
		},
		{
			id: nanoid(),
			img: "ember.png",
		},
		{
			id: nanoid(),
			img: "grunt.png",
		},
		{
			id: nanoid(),
			img: "gulp.png",
		},
		{
			id: nanoid(),
			img: "ionic.png",
		},
		{
			id: nanoid(),
			img: "meteor.png",
		},
		{
			id: nanoid(),
			img: "nodejs.png",
		},
		{
			id: nanoid(),
			img: "phantomjs.png",
		},
		{
			id: nanoid(),
			img: "react.png",
		},
		{
			id: nanoid(),
			img: "vue.png",
		},
		{
			id: nanoid(),
			img: "yarn.png",
		},
		{
			id: nanoid(),
			img: "yeoman.png",
		},
	],
	list: [],
	opened: [],
	completed: [],
	score: 200,
};

const cardSlice = createSlice({
	name: "cards",
	initialState: initialState,
	reducers: {
		createCard: {
			reducer: (state, action) => {
				// console.log(action);
				state.list.push(action.payload);
			},
			prepare: (id, img) => {
				// console.log("id, img", id, img);
				return {
					payload: {
						id: id,
						img: img,
						isOpened: false,
						isCompleted: false,
					},
				};
			},
		},

		flipCard: (state, action) => {},
		checkCard: (state, action) => {},
		updateScore: (state, action) => {},
		restart: (state, action) => {},
	},
});

export const { createCard, flipCard, checkCard, updateScore, restart } =
	cardSlice.actions;

export default cardSlice.reducer;
