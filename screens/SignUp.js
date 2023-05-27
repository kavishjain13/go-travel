import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebase";



const SignUp = ({navigation}) => {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  const register = () =>{

    auth.createUserWithEmailAndPassword(email,password)
    .then(authUser => {
     Alert.alert("Registered"," you have successfully registered ")
    })
  
    .catch((error)=>alert(error.message))
  
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },[navigation]);

  return (
    <SafeAreaView className="flex-1 relative">
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-white font-semibold text-3xl">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>
      <View className="px-6 mt-7 space-y-2 items-center justify-center">
        <Text className="text-[#3C6072] text-[30px] font-medium italic">
          Signup
        </Text>
        <Text className="text-[20px] text-black py-4 font-bold">
          Create your Account
        </Text>
      </View>
      <View className="  mt-7 py-5 rounded-full px-9 flex-row">
        <Text className="  text-[#3C6072] text-[16px] italic text-base ">
          Already have an Account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-[#3C6072] font-extrabold text-base li underline italic text-[17px]">
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View className="static -bottom-80 ">
        <View className="w-[410px] h-[400px] bg-[#00BCC9] rounded-full absolute -bottom-40 -right-44  "></View>
        <View className="w-[410px] h-[400px] bg-[#E99265] rounded-full absolute bottom-30 -left-40 "></View>
      </View>
      <ScrollView>
        <View className=" flex-1 relative py-6 px-8 ">
          <TextInput
            placeholder=" First Name"
            className="w-85 h-14  px-5 bg-gray-300 rounded-full mb-5"
            type="text"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        
          <TextInput
            placeholder="Email"
            className="w-85 h-14  px-5 bg-gray-300 rounded-full mb-5"
            type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            
          />
          <TextInput
            placeholder="Password"
            className="w-85 h-14  px-5 bg-gray-300 rounded-full mb-5"
            secureTextEntry
            type="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={register}
          />
          <TouchableOpacity  className="mt-12 py-1 bg-slate-900 w-70 h-19 justify-center items-center rounded-full" onPress={register}>
            <Text className="text-white text-[20px] mt-3 mb-3">Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
