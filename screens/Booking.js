import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import RazorpayCheckout from 'react-native-razorpay';
const Booking = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <ScrollView className="px-4 py-6 flex-1 relative">
        <View className="items-center">
          <View className="flex-row mt-8 items-center space-x-2">
            <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
              <Text className="text-white font-semibold text-3xl">Go</Text>
            </View>
            <Text className="text-[#2A2B4B] text-3xl font-semibold">
              Travel
            </Text>
          </View>
        </View>
        <View className=" bg-slate-200 mt-5 rounded-2xl">
          <View className="flex-row items-center justify-between px-3 mt-3">
            <View className="px-1">
              <Text
                className="text-[20px] text-[#0B646B] font-light italic"
                numberOfLines={1}
              >
                {data?.name}
              </Text>
              <View className="flex-row items-center space-x-2 mt-2">
                <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
                <Text className=" text-[#8C9EA6] text-[20px] font-bold">
                  {data?.location_string}
                </Text>
              </View>
            </View>
            <View className="w-20 h-20  mx-2 rounded-md items-center justify-center bg-gray-100 mt-2">
              <Image
                source={{
                  uri: data?.photo?.images?.large?.url
                    ? data?.photo?.images?.large?.url
                    : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51jNu5-JbXL._SX569_.jpg",
                }}
                className="w-20 h-20 rounded-md"
              />
            </View>
          </View>
          <View className="mt-6 w-full mb-2 ">
            <Text className="text-[20px] font-bold items-center justify-between px-2 rounded-full">
              {data?.address}
            </Text>
          </View>
          <View className="mt-1 w-full  ">
            <Text className="text-[20px] text-[#5d7e8c] items-center justify-between px-2 rounded-full">
              {data?.ranking}
            </Text>
          </View>

          <View className="mt-2 w-full mb-5">
            <Text className="text-[20px] text-[#5d7e8c] items-center justify-between px-2 rounded-full">
              {data?.num_reviews} people visited this place
            </Text>
          </View>
        </View>

        <View className=" mt-4 bg-slate-200 rounded-2xl shadow-sm h-35">
          <View className="items-center justify-center mt-1 ">
            <Text className="  text-[25px] uppercase mt-1">
              Enter your details
            </Text>
          </View>
          <View className="w-full h-20 flex-row mt-3 mb-4 ">
            <View className="border-black border-[2px] w-60 h-12 mt-3 mx-3  rounded-3xl">
              <TouchableOpacity className="w-50 items-center justify-center ">
                <Text className="text-[20px] text-gray-400 py-1"> Date</Text>
              </TouchableOpacity>
            </View>
            <View className="border-black border-[2px] w-35 mx-3 px-2 h-12 mt-3  rounded-3xl">
              <TouchableOpacity className="w-25 px-3 items-center justify-center">
                <Text className="text-[20px] text-gray-400 py-1 items-center justify-center">
                  Time
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="mt-40 w-full h-full">
          
        <TouchableOpacity className="mt-5 px-4 py-4 rounded-full bg-[#06B2BE] items-center justify-center " onPress={() => {var options = {
    description: 'Booking',
    image: 'https://i.imgur.com/3g7nmJC.jpg',
    currency: 'INR',
    key: 'rzp_test_VIhFAsMae5vpSS',
    amount: '5000',
    name: 'Acme Corp',
    order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
    theme: {color: '#53a20e'}
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
}}>
            <Text className=" text-[25px] font-medium uppercase tracking-wider text-gray-100">
              Proceed to pay
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Booking;
