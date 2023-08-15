import * as React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const MyMenu = ({route,navigation}) => {
    const { userEmail } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.buttonContainer}>
        <Text style={styles.title}>Menú</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => navigation.navigate("Figura")}
          >
            <Image
              source={require("../../assets/formas.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Formas y Colores</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => console.log("Botón  presionado")}
          >
            <Image
              source={require("../../assets/animales.jpg")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Animales</Text>
          </TouchableOpacity>
        </View>
        {/* FILA NUMERO 2*/}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => console.log("Botón  presionado")}
          >
            <Image
              source={require("../../assets/frutas.jpg")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Frutas</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => console.log("Botón  presionado")}
          >
            <Image
              source={require("../../assets/numeros.jpg")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Números</Text>
          </TouchableOpacity>
        </View>
        {/* FILA NUMERO 3 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => console.log("Botón  presionado")}
          >
            <Image
              source={require("../../assets/medios_transporte.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Medios de Transporte</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => console.log("Botón  presionado")}
          >
            <Image
              source={require("../../assets/estado.jpg")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Estado de ánimo</Text>
          </TouchableOpacity>
        </View>
        {/*FILA NUMERO 4 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => navigation.navigate("Abecedario")}
          >
            <Image
              source={require("../../assets/abecedario.jpg")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Abecedario</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => console.log("Botón  presionado")}
          >
            <Image
              source={require("../../assets/partes.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Partes del cuerpo humano</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "powderblue",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImage: {
    width: 110,
    height: 110,
    borderRadius:20,
    marginTop:15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop:50,
  },
  separator: {
    width: 50
  },
  imageButton: {
    width: 170,
    height: 170,
    borderRadius: 10,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "deepskyblue",
  },
  buttonText: {
    fontWeight: "bold",
    marginTop: 1,
    textAlign: "center",
  },
});

export default MyMenu;
