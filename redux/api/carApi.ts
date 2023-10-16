import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const generateQueryStr = (baseString: string, query: Object): string => {
    const queryString: string =
        baseString +
        Object.entries(query)
            .map(([key, value]) => `${key}=${value}`)
            .join("&");

    return queryString;
};

interface IHeader {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
}
const Header: IHeader = {
    "X-RapidAPI-Key": "6b365afe7cmsh5548dfde4720349p10e88bjsn3c9175ff3429",
    "X-RapidAPI-Host": "car-data.p.rapidapi.com",
};

// API endpoint for fetching data
export const carApi = createApi({
    reducerPath: "reviewApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://car-data.p.rapidapi.com/`,
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", Header["X-RapidAPI-Key"]);
            headers.set("X-RapidAPI-Host", Header["X-RapidAPI-Host"]);

            return headers;
        },
    }),

    endpoints: (builder) => ({
        getCarDetails: builder.query<any, Object>({ // <
            query: (queryParams) => {
                const queryStr = generateQueryStr("cars?", queryParams);

                return { url: queryStr };
            },
        }),
    }),
});

export const { useGetCarDetailsQuery } = carApi;