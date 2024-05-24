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
import { useDispatch, useSelector } from "react-redux";
import {
  Obtener_Cliente,
  Actualizar_Cliente,
} from "../../redux/slice/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [user, setuser] = useState(null);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();

  const [nombres, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState("");
  const [pais, setPais] = useState("");
  const [genero, setGenero] = useState("");
  const [f_nacimiento, setF_nacimiento] = useState("");
  const [password, setpassword] = useState("");

  const getUser = useSelector((state) => state?.user?.GetUser?.data);

  const getUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("userInfo");
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

  const getTokenData = async () => {
    try {
      const tokenString = await AsyncStorage.getItem("token");
      if (tokenString !== null) {
        const token = JSON.parse(tokenString);
        setToken(token);
      } else {
        setToken(null);
      }
    } catch (error) {
      console.error("Error al obtener token:", error.message);
    }
  };

  useEffect(() => {
    getUserData();
    getTokenData();
  }, []);

  useEffect(() => {
    if (user && token) {
      const id = user?._id;
      dispatch(Obtener_Cliente({ id, token }));
    }
    console.log("conseguiste el id del user");
  }, [dispatch, user, token]);

  useEffect(() => {
    if (getUser) {
      setNombre(getUser.nombres || "");
      setApellidos(getUser.apellidos || "");
      setEmail(getUser.email || "");
      setTelefono(getUser.telefono || "");
      setDni(getUser.dni || "");
      setPais(getUser.pais || "");
      setGenero(getUser.genero || "");
      setF_nacimiento(getUser.f_nacimiento || "");
      setpassword(getUser?.password || "");
    }
  }, [getUser]);

  const Actualizar_Perfil = () => {
    if (user && token) {
      const id = user?._id; 
      const data = {
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        dni: dni,
        pais: pais,
        genero: genero,
        f_nacimiento: f_nacimiento,
        password: password,
      };
      console.log("Actualizando perfil con datos:", data);
      dispatch(Actualizar_Cliente({ id, user: data, token }));
    }
  };

  return (
    <View style={{ height: "100%" }}>
      <ScrollView style={styles.body}>
        <View style={styles.containerHead}></View>
        <View style={styles.perfilImg}>
          <Image
            source={require("../database/images/user-verde.png")}
            style={styles.image}
          />
          <View style={styles.containUser}>
            <Text style={styles.titleUser}>
              {getUser?.nombres} {getUser?.apellidos}
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.userContainer}>
            <TextInput
              placeholder="Nombre"
              style={styles.textInput}
              name="nombres"
              value={nombres}
              onChangeText={(text) => setNombre(text)}
            />
            <TextInput
              placeholder="Apellidos"
              style={styles.textInput}
              name="apellidos"
              value={apellidos}
              onChangeText={(text) => setApellidos(text)}
            />

            <TextInput
              placeholder="example@email.com"
              style={styles.textInput}
              value={email}
              onChangeText={(text) => setEmail(text)}
              readOnly
            />

            {/* <TextInput
              placeholder="Apellidos"
              style={styles.textInput}
              name="genero"
              value={genero}
              onChangeText={(text) => setGenero(text)}
            />

            <TextInput
              placeholder="Apellidos"
              style={styles.textInput}
              name="f_nacimiento"
              value={f_nacimiento}
              onChangeText={(text) => setF_nacimiento(text)}
            /> */}
 
            {/* <TextInput
              placeholder="Apellidos"
              style={styles.textInput}
              name="pais"
              value={pais}
              onChangeText={(text) => setPais(text)}
            /> */}
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
                name="telefono"
                value={telefono}
                onChangeText={(text) => setTelefono(text)}
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
                name="dni"
                value={dni}
                onChangeText={(text) => setDni(text)}
              />
            </View>
            {/* 
            <TextInput
              placeholder="Tu nueva contraseña"
              style={styles.textInput}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setpassword(text)}
            /> */}
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
              onPress={Actualizar_Perfil}
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
