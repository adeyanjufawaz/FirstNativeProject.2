import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import "react-native-url-polyfill/auto";
import { images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "./components/CustomButton";

const handlePress = () => {router.push("/login")}

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView
        className="bg-primary h-full"
        contentContainerStyle={{ height: "100%" }}
      >
        <View className=" h-full w-full justify-center items-center px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[136px] h-[84px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="w-[380px] h-[300px]"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities With{" "}
              <Text className=" !text-secondary-200">Aora</Text>{" "}
            </Text>
          </View>

          <Text className="text-sm mt-7 text-gray-100 font-pregular text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton title="Continue with Email" handlePress={handlePress} mt={50} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffa001",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius:7,
    marginTop:50
  },
});
