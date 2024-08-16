import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { images } from "../../constants";
import FormInput from "../components/FormInput";
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";
import { signup } from "../../lib/appwrite";

export default function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

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
            Sign up
          </Text>

          <FormInput
            header="Username"
            value={formData.userName}
            placeholder="TheElite999"
            inputType={false}
          />
          <FormInput
            header="Email"
            value={formData.email}
            placeholder="elite@gmail.com"
            inputType={false}
          />
          <FormInput
            header="Password"
            value={formData.password}
            placeholder="***********"
            inputType={true}
          />
          <CustomButton
            title="Sign Up"
            handlePress={() => {
              signup(formData.email,formData.password,formData.userName);
            }}
          />
          <Text className="text-xl text-white mt-8 text-center">
            Already have an account? {""}
            <Link href="/login" className="text-secondary-200">
              Login
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
