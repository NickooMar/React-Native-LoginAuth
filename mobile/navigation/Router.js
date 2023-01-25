import React from "react";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

import { NavigationContainer } from "@react-navigation/native";

import useAuth from "../hooks/useAuth";

export const Router = () => {
  const { authData } = useAuth();

  console.log(authData);

  return (
    <NavigationContainer>
      {authData?.token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
