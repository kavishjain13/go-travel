import { View, Text, TouchableOpacity } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";
import MenuContainer from "../components/MenuContainer";
import ItemCartContainer from "../components/ItemCartContainer";
import { MaterialIcons } from "@expo/vector-icons";
import { getPlacesData } from "../api";
import { auth } from "../firebase";
import Login from "./Login";

const Discover = () => {


  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState({});
  const navigation = useNavigation();

  const signOutUser = () => {
    auth.signOut().then(()=>{
       navigation.navigate("Login")
    })
    .catch((error)=>alert(error))
};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    setIsLoading(true);
    getPlacesData().then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] mt-3 font-bold">
            Discover
          </Text>
          <Text className="text-[#1a252b] text-[30px]">The beauty today</Text>
        </View>
        <View className="w-12 h-12 rounded-md items-center justify-center bg-gray-700 shadow-2xl mt-3">
          <TouchableOpacity onPress={signOutUser} className="w-10 h-10 bg-black rounded-md ">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover "
          />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row items-center bg-white mx-4 my-5 rounded-xl py-1 px-4 border-2">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "YOUR API KEY",
            language: "en",
          }}
        />
      </View>

      {/* menu option*/}
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer
              key={"hotel"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-1">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>

            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <ItemCartContainer
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51jNu5-JbXL._SX569_.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[350px] items-center space-y-8 justify-center">
                    <MaterialIcons
                      name="not-interested"
                      size={60}
                      color="black"
                    />
                    <Text className="text-2xl text-[#428288] font-semibold">
                      opps... No Data Found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
