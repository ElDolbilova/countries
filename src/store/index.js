import { configureStore } from "@reduxjs/toolkit";
import { countryApi } from "./country/country";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: {
		[countryApi.reducerPath]: countryApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(countryApi.middleware),
});

setupListeners(store.dispatch);
