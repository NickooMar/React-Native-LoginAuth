import React, { useState } from "react";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

import { NavigationContainer } from "@react-navigation/native";

import useAuth from "../hooks/useAuth";

export const Router = () => {
  const [token, setToken] = useState();
  const { authData } = useAuth();

  const { getToken } = useAuth();

  getToken().then((res) => setToken(res));

  return (
    <NavigationContainer>
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
