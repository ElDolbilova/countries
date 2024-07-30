import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
	reducerPath: "counrtyApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1" }),
	endpoints: (builder) => ({
		getAllCountries: builder.query({
			query: () => "/independent?fields=name",
		}),
		getCountryByName: builder.query({
			query: (countryName) => `/name/${countryName}`,
		}),
	}),
});

export const { useGetAllCountriesQuery, useGetCountryByNameQuery } = countryApi;
