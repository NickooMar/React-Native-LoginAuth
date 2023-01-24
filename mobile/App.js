//Context
import { AuthProvider } from "./context/AuthContextProvider";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Screens/PrivateScreens/HomeScreen";
import LoginScreen from "./Screens/AuthScreens/LoginScreen";
import RegisterScreen from "./Screens/AuthScreens/RegisterScreen";

// Toast Messages
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={() => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={() => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={() => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </AuthProvider>
  );
}
