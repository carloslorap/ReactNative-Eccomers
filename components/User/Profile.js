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

const Profile = ({ navigation }) => {
  return (
   <View style={{height:"100%"}}>
     <ScrollView style={styles.body}>
      <View style={styles.containerHead}></View>
      <View style={styles.perfilImg}>
        <Image
          source={require("../database/images/user-verde.png")}
          style={styles.image}
        />
        <View style={styles.containUser}>
          <Text style={styles.titleUser}>Carlos Enrique Lora Puma</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <TextInput placeholder="Nombre" style={styles.textInput} />
          <TextInput placeholder="Apellidos" style={styles.textInput} />
          <TextInput placeholder="example@email.com" style={styles.textInput} />

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
              placeholder="Telefono"
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

          <TextInput
            placeholder="Tu nueva contraseña"
            style={styles.textInput}
            secureTextEntry={true}
          />
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
              Actualizar perfil
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

    <Fab navigation={navigation}/>
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

export default Profile;
