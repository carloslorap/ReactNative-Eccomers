import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import {COLOURS} from '../database/Database';




const Login =({navigation})=> {

  function SvgTop() {
    return (
      <Svg
      width={500}
      height={324} 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
        fill="url(#prefix__paint0_linear_103:6)"
        fillOpacity={0.5}
      />
      <Path
        d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
        fill="url(#prefix__paint1_linear_103:6)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_103:6"
          x1={492.715}
          y1={221.205}
          x2={480.057}
          y2={344.215}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#56bbb1" />
          <Stop offset={1} stopColor="#17696a" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_103:6"
          x1={7.304}
          y1={4.155}
          x2={144.016}
          y2={412.041}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#56bbb1" />
          <Stop offset={1} stopColor="#17696a" />
        </LinearGradient>
      </Defs>
    </Svg>
    )
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop/>
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Hello</Text>
        <Text style={styles.subTitle}>Iniciar sesión en su cuenta</Text>
        <TextInput 
          placeholder="jhon@email.com"
          style={styles.textInput}
        />
        <TextInput 
          placeholder="password"
          style={styles.textInput}
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Olvidaste tu contraseña?</Text>
      
        <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
          style={{
            width: '46%',
            height: '10%',
            backgroundColor: COLOURS.greenBlack,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:15
         
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: 'uppercase',
            }}>
            Ingresar 
          </Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>No tienes una cuenta?</Text>
        <StatusBar style="auto" />
      </View>
    </View>
      
  );
}

export default Login

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex:1
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:80
  },
  containerSVG: {
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 70,
    color: '#111',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 17,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    opacity: 0.5,
    color: COLOURS.black,
    marginTop: 20
  }
  
});