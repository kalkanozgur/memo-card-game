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
	openedList: [],
	completedList: [],
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
						id: nanoid(),
						img: img,
						tag: id,
						isOpened: false,
						isCompleted: false,
					},
				};
			},
		},

		flipCard: (state, action) => {
			const index = state.list.findIndex(
				(item) => item.id === action.payload.id
			);
			const isThereOpened = state.openedList.findIndex(
				(item) => item.id === action.payload.id
			);
			if (isThereOpened === -1) {
				state.openedList.push(state.list[index]);
			}
			if (state.list[index].isOpened === false) {
				state.list[index].isOpened = true;
			} else {
				state.list[index].isOpened = false;
				state.openedList = [];
			}
		},
		checkOpenedCards: (state, action) => {
			try {
				const index0 = state.list.findIndex(
					(item) => item.id === state.openedList[0].id
				);

				const index1 = state.list.findIndex(
					(item) => item.id === state.openedList[1].id
				);
				if (state.openedList[0].tag === state.openedList[1].tag) {
					state.list[index0].isCompleted = true;
					state.list[index1].isCompleted = true;
					state.list[index0].isOpened = false;
					state.list[index1].isOpened = false;
					state.completedList.push(state.list[index0]);
					state.completedList.push(state.list[index1]);
					state.score += 50;
				} else {
					state.list[index0].isOpened = false;
					state.list[index1].isOpened = false;
					state.openedList = [];
					state.score -= 20;
				}
				state.openedList = [];
			} catch (e) {}
		},
		resetOpened: (state, action) => {},
		restart: (state, action) => {},
	},
});

export const { createCard, flipCard, checkOpenedCards, updateScore, restart } =
	cardSlice.actions;

export default cardSlice.reducer;
