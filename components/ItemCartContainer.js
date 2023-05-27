import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ItemCartContainer = ({ imageSrc, title, location, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Itemlist", { param: data })}
      className="rounded-md border border-black space-y-2 px-3 py-2 shadow-md bg-white w-[180px] my-2"
    >
      <Image source={{ uri: imageSrc }} className=" w-30 h-40 object-cover" />
      {title ? (
        <>
          <Text
            className="text-[#428288] text-[18px] font-bold "
            numberOfLines={1}
          >
            {title}{" "}
          </Text>
          <View className="flex-row items-center space-x-1">
            <FontAwesome name="map-marker" size={20} color="#8597A2" />
            <Text
              className="text-[#8597A2] text-[14px] font-bold"
              numberOfLines={1}
            >
              {location}{" "}
            </Text>
          </View>
        </>
      ) : (
        <>
          <Text
            className="font-semibold text-[#8597A2] text-[15px]"
            numberOfLines={1}
          >
            {" "}
            Food Not Available
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default ItemCartContainer;
