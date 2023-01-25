import { useEffect } from "react";
//Context
import { AuthProvider } from "./context/AuthContextProvider";

// Toast Messages
import Toast from "react-native-toast-message";

// Routes
import { Router } from "./navigation/Router";

// Auth
import useAuth from "./hooks/useAuth";
import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <AuthProvider>
      <Router />
      <Toast />
    </AuthProvider>
  );
}
