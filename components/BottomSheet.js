import { View, Text, Animated,Pressable } from "react-native";
import React from "react";

import FilterView from "./FilterView";


const BottomSheet = ({setStatus}) => {

  const slide = React.useRef(new Animated.Value(700)).current;

  const slideUp = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slide, {
      toValue: 700, 
      duration: 800, 
      useNativeDriver: true,
    }).start(); 
  };

  React.useEffect(() => {

    setTimeout(()=>{
      slideUp();
    },10)

  }, []);


  const closeModal =()=>{
    slideDown()
    setTimeout(()=>{
        setStatus(false);
    },500)
    
  }

  return (
    <Pressable
        onPress={closeModal}
      style={{
        position: "absolute",
        flex: 1,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
      }}
    >
      <Pressable style={{width:"100%",height:"80%"}}>
      <Animated.View
        style={[
          {
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingVertical: 20,
          },
          { translateY: slide },
        ]} 
      >
        {/* contenido del BottomSheet */}
        <FilterView/>
        {/* <RangePrice/> */}
        {/* <View>
          <Text>Min Price</Text>
          <View style={{borderColor:"#EBECF2",borderWidth:1,padding:10,marginTop:5,borderRadius:5}}>
            <Text>$10</Text>
          </View>
        </View>
        <View>
          <Text>Max Price</Text>
          <View style={{borderColor:"#EBECF2",borderWidth:1,padding:10,marginTop:5,borderRadius:5}}>
            <Text>$100</Text>
          </View>
        </View> */}

      </Animated.View>
      </Pressable>
    </Pressable>
  );
};

export default BottomSheet;
