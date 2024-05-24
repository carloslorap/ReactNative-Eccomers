import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/Home";
import MyCart from "./components/screens/MyCart";
import ProductInfo from "./components/screens/ProductInfo";
import Login from "./components/screens/Login";
import Tienda from "./components/screens/Tienda";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Profile from "./components/User/Profile";
import Direccion from "./components/User/Direccion";
import MyOrders from "./components/User/MyOrders";
import { Provider } from "react-redux";
 import  store  from "./redux/store";
import DetalleDireccion from "./components/User/DetalleDireccion";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
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

            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Direccion" component={Direccion} />
            <Stack.Screen name="DetalleDireccion" component={DetalleDireccion} />
            <Stack.Screen name="MyOrders" component={MyOrders} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
  </Provider>
  );
}
