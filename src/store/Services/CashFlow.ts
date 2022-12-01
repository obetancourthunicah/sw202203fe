import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
export interface ICashFlow {
  _id: string;
  type: string;
  date: string;
  amount: number;
  description: string;
  userId: string;
}

export interface IGetAllCashFlowResponse {
  total: number;
  totalPages: number;
  page: number;
  itemsPerPage: number;
  items: ICashFlow[];
}

export const cashFlowApi = createApi({
  reducerPath: "cashFlowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/cashFlow`,
    prepareHeaders: (headers, {getState}) => {
      headers.set("apikey", process.env.REACT_APP_API_KEY as string);
      const token = (getState() as RootState).sec.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    }
  }),
  endpoints: (builder) => ({
    allCashFlow: builder.query({
      query: ({page = 1, items = 10}) => ({
        url: `?page=${page}&items=${items}`,
      })
    })
  })
});

export const { useAllCashFlowQuery } = cashFlowApi;
