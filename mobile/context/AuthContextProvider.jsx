import React, { createContext, useState } from "react";

import * as SecureStore from "expo-secure-store";

import { handleLoginUser, handleCreateUser } from "../api/authRequests";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});

  const showToken = async () => {
    const result = await SecureStore.getItemAsync("token");
    return result;
  };

  const signIn = async (username, password) => {
    const response = await handleLoginUser(username, password);
    const userToken = response?.accessToken;

    setAuthData({ token: userToken });

    await SecureStore.setItemAsync("token", userToken);
  };

  const singOut = async () => {
    setAuthData(undefined);
    await SecureStore.deleteItemAsync("token");
  };

  const signUp = async (username, password) => {
    await handleCreateUser(username, password);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        singOut,
        signUp,
        authData,
        showToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
