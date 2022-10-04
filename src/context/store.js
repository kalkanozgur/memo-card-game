import cardSlice from "./CardSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		card: cardSlice,
	},
});
