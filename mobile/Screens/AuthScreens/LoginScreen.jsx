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
import loginIcon from "../../assets/Images/login-icon.png";

const LoginScreen = () => {
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

  const [hidePass, setHidePass] = useState(true);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  if (!loadFonts) return null;

  const handleSubmit = async () => {
    
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
            <View style={styles.loginCardContainer}>
              <Text style={styles.loginCardTitle}>Login</Text>
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
                  right={
                    <TextInput.Icon
                      icon="eye"
                      onPress={() => setHidePass(!hidePass)}
                    />
                  }
                />
              </View>
              <Button
                icon={loginIcon}
                mode="contained"
                onPress={() => handleSubmit()}
                style={styles.cardButton}
              >
                Login
              </Button>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>
                  ¿Has olvidado tu contraseña?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default LoginScreen;

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
  loginCardContainer: {
    width: "80%",
    backgroundColor: "white",
    alignSelf: "center",
    opacity: 0.85,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
  },
  loginCardTitle: {
    fontSize: 32,
    padding: 15,
    fontFamily: "Montserrat_SemiBold",
  },
  textInputContainer: {
    width: "80%",
    marginVertical: 20,
  },
  textInputTextLabel: {
    fontSize: 18,
    fontFamily: "Montserrat_Medium",
  },
  cardButton: {
    marginTop: 15,
    width: 200,
  },
  forgotPasswordText: {
    fontSize: 15,
    marginTop: 25,
    color: "#533EA8",
    paddingBottom: 30,
  },
});
