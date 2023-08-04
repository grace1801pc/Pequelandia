import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "powderblue",
    },
    scrollViewContainer: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    formContainer: {
      width: "130%",
      //height:'70%',
      alignItems: "center",
      padding: '20%',
      backgroundColor: "deepskyblue",
      borderRadius: 10,
      elevation: 5,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
    input: {
      width: "100%",
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      backgroundColor: "white",
    },
    submitButton: {
      width: "100%",
      backgroundColor: "plum",
      paddingVertical: 12,
      borderRadius: 5,
    },
    buttonText: {
      textAlign: "center",
      color: "black",
      fontWeight: "bold",
    },
    imageButton: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: "lightgray",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "deepskyblue",
    },
    buttonImage: {
      width: 60,
      height: 60,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      width: "10%",
      justifyContent: "center",
    },
    passwordInput: {
      // Estilos para el campo de contraseña en sí
      flex: 1,
    },
    eyeIcon: {
      // Estilos para el contenedor del icono del "ojo" dentro del campo de contraseña
      position: 'absolute',
      right: 15,
      padding: 8,
    },
    space: {
      marginBottom: 20, // Ajusta este valor según el espacio deseado
    },
    background: {
      backgroundColor: "black", // Color del fondo que deseas poner
      padding: 5, // Opcional: ajusta el espaciado alrededor de la imagen
      borderRadius: 100,
      justifyContent: "center", // Centra verticalmente
      alignItems: "center",
      flex:7,
    },
  });
  export default styles;