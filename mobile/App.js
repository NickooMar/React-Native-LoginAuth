//Context
import { AuthProvider } from "./context/AuthContextProvider";

// Toast Messages
import Toast from "react-native-toast-message";

// Routes
import { Router } from "./navigation/Router";

export default function App() {
  return (
    <AuthProvider>
      <Router />
      <Toast />
    </AuthProvider>
  );
}
