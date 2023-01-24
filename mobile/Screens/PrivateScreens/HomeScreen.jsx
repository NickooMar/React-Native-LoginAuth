import { View, Text } from "react-native";
import React from "react";

import useAuth from "../../hooks/useAuth";

const HomeScreen = () => {
  const { hola } = useAuth();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
