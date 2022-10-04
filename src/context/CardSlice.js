import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	items: [
		{
			id: nanoid(),
			img: "1.png",
		},
		{
			id: nanoid(),
			img: "2.png",
		},
		{
			id: nanoid(),
			img: "3.png",
		},
		{
			id: nanoid(),
			img: "4.png",
		},
		{
			id: nanoid(),
			img: "5.png",
		},
		{
			id: nanoid(),
			img: "6.png",
		},
		{
			id: nanoid(),
			img: "7.png",
		},
		{
			id: nanoid(),
			img: "8.png",
		},
		{
			id: nanoid(),
			img: "9.png",
		},
		{
			id: nanoid(),
			img: "10.png",
		},
		{
			id: nanoid(),
			img: "11.png",
		},
		{
			id: nanoid(),
			img: "12.png",
		},
		{
			id: nanoid(),
			img: "13.png",
		},
		{
			id: nanoid(),
			img: "14.png",
		},
		{
			id: nanoid(),
			img: "15.png",
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
