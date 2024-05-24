import { View, Text, StatusBar, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { COLOURS } from "../database/Database";
import Fab from "../Fab";
import { useDispatch, useSelector } from "react-redux";
import { GetDirecciones } from "../../redux/slice/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DetalleDireccion({ navigation }) {

  const [user, setuser] = useState(null);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();

  const getDireccion = useSelector((state) => state?.user?.direcciones?.data);

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
      dispatch(GetDirecciones({ id, token }));
    }
    console.log("cantidad de direccion:",getDireccion?.length);
  }, [dispatch, user, token]);


  return (
    <View 
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
      }}
    >
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              color: COLOURS.black,
              fontWeight: "500",
              letterSpacing: 1,
              marginBottom: 10,
            }}
          >
            Mis direcciones
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: "400",
              letterSpacing: 1,
              lineHeight: 24,
            }}
          >
            Audio shop on Rustaveli Ave 57.
            {"\n"}This shop offers both products and services
          </Text>
        </View>
        
        {/* item de direcciones */}
        {
          getDireccion?.map((direccion)=>(
            <View style={{ borderWidth: 1, borderColor: COLOURS.greenBlack,marginHorizontal:16,marginVertical:9,padding:18,flexDirection:"row",gap:18,borderRadius: 14,}}>
            <View>
              <Text style={{ fontSize: 25, fontWeight: 600,width:85 }} numberOfLines={1}>{direccion.destinatario}</Text>
              <Text style={{fontSize:13}}>
                Zip: {direccion.zip}  
              </Text> 
            </View>
            <View style={{paddingTop:10}}>
              <Text style={{fontSize:12,width:175}}>
                {direccion.direccion}
              </Text>
              <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:12}}>{direccion.pais} - </Text> 
                  <Text style={{fontSize:12}}>{direccion.region} - </Text>
                  <Text style={{fontSize:12}}>{direccion.provincia} - </Text>
                  <Text style={{fontSize:12}}>{direccion.distrito}</Text>
              </View>
            </View>
          </View>
          ))
        }


      </ScrollView>
      <Fab navigation={navigation} />
    </View>
  );
}
