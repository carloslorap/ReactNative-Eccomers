import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { COLOURS } from "../database/Database";
import Fab from "../Fab";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Direccion = ({ navigation }) => {
  return (
    <View style={{ height: "100%" }}>
      <ScrollView style={styles.body}>
        <View style={styles.containerHead}></View>
        <View style={styles.perfilImg}>
          <Image
            source={require("../database/images/ubicacion.png")}
            style={styles.image}
          />
          <View style={styles.containUser}>
            <Text style={styles.titleUser}>Añadir Direccion</Text>
            <TouchableOpacity
              style={{
                width: 148,
                height: 38,
                backgroundColor: COLOURS.greenBlack,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 22,
                marginTop: 10,
              }}
              onPress={() => navigation.navigate("DetalleDireccion")}
            >
              <Text
                style={{
                  fontSize: 9,
                  fontWeight: "500",
                  letterSpacing: 1,
                  color: COLOURS.white,
                  textTransform: "uppercase",
                }}
              >
                Ver mi direccion
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.userContainer}>
            <TextInput
              placeholder="Nombre del destinatario"
              style={styles.textInput}
            />
            <TextInput placeholder="Direccion" style={styles.textInput} />

            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 4,
                flexDirection: "row",
                width: "100%",
                gap: 5,
              }}
            >
              <TextInput
                placeholder="codigo postal"
                style={{
                  padding: 10,
                  paddingStart: 30,
                  width: "50%",
                  height: 50,
                  marginTop: 20,
                  borderRadius: 20,
                  backgroundColor: "#fff",
                }}
              />
              <TextInput
                placeholder="DNI"
                style={{
                  padding: 10,
                  paddingStart: 30,
                  width: "50%",
                  height: 50,
                  marginTop: 20,
                  borderRadius: 20,
                  backgroundColor: "#fff",
                }}
              />
            </View>
            <TextInput placeholder="Telefono" style={styles.textInput} />

            <TouchableOpacity
              style={{
                width: 200,
                height: 45,
                backgroundColor: COLOURS.greenBlack,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 24,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  letterSpacing: 1,
                  color: COLOURS.white,
                  textTransform: "uppercase",
                }}
              >
                Agregar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Fab navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "100%",
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
  },

  containUser: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  body: {
    backgroundColor: "#f1f1f1",
  },
  image: {
    width: 85,
    height: 85,
    marginTop: 40,
    marginLeft: 18,
  },
  containerHead: {
    width: "100%",
    height: 90,
    position: "absolute",
    backgroundColor: COLOURS.greenBlack,
  },
  container: {
    padding: 10,
  },
  titleUser: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 24,
    color: "#464E5F",
    marginTop: 12,
  },

  userContainer: {
    padding: 10,
  },
});

export default Direccion;
