import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICredentials, IUserWithToken } from "@store/Slices/secSlice";

export const securityApi = createApi({
  reducerPath: "securityApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/security" }),
  endpoints: (builder) => ({
    signIn: builder.mutation<IUserWithToken, ICredentials>({
      query: (credentials) => ({
        url: "signin",// en mi api tengo esta ruta con el nombre de signin en lugar de login
        method: "POST",
        body: credentials,
        headers: {
          apikey: "cuandoLosGatosNoEstan",
        },
      }),
    }),
    signUp: builder.mutation({
      query: (credentials) => ({
        url: "signup",// en mi api tengo esta ruta con el nombre de signup en lugar de signin
        method: "POST",
        body: credentials,
        headers: {
          apikey: "cuandoLosGatosNoEstan",
        },
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = securityApi;
