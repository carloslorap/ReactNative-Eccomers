import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/Home";
import MyCart from "./components/screens/MyCart";
import ProductInfo from "./components/screens/ProductInfo";
import Login from "./components/screens/Login";
import Tienda from "./components/screens/Tienda";
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from "react-native-gesture-handler";



const Stack = createNativeStackNavigator();

export default function App() {
  return (

      <GestureHandlerRootView style={{flex:1}}>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Tienda" component={Tienda} />
            <Stack.Screen name="MyCart" component={MyCart} />
            <Stack.Screen name="ProductInfo" component={ProductInfo} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>


  );
}

// const styles = StyleSheet.create({
//   tabBar: {
//     height: 70,
//     position: "absolute",
//     bottom: 25,
//     marginHorizontal: 16,
//     borderRadius: 16,
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 0.5,
//     borderColor: "#dadada",
//   },
// });
