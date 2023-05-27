import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Discover");
        
      }
    });
    return unsubscribe;
  }, []);

  const SignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="flex-1 relative">
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-white font-semibold text-3xl">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>
      <View className="px-6 mt-7 space-y-2">
        <Text className="text-[#3C6072] text-[30px] font-medium">
          Welcome to Go Travel,
        </Text>
        <Text className="text-[#00BCC9] text-[30px] font-bold">
          SignIn to continue.
        </Text>
      </View>

      <View className="space-y-2 mt-4 px-6 flex-row">
        <Text className=" mb-0 mt-2 text-[#3C6072] text-[16px] italic text-base ">
          Don't have an Account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text className="text-[#3C6072] font-extrabold text-base underline italic text-[17px]">
            Create an account{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <View className="px-6 ">
        <Text className="text-[#3C6072] text-[16px] italic text-base">
          It takes less the a minute.
        </Text>
      </View>
      <View className="static -bottom-80 ">
        <View className="w-[410px] h-[400px] bg-[#00BCC9] rounded-full absolute -bottom-40 -right-44  "></View>
        <View className="w-[410px] h-[400px] bg-[#E99265] rounded-full absolute bottom-30 -left-40 "></View>
      </View>
      <ScrollView>
        <View className=" flex-1 relative align-top py-12 px-8 ">
          <TextInput
            type="email"
            placeholder="Email/Username"
            className="w-85 h-14  px-5 bg-gray-300 rounded-full"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            type="password"
            placeholder="Password"
            secureTextEntry
            className="w-85 h-14 mt-5 px-5 bg-gray-300 rounded-full "
            value={password}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={SignIn}
          />
          <TouchableOpacity className="justify-center items-center mt-5">
            <Text className=" font-extrabold text-base underline italic text-[18px] text-stale-900">
              forget Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={SignIn}
            className="mt-10 py-1 bg-slate-900 w-70 h-19 justify-center items-center rounded-md"
          >
            <Text className="text-white text-[20px] mt-3 mb-3">LogIn</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mt-7 py-1 bg-gray-200 w-70 h-19 justify-center items-center rounded-md">
            <Text className="text-black text-[15px] mt-3 mb-3">
              SignIn with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
