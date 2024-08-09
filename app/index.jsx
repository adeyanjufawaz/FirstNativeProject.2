import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link, Redirect, router } from "expo-router";
import { images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

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
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="w-full h-[300px]"
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

          <TouchableOpacity
            onPress={() => router.push("/home")}
            className={`bg-green-500  min-h-80 p-4`}
          >
            <Text>To Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
