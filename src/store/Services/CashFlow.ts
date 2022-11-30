import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CashFlow {
  _id: string;
  type: string;
  date: string;
  amount: number;
  description: string;
  userId: string;
}

interface GetAllCashFlowResponse {
  total: number;
  totalPages: number;
  page: number;
  itemsPerPage: number;
  items: CashFlow[];
}

export const cashFlowApi = createApi({
  reducerPath: "cashFlowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/cashFlow`,
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
