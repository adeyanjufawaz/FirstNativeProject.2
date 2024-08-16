import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../../constants";

export default function FormInput({ header, placeholder,handleChangeText, value }) {
    const [showPass,setShowPass] = useState(false)
  return (
    <View className="mt-4">
      <Text className="text-base text-white">{header}</Text>
      <View className="border w-full h-16 mt-2 px-4 font-psemibold rounded-2xl bg-black-100 border-black-200  focus:border-secondary flex-row justify-center  ">
        <TextInput
          className="flex-1 text-base text-white "
          placeholder={placeholder}
          secureTextEntry={header == "Password" && !showPass}
          value={value}
          onChangeText={handleChangeText}
        />
        {header == "Password" ? (
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Image
              source={!showPass ? icons.eye : icons.eyeHide}
              className="w-8 h-8 mt-4"
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          ""
        )}
      </View>
    </View>
  );
}
