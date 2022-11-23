import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const securityApi = createApi({
  reducerPath: 'securityApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/security'}),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
        headers: {
          apikey: 'cuandoLosGatosNoEstan',
        },
      })
    }),
    signin: builder.mutation({
      query: (credentials) => ({
        url: 'signin',
        method: 'POST',
        body: credentials,
        headers: {
          apikey: 'cuandoLosGatosNoEstan',
        },
      })
    }),
  }),
});

export const {useLoginMutation, useSigninMutation} = securityApi;
