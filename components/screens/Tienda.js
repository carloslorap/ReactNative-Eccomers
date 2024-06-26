import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Animated,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { COLOURS } from "../database/Database";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BottomSheet from "../BottomSheet";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { AllProucts } from "../../redux/slice/productSlice";

const Tienda = ({ navigation }) => {
  const url = "https://servereccomersangular.onrender.com/api/";

  const products = useSelector((state) => state?.products?.products?.data);
  const loading = useSelector((state) => state?.products?.isLoading);
  const dispatch = useDispatch();

  // buscardor paso 1
  const refInput = useRef();
  const animation = useRef(new Animated.Value(0)).current;
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");

  // const [products, setProducts] = useState([]);
  const [status, setStatus] = React.useState(false);

  // paso 2 del buscaddor
  const handleAnimated = () => {
    Animated.timing(animation, {
      toValue: toggle ? 1 : 0,
      duration: 550,
      useNativeDriver: false,
    }).start();
  };

  //paso 3 del buscador
  useEffect(() => {
    setText("");
    if (!toggle) Keyboard.dismiss();
    else refInput.current.focus();
    handleAnimated();
  }, [toggle]);

  //paso 4 del buscador
  const animatedStyles = {
    width: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"], 
      extrapolate: "clamp",
    }), 
  };

  useEffect(() => {
    dispatch(AllProucts());
  }, [dispatch]);

  useEffect(() => {
    console.log("Cantidad de productos:", products?.length);
  }, [products]);



  //create an product reusable card
  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          data && navigation.navigate("ProductInfo", { productSlug: data.slug })
        }
        style={{
          width: "48%",
          marginVertical: 14,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 100,
            borderRadius: 10,
            backgroundColor: COLOURS.backgroundLight,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          {/* {data.isOff ? (
            <View
              style={{
                position: "absolute",
                width: "20%",
                height: "24%",
                backgroundColor: COLOURS.greenBlack,
                top: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.white,
                  fontWeight: "bold",
                  letterSpacing: 1,
                }}
              >
                {data.offPercentage}%
              </Text>
            </View>
          ) : null} */}
          <Image
            source={{ uri: `${url}obtener_portada/${data?.portada}` }}
            style={{
              width: "100%",
              height: 100,
              resizeMode: "contain",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: "600",
            marginBottom: 2,
          }}
        >
          {data?.titulo}
        </Text>
        {data?.stock >= 1 ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="circle"
              style={{
                fontSize: 12,
                marginRight: 6,
                color: COLOURS.green,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.green,
              }}
            >
              Disponible
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="circle"
              style={{
                fontSize: 12,
                marginRight: 6,
                color: COLOURS.red,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.red,
              }}
            >
              No Disponible
            </Text>
          </View>
        )}
        <Text>S/{data?.precio}</Text>
      </TouchableOpacity>
    );
  };

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
        <Header navigation={navigation} />

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
            Hi-Fi Shop &amp; Service
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

        {/* buscardor */}
        <View
          style={{
            height: 50,
            borderRadius: 50,
            alignSelf: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            overflow: "hidden",
            marginHorizontal: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => setToggle(!toggle)}
            style={{
              width: 47,
              height: 47,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLOURS.backgroundLight,
              position: "absolute",
              left: 1,
              borderWidth: 1.5,
              borderColor: "#fff",
              zIndex: 10,
            }}
          >
            <Octicons
              name="search"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "transparent",
              }}
            />
          </TouchableOpacity>

          <Animated.View
            style={[
              { height: 50, backgroundColor: COLOURS.backgroundLight },
              animatedStyles,
            ]}
          >
            <TextInput
              ref={refInput}
              value={text}
              onChangeText={setText}
              selectionColor={COLOURS.backgroundMedium}
              placeholder={"Comienza a buscar..."}
              placeholderTextColor={COLOURS.backgroundMedium}
              style={{
                height: "100%",
                flex: 1,
                fontSize: 13,
                fontWeight: "bold",
                color: COLOURS.backgroundDark,
                justifyContent: "center",
                alignItems: "flex-start",
                paddingLeft: 60,
              }}
            />
          </Animated.View>

          <View>
            <TouchableOpacity onPress={() => setStatus(true)}>
              <MaterialCommunityIcons
                name="filter-variant-minus"
                style={{
                  fontSize: 18,
                  color: COLOURS.backgroundMedium,
                  padding: 12,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundLight,
                  marginHorizontal: 11,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                }}
              >
                Productos
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: "400",
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              >
                78
              </Text>
            </View>
          </View>

          {loading ? (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 120,
              }}
            >
              <ActivityIndicator color={COLOURS.greenBlack} size={50} />
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {products?.map((data) => {
                return <ProductCard data={data} key={data?._id} />;
              })}
            </View>
          )}
        </View>
      </ScrollView>

      {status && <BottomSheet setStatus={setStatus} />}
    </View>
  );
};

export default Tienda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
