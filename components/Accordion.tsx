import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { Category } from './data'
import Animated, { Extrapolate, interpolate, measure, runOnUI, useAnimatedRef, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'
import { COLOURS } from './database/Database'



type Props = {
    value: Category
}

export default function Accordion({ value }: Props) {
    const listRef = useAnimatedRef<Animated.View>()
    const heightValue = useSharedValue(0)

    const open = useSharedValue(false)
    const progress = useDerivedValue(() => open.value ? withTiming(1) : withTiming(0))

    const heightAnimationStyle = useAnimatedStyle(() => (
        {
            height: interpolate(
                progress.value,
                [0, 1],
                [0, heightValue.value],
                Extrapolate.CLAMP,

            )
        }
    ))

    return (
        <View style={styles.container}>
            <Pressable style={styles.titleContainer} onPress={() => {
                if (heightValue.value === 0) {
                    runOnUI(() => {
                        'worklet';
                        heightValue.value = measure(listRef).height
                    })()
                }
                open.value = !open.value
            }}>
                <Text style={styles.textTitle} numberOfLines={1}>
                    # {value.title}
                </Text>

                <Text style={styles.textFecha} numberOfLines={1}>
                    {value.type}
                </Text>
                <Text style={styles.textPrice} numberOfLines={1}>
                    S/{value.price}
                </Text>
            </Pressable>
            <Animated.View style={heightAnimationStyle}>
                <Animated.View ref={listRef} style={styles.contentContainer}> 
                    {
                        value.contentNested.map((v, i) => {
                            return (
                                <View key={i} style={styles.content}>
                                    {
                                        v.product.map((subV, subI) => {
                                            return (
                                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10,paddingBottom:6,borderBottomWidth:1,borderColor:COLOURS.backgroundMedium }}>
                                                    <View style={{ flexDirection: "row", gap: 6 }}>
                                                        <View style={{ justifyContent: "center", backgroundColor: COLOURS.white, alignItems: "center", height: 100, width: 70 }}>
                                                            <Image source={subV.image} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                                                        </View>
                                                        <View style={{ flexDirection: "column", marginTop: 18 }}>
                                                            <Text style={{ fontSize: 12, width: 90 }} numberOfLines={1}>{subV.titleProduct}</Text>
                                                            <Text style={{ fontSize: 12, color: COLOURS.backgroundDark }}>{subV.categoryP}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={{ flexDirection: "column", marginLeft: 11, marginTop: 18 }}>
                                                        <View style={{ flexDirection: "row", gap: 8 }}>
                                                            <Text style={{ fontSize: 12, color: COLOURS.backgroundDark }} numberOfLines={1}>Precio</Text>
                                                            <Text style={{ fontSize: 12, color: COLOURS.backgroundDark }}>Qt</Text>
                                                        </View>

                                                        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                                                            <Text style={{ fontSize: 12 }} numberOfLines={1}>S/{subV.priceP}</Text>
                                                            <Text style={{ fontSize: 12 }}>{subV.cantidadP}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={{ flexDirection: "column", marginTop: 18 }}>
                                                        <View style={{ flexDirection: "row", gap: 8 }}>
                                                            <Text style={{ fontSize: 12, color: COLOURS.backgroundDark }} numberOfLines={1}>SubTotal</Text>

                                                        </View>

                                                        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                                                            <Text style={{ fontSize: 12 }} numberOfLines={1}>S/120</Text>

                                                        </View>
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }
                                    {/* <Text style={styles.textContent}>{v.titleV}</Text> */}
                                </View>
                            )
                        })
                    }
                </Animated.View>
            </Animated.View>

        </View>


    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOURS.white,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: COLOURS.greenBlack,
        overflow: "hidden",


    },
    titleContainer: {
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between"
    },
    textTitle: {

        width: 160,
        fontSize: 15,
        color: COLOURS.greenBlack,
    },
    textFecha: {
        paddingTop: 5,
        fontSize: 11,
        color: "grey"
    },
    textPrice: {

        fontSize: 14,
        color: "black"
    },
    contentContainer: {
        position: "absolute",
        top: 0,
        width: "100%"
    },
    content: {
        padding: 20,
        backgroundColor: COLOURS.backgroundLight,
  
    },
    textContent: {
        fontSize: 14,
        color: "black"
    },


})