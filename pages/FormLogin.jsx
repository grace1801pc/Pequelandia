import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,Image,KeyboardAvoidingView,ScrollView,Platform,Alert,}
from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles/styles";
//import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import appFirebase from "../firebase";
//import appFirebase from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
const FormLogin = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = () => {
    const auth = getAuth(appFirebase);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Inicio de sesión correcto");
        // Aquí puedes navegar a la siguiente pantalla de tu aplicación
        navigation.navigate("Menu", { userEmail: email });
        setEmail("");
        setPassword("");
      })
      .catch(() => {
        console.log("usuario no identificado");
        Alert.alert(
          "Error en el inicio de sesión",
          "Verifica tus credenciales e intenta nuevamente."
        );
      });
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 25}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.formContainer}>
          <View style={styles.background}>
            {/* Imagen centrada */}
            <Image
              source={require("../../assets/pequelandia.png")}
              style={{ width: 201, height: 207, marginTop: -20 }}
            />
          </View>

          <Text style={styles.title}>Pequelandia</Text>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            autoCompleteType="email"
          />
          <View style={styles.input}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Contraseña"
              secureTextEntry={!showPassword}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={togglePasswordVisibility}
            >
              <Icon
                name={showPassword ? "eye-slash" : "eye"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.space} />
          <Text style={styles.buttonText}>o inicie sesión con</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.imageButton}
              onPress={() => console.log("Botón 1 presionado")}
            >
              <Image
                source={require("../../assets/facebook-13.png")}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageButton}
              onPress={() => console.log("Botón 2 presionado")}
            >
              <Image
                source={require("../../assets/google.png")}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.space} />

          <View style={styles.space}>
            <Text style={styles.registerLink}>
              ¿No tienes cuenta?
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text
                  style={{
                    fontSize: 12,
                    color: "blue",
                    textDecorationLine: "underline",
                  }}
                >
                  Registrate
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FormLogin;
