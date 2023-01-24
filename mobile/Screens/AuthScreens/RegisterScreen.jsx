import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Keyboard,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";

import { TextInput } from "react-native-paper";

// Fonts
import { useFonts } from "expo-font";

// Background and Icons
import BubbleBackground from "../../assets/Images/blob-scene-haikei.png";
import registerIcon from "../../assets/Images/register_icon.png";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Toast Messages
import Toast from "react-native-toast-message";

// API Handler
import { handleCreateUser } from "../../api/authRequests";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [loadFonts] = useFonts({
    Montserrat_Black: require("../../assets/Fonts/Montserrat-Black.ttf"),
    Montserrat_Bold: require("../../assets/Fonts/Montserrat-Bold.ttf"),
    Montserrat_ExtraLight: require("../../assets/Fonts/Montserrat-ExtraLight.ttf"),
    Montserrat_Italic: require("../../assets/Fonts/Montserrat-Italic.ttf"),
    Montserrat_Light: require("../../assets/Fonts/Montserrat-Light.ttf"),
    Montserrat_Medium: require("../../assets/Fonts/Montserrat-Medium.ttf"),
    Montserrat_Regular: require("../../assets/Fonts/Montserrat-Regular.ttf"),
    Montserrat_SemiBold: require("../../assets/Fonts/Montserrat-SemiBold.ttf"),
    Montserrat_Thin: require("../../assets/Fonts/Montserrat-Thin.ttf"),
  });

  // Toasts Messages
  const successToast = () => {
    Toast.show({
      type: "success",
      text1: "Register Successfully done",
      text2: `Welcome ${username} 👋`,
      visibilityTime: 5000,
    });
  };
  const validationErrorToast = () => {
    Toast.show({
      type: "error",
      text1: "Ops! Check if every field is valid",
      text2:
        "Try Again 🚫, username and password must have a minimum of 4 characters",
      visibilityTime: 5000,
    });
  };
  const duplicatedErrorToast = () => {
    Toast.show({
      type: "error",
      text1: "Ops! username is already taken",
      text2: "Try Again 🚫",
      visibilityTime: 5000,
    });
  };

  const [hidePass, setHidePass] = useState(true);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (!loadFonts) return null;

  const handleSubmit = async () => {
    if (
      !password ||
      !username ||
      !confirmPassword ||
      password != confirmPassword ||
      username.length < 4 ||
      password.length < 4
    ) {
      validationErrorToast();
    } else {
      try {
        await handleCreateUser(username, password);
        successToast();
        navigation.navigate("Login");
      } catch (error) {
        console.log(error);
        duplicatedErrorToast();
        setUsername("");
        setPassword("");
        setConfirmPassword("");
      }
    }
  };

  return (
    <Pressable onPress={Keyboard.dismiss}>
      <View style={styles.rootContainer}>
        <ImageBackground
          source={BubbleBackground}
          style={styles.bubbleBackground}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <View style={styles.registerCardContainer}>
              <Text style={styles.registerCardTitle}>Register</Text>
              <View style={styles.textInputContainer}>
                <Text style={styles.textInputTextLabel}>
                  Ingrese su usuario
                </Text>
                <TextInput
                  label="Username"
                  outlineColor="black"
                  activeOutlineColor="#326A81"
                  autoCapitalize="none"
                  returnKeyType="next"
                  mode="outlined"
                  selectionColor="#326A81"
                  blurOnSubmit={false}
                  onChangeText={(username) => setUsername(username)}
                  value={username}
                />
              </View>
              <View style={styles.textInputContainer}>
                <Text style={styles.textInputTextLabel}>
                  Ingrese su contraseña
                </Text>

                <TextInput
                  label="Password"
                  outlineColor="black"
                  activeOutlineColor="#326A81"
                  autoCapitalize="none"
                  returnKeyType="next"
                  mode="outlined"
                  secureTextEntry={hidePass ? true : false}
                  selectionColor="#326A81"
                  blurOnSubmit={false}
                  onChangeText={(password) => setPassword(password)}
                  value={password}
                  right={
                    <TextInput.Icon
                      icon="eye"
                      onPress={() => setHidePass(!hidePass)}
                    />
                  }
                />
              </View>
              <View style={styles.textInputContainer}>
                <Text style={styles.textInputTextLabel}>
                  Confirme su contraseña
                </Text>

                <TextInput
                  label="Password"
                  outlineColor="black"
                  activeOutlineColor="#326A81"
                  autoCapitalize="none"
                  returnKeyType="next"
                  mode="outlined"
                  secureTextEntry={true}
                  selectionColor="#326A81"
                  blurOnSubmit={false}
                  onChangeText={(confirmPassword) =>
                    setConfirmPassword(confirmPassword)
                  }
                  value={confirmPassword}
                />
              </View>
              <Button
                icon={registerIcon}
                mode="contained"
                onPress={() => handleSubmit()}
                style={styles.cardButton}
              >
                Sign Up
              </Button>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.LoginRedirectText}>
                  ¿Ya tienes una cuenta?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  rootContainer: {
    position: "relative",
    backgroundColor: "#291965",
    height: "100%",
    zIndex: 0,
  },
  bubbleBackground: {
    position: "absolute",
    zIndex: 0,
    width: "100%",
    height: "100%",
  },
  registerCardContainer: {
    width: "80%",
    backgroundColor: "white",
    alignSelf: "center",
    opacity: 0.85,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
  },
  registerCardTitle: {
    fontSize: 32,
    padding: 15,
    fontFamily: "Montserrat_SemiBold",
  },
  textInputContainer: {
    width: "80%",
    marginVertical: 15,
  },
  textInputTextLabel: {
    fontSize: 18,
    fontFamily: "Montserrat_Medium",
    marginBottom: 5,
  },
  cardButton: {
    marginTop: 15,
    width: 200,
    marginBottom: 20,
  },
  LoginRedirectText: {
    fontSize: 16,
    color: "#533EA8",
    paddingBottom: 20,
  },
});
