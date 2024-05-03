import {useEffect, useState, useRef} from 'react'
import {StyleSheet, Animated, View, TouchableOpacity} from 'react-native'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'


const Fab = ({ navigation }) => {
    const [toggle, setToggle] = useState(false)
    const options = [
        {
            id: 1,
            icon: 'account-outline',
            action: () => console.log('presionando el boton 1'),
            translation: 'left', /* left, middle, top */
            path:"Profile"
        },
        {
            id: 2,
            icon: 'map-marker',
            action: () => console.log('presionando el boton 2'),
            translation: 'middle', /* left, middle, top */
            path:"Home"  //de por mientras
        },
        {
            id: 3,
            icon: 'cart',
            action: () => console.log('presionando el boton 3'),
            translation: 'top', /* left, middle, top */
            path:"MyCart"
        },
    ]
    
    const animatedValues = {
        animation: useRef(new Animated.Value(0)).current
    }

    const {animation} = animatedValues

    useEffect(() => {
        handleAnimated()
   
    }, [toggle])
    
    const handleAnimated = () => {
        Animated.spring(animation, {
            toValue: toggle ? 1 : 0,
            friction: toggle ? 4 : 8,
            useNativeDriver: false
        }).start()
    } 

    const animatedExpand = {
        transform: [
            {
                scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 5]
                })
            }
        ]
    }

    // const animatedClose = {
    //     transform: [
    //         {
    //             rotate: animation.interpolate({
    //                 inputRange: [0, 1],
    //                 outputRange: ['0deg', '45deg']
    //             })
    //         }
    //     ]
    // }

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setToggle(!toggle)}
                style={[styles.itemContainer, {zIndex: 20, backgroundColor: toggle ? '#17696A' : "#17696A"}]}>
                <Animated.View>
                    {/* <Material name={'plus'} color={'#fff'} size={28}/> */}
                    {/* <Material name={"menu"} color={'#fff'} size={28}/> */}

                    {
                        toggle ? (
                            <Material name={"close"} color={'#fff'} size={24}/>
                     
                        ):(
                            <Material name={"menu"} color={'#fff'} size={24}/> 
                        )
                    }
                </Animated.View>
            </TouchableOpacity>

            {
                options.map(x => 
                    <Animated.View
                        key={x.id}
                        style={[
                            styles.itemContainer, 
                            {
                                backgroundColor: toggle ? '#17696A' : "#1d7777",
                                transform: [
                                    {
                                        translateX: animation.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, x.translation === 'left' ? -100 : x.translation === 'middle' ? -70 : 0]
                                        })
                                    },
                                    {
                                        translateY: animation.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, x.translation === 'top' ? -100 : x.translation === 'middle' ? -70 : 0]
                                        })
                                    }
                                ]
                            }
                        ]}
                    >
                        <TouchableOpacity style={styles.itemButton} onPress={() => {navigation.navigate(x.path),setToggle(!toggle)}}>
                            <Material name={x.icon} color={'#fff'} size={20}/>
                        </TouchableOpacity>
                    </Animated.View>    
                )
            }

            <Animated.View style={[styles.itemContainer, {zIndex: 0, backgroundColor: "#1a7777"}, animatedExpand]} />
        </View>        
    )
}

export default Fab

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    itemContainer: {
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        right: 25,
        borderRadius: 100,
        zIndex: 10
    },
    itemButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    }
})