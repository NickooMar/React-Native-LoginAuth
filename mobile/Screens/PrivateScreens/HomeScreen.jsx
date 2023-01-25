import { View, Text } from "react-native";
import React from "react";

import { Button } from "react-native-paper";

import * as SecureStore from "expo-secure-store";

import useAuth from "../../hooks/useAuth";

const HomeScreen = () => {
  const auth = useAuth();

  return (
    <View>
      <Button onPress={auth.singOut} style={{ marginTop: 40 }}>
        Logout
      </Button>
    </View>
  );
};

export default HomeScreen;
