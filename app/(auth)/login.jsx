import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { images } from "../../constants";
import FormInput from "../components/FormInput";
import CustomButton from "../components/CustomButton"
import { Link } from "expo-router";

export default function Login() {
  const [formData, setFormData] = useState({email: "", password: "" })
  const handlePress = () => {
    console.log("Button Click");
    
  };
  useEffect(()=>{console.log(formData)},[formData])
  return (
    <SafeAreaView>
      <ScrollView className="bg-primary h-full">
        <View className="w-full min-h-full p-6 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[136px] h-[84px]"
          />
          <Text className="font-psemibold text-2xl mb-8 text-white">
            Sign in
          </Text>

          <FormInput
            header="Email"
            value={formData.email}
            placeholder="elite@gmail.com"
            handleChangeText={(e) => setFormData({ ...formData, email: e })}
            inputType={false}
          />
          <FormInput
            header="Password"
            value={formData.password}
            placeholder="***********"
            handleChangeText={(e) => setFormData({ ...formData, password: e })}
            inputType={true}
          />
          <CustomButton title="Login" handlePress={handlePress} />
          <Text className="text-xl text-white mt-8 text-center">
            Dont have an account? {""}
            <Link href="/signup" className="text-secondary-200">
              Sign up
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
