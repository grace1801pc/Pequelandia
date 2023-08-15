import React, { useState } from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Image,KeyboardAvoidingView,ScrollView,Platform} 
from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import styles from './styles/styles'
//import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import appFirebase from "../firebase";
//import appFirebase from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
const FormRegister  = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleRegister = () => {
    const auth = getAuth(appFirebase);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("usuario creado correctamente");
        // Aquí puedes navegar a la siguiente pantalla de tu aplicación
        navigation.navigate("Login");
      })
      .catch(() => {
        console.log("El usuario no se creo");
    
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
          style={{ width: 211, height: 217, marginTop: -20 }}
        />
      </View>

          <Text style={styles.title}>Pequelandia</Text>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            onChangeText={(text)=>setEmail(text)}
           
            autoCompleteType="email"
          />
         
        <View style={styles.input}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Contraseña"
          secureTextEntry={!showPassword}
          onChangeText={(text)=>setPassword(text)}
          autoCompleteType="password"
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
         
        
          
          <View style={styles.space} />
          <TouchableOpacity
         onPress={() => navigation.navigate('Login')}>
        <Text style={{ fontSize: 12, color: 'blue', textDecorationLine: 'underline' }}>
          Iniciar sesión
        </Text>
      </TouchableOpacity>
          
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FormRegister ;
