import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOURS } from "./database/Database";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Header({ navigation }) {
  const [user, setuser] = useState(null);

  // const handleDelete = async () => {
  //     try {
  //       await AsyncStorage.removeItem("user");
  //       console.log("Datos eliminados correctamente del AsyncStorage.");
  //     } catch (error) {
  //       console.error("Error al eliminar datos del AsyncStorage:", error.message);
  //     }
  //   };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem("user");
        if (userDataString !== null) {
          const user = JSON.parse(userDataString);
          setuser(user);
        } else {
          setuser(null);
        }
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error.message);
      }
    };

    getUserData();
  }, [user]);

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="chevron-left"
          style={{
            fontSize: 18,
            color: COLOURS.backgroundDark,
            padding: 12,
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 12,
          }}
        />
      </TouchableOpacity>
      <View style={{ display: "flex", flexDirection: "row", gap: 11 }}>
        <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
          <MaterialCommunityIcons
            name="cart"
            style={{
              fontSize: 18,
              color: COLOURS.backgroundMedium,
              padding: 12,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: COLOURS.backgroundLight,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (user) {
              navigation.navigate("Profile");
            } else {
              navigation.navigate("Login");
            }
          }}
        >
          {user ? (
            <MaterialCommunityIcons
              name="account"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLOURS.backgroundLight,
              }}
            />
          ) : (
            <Entypo
              name="login"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLOURS.backgroundLight,
              }}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
