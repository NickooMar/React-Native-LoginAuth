import { View } from "react-native";
import React from "react";

import { Button } from "react-native-paper";

import useAuth from "../../hooks/useAuth";

const HomeScreen = () => {
  const { singOut } = useAuth();

  return (
    <View>
      <Button onPress={singOut} style={{ marginTop: 40 }}>
        Logout
      </Button>
    </View>
  );
};

export default HomeScreen;
