import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
  TextInput,
} from "react-native";
import { COLOURS, Items } from "../database/Database";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { ProuctSlug } from "../../redux/slice/productSlice";
import { SendCart } from "../../redux/slice/userSlice";
import { Picker } from "@react-native-picker/picker";

const ProductInfo = ({ route, navigation }) => {
  const { productSlug } = route.params;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [user, setuser] = useState(null);

  const [selectedVariety, setSelectedVariety] = useState("");
  const url = "https://servereccomersangular.onrender.com/api/";

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

  const Singleproduct = useSelector(
    (state) => state.products?.singleProduct?.data
  );
  const AddCartproduct = useSelector((state) => state?.user?.cartProduct);


  const width = Dimensions.get("window").width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };



  const SendCartProduct =async () => {
    let data = {
      producto: Singleproduct?._id,
      cliente: user?._id,
      cantidad: quantity, 
      variedad: selectedVariety,
    };

    const tokenString = await AsyncStorage.getItem("token");
    const token = JSON.parse(tokenString);

     
 
    dispatch(SendCart({data,token}));

  };

  useEffect(() => {
    dispatch(ProuctSlug(productSlug));
    getUserData();
  }, [dispatch]);

  //product horizontal scroll product card
  const renderProduct = ({ item }) => {
    return (
      <View
        style={{
          width: width, 
          height: 240,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: `${url}obtener_portada/${item?.imagen}` }}
          style={{
            width: "100%",
            height: "135%",
            resizeMode: "contain",
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
        position: "relative",
      }}
    >
      <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />

      <View
        style={{
          width: "100%",
          backgroundColor: COLOURS.backgroundLight,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          // position: 'relative',
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 16,
            paddingLeft: 16,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack("Home")}>
            <Entypo
              name="chevron-left"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundDark,
                padding: 12,
                backgroundColor: COLOURS.white,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={Singleproduct?.galeria ? Singleproduct?.galeria : null}
          horizontal
          renderItem={renderProduct}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.8}
          snapToInterval={width}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            marginTop: 32,
          }}
        >
          {Singleproduct?.galeria
            ? Singleproduct?.galeria.map((data, index) => {
                let opacity = position.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [0.2, 1, 0.2],
                  extrapolate: "clamp",
                });
                return (
                  <Animated.View
                    key={index}
                    style={{
                      width: "16%",
                      height: 2.4,
                      backgroundColor: COLOURS.black,
                      opacity,
                      marginHorizontal: 4,
                      borderRadius: 100,
                    }}
                  ></Animated.View>
                );
              })
            : null}
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
            marginBottom: 90,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 14,
            }}
          >
            <Entypo
              name="shopping-cart"
              style={{
                fontSize: 18,
                color: COLOURS.greenBlack,
                marginRight: 6,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
              }}
            >
              Shopping
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 4,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLOURS.black,
                maxWidth: "84%",
              }}
            >
              {Singleproduct?.titulo}
            </Text>
            <Ionicons
              name="link-outline"
              style={{
                fontSize: 24,
                color: COLOURS.greenBlack,
                backgroundColor: COLOURS.greenBlack + 10,
                padding: 8,
                borderRadius: 100,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: COLOURS.black,
              fontWeight: "400",
              letterSpacing: 1,
              opacity: 0.5,
              lineHeight: 20,
              maxWidth: "85%",
              maxHeight: 44,
              marginBottom: 18,
            }}
          >
            {Singleproduct?.descripcion}
          </Text>

          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              borderBottomColor: COLOURS.backgroundLight,
              borderBottomWidth: 1,
              paddingBottom: 20,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  maxWidth: "85%",
                  color: COLOURS.black,
                  marginBottom: 4,
                }}
              >
                S/{Singleproduct?.precio}.00
              </Text>
              <Text>
                Tax Rate 2%~ &#8377;{Singleproduct?.precio / 20} (&#8377;
                {Singleproduct?.precio + Singleproduct?.precio / 20})
              </Text>
            </View>

            {/* AQUI LO QUIERO */}
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={decrementQuantity}>
                  <Ionicons
                    name="remove"
                    size={24}
                    color="white"
                    style={{
                      backgroundColor: COLOURS.greenBlack,
                      padding: 8,
                      borderRadius: 50,
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    marginHorizontal: 8,
                    padding: 13,
                    paddingHorizontal: 18,
                    borderRadius: 50,
                    backgroundColor: COLOURS.backgroundLight,
                    color: COLOURS.backgroundDark,
                  }}
                >
                  {quantity}
                </Text>
                <TouchableOpacity onPress={incrementQuantity}>
                  <Ionicons
                    name="add"
                    size={24}
                    color="white"
                    style={{
                      backgroundColor: COLOURS.greenBlack,
                      padding: 8,
                      borderRadius: 50,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              marginVertical: 10,
              borderBottomColor: COLOURS.backgroundLight,
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
          >
            <Text style={{ marginBottom: 5 }}>Variedad:</Text>
            <Picker
              selectedValue={selectedVariety}
              onValueChange={(item) => setSelectedVariety(item)}
              style={{
                backgroundColor: COLOURS.backgroundLight,
                color: COLOURS.backgroundDark,
              }}
            >
              <Picker.Item
                label="Seleccione una variedad"
                value="Seleccione una variedad"
              />
              {Singleproduct?.variedades.map((variedad, index) => (
                <Picker.Item
                  key={index}
                  label={variedad.titulo}
                  value={variedad.titulo}
                />
              ))}
            </Picker>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 14,
              borderBottomColor: COLOURS.backgroundLight,
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  color: COLOURS.greenBlack,
                  backgroundColor: COLOURS.backgroundLight,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 12,
                  borderRadius: 100,
                  marginRight: 10,
                }}
              >
                <Entypo
                  name="location-pin"
                  style={{
                    fontSize: 16,
                    color: COLOURS.greenBlack,
                  }}
                />
              </View>
              <Text> Rustaveli Ave 57,{"\n"}17-001, Batume</Text>
            </View>
            <Entypo
              name="chevron-right"
              style={{
                fontSize: 22,
                color: COLOURS.backgroundDark,
              }}
            />
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          // onPress={() =>
          //   Singleproduct?.stock >= 1 ? addToCart(Singleproduct?._id) : null
          // }
          onPress={SendCartProduct}
          style={{
            width: "86%",
            height: "90%",
            backgroundColor: COLOURS.greenBlack,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
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
            {Singleproduct?.stock >= 1 ? "Agregar carrito" : "No disponible"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductInfo;
