import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { Image } from 'react-native';
import { HeroImage } from '../assets';
import { TouchableOpacity } from 'react-native';

const HomeScreen = () => {

    const navigation = useNavigation();
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    })
  return (
   <SafeAreaView className="bg-white flex-1 relative">
    {/*first Section */}
    <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
            <Text className ="text-white font-semibold text-3xl">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
    </View>
    {/*Second section*/ }
    <View className="px-6 mt-8 space-y-4"> 
        <Text className="text-[#3C6072] text-[37px] font-medium">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[35px] font-bold">Good Moments</Text>
        <Text className="text-[#3C6072] text-base">This is a classic App which will guide you though all the places in your city.</Text>
    </View>

    {/*Circle section */}
    <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36 "></View>
    <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36 "></View>

    {/*Image container */}
    <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
        animation="fadeIn" easing="ease-in-out" source={HeroImage} className="w-full h-full object-cover mt-20"/>

        
    {/*go button*/}
    <TouchableOpacity
    onPress={()=> navigation.navigate("Login")} className="absolute left-10 bottom-16 w-40 h-12 border-l-2 border-r-2 border-t-4 border-[#00BCC9] 
  rounded-full items-center justify-center">
        
        <Animatable.View 
        animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className="w-40 h-12 items-center justify-center rounded-full bg-[#00BCC9]">
            <Text className="text-black text-[20px] font-medium">Login</Text>
  </Animatable.View>

        </TouchableOpacity>
        <TouchableOpacity
    onPress={()=> navigation.navigate("SignUp")} className="absolute right-10 bottom-16 w-40 h-12 border-l-10 border-r-10 border-t-10 border-[#E99265] 
  rounded-full items-center justify-center">
        
        <Animatable.View 
        animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className="w-40 h-12 items-center justify-center rounded-full bg-[#E99265]">
            <Text className="text-black text-[20px] font-medium">SignUp</Text>
  </Animatable.View>
        </TouchableOpacity>


        
    </View>
   </SafeAreaView>
  )
}

export default HomeScreen