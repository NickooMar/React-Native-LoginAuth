import React, { useState, useEffect } from "react";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

import { NavigationContainer } from "@react-navigation/native";

import useAuth from "../hooks/useAuth";

export const Router = () => {
  const [token, setToken] = useState();
  const { authData } = useAuth();

  const { showToken } = useAuth();

  useEffect(() => {
    showToken().then((res) => {
      setToken(res);
    });
  }, []);

  console.log(authData?.token, token);

  return (
    <NavigationContainer>
      {authData?.token || token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
