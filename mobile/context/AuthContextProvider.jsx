import React, { createContext, useState } from "react";

import * as SecureStore from "expo-secure-store";

import { handleLoginUser, handleCreateUser } from "../api/authRequests";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});

  const signIn = async (username, password) => {
    const response = await handleLoginUser(username, password);
    const userToken = response?.accessToken;

    // await SecureStore.setItemAsync("token", userToken);

    setAuthData({ token: userToken });
  };

  const singOut = async () => {
    setAuthData(undefined);
  };

  const signUp = async (username, password) => {
    await handleCreateUser(username, password);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        singOut,
        authData,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
