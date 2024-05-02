import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icons from '@expo/vector-icons/MaterialIcons'
import PriceRangeSelector from './PriceRangeSelector'
import { COLOURS } from './database/Database'
import { ScrollView } from 'react-native-gesture-handler'

const MAX_PRICE = 500


export default function FilterView() {

    const [startPrice, setSartPrice] = useState(50)
    const [endPrice, setEndPrice] = useState(250)
    const theme = useTheme()

    return (
        <View style={{ paddingVertical: 24, gap: 24, height: "100%" }}>




            <ScrollView>
                <View style={{
                    marginBottom: 90
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 24,
                    }}>
                        <Text style={{ flex: 1, fontSize: 20, fontWeight: "700" }}>Filtros</Text>
                        <TouchableOpacity>
                            <Text>Resetear</Text>
                        </TouchableOpacity>
                    </View>


                    {/* Ranogo de Precio*/}
                    <PriceRangeSelector minPrice={0} maxPrice={MAX_PRICE} startPrice={startPrice} endPrice={endPrice} onStartPriceChange={setSartPrice} onEndPriceChange={setEndPrice} />

                    {/* Categoria filtro*/}
                    <View style={{ paddingHorizontal: 24, marginTop: 50 }}>
                        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12 }}>Categorias</Text>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
                            {
                                new Array(7).fill("").map((item, i) => {
                                    return (
                                        <Chip itemCount={i} label="Item" isSelected={i === 0} />
                                    )
                                })
                            }
                        </View>
                    </View>


                    {/* Marcas filtro*/}
                    <View style={{ paddingHorizontal: 24, marginTop: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12 }}>Marcas</Text>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
                            {
                                new Array(7).fill("").map((item, i) => {
                                    return (
                                        <Chip itemCount={i} label="Item" isSelected={i === 0} />
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>

            </ScrollView>


            {/* Buttom*/}



            <SafeAreaView edges={["bottom"]} style={{ paddingHorizontal: 24, flex: 1 }}>
                <TouchableOpacity style={{ backgroundColor: COLOURS.greenBlack, display: "flex", height: 52, borderRadius: 20, alignItems: "center", justifyContent: "center", position: "relative", bottom: 28, }}>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: COLOURS.white, textTransform: "uppercase" }}>Aplicar Filtro</Text>
                    <View style={{ backgroundColor: theme.colors.card, width: 40, aspectRatio: 1, borderRadius: 40, alignItems: "center", justifyContent: "center", position: "absolute", top: 12, right: 12, bottom: 12 }}>
                        <Icons name='arrow-forward' size={24} color={COLOURS.backgroundDark} />
                    </View>
                </TouchableOpacity>
            </SafeAreaView>

        </View>
    )
}




const Chip = ({ isSelected, label, itemCount }: { isSelected: boolean, label: String, itemCount: number }) => {
    const theme = useTheme()
    return (
        <View style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 100, backgroundColor: isSelected ? COLOURS.greenBlack : theme.colors.background }}>
            <Text style={{ fontSize: 14, fontWeight: "600", color: isSelected ? theme.colors.background : theme.colors.text }}>{label} {itemCount}</Text>
        </View>
    )
}