import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { COLOURS } from '../database/Database'
import data from '../data'
import Accordion from '../Accordion'
import Fab from '../Fab'

export default function MyOrders({navigation}) {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
      }}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>

        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}>
          <Text 
            style={{
              fontSize: 26,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 10,
            }}>
            Mis ordenes de compra
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: '400',
              letterSpacing: 1,
              lineHeight: 24,
            }}>
            Audio shop on Rustaveli Ave 57.
            {'\n'}This shop offers both products and services
          </Text>
        </View>

          {
            data.map((value,index)=>{
              return(
                <Accordion value={value} key={index}/>
              )
            })
          }
    
      </ScrollView>
      <Fab navigation={navigation}/>
    </View>
  )
}




