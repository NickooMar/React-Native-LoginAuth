import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/PrivateScreens/HomeScreen";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};
