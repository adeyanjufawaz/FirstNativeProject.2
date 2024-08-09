import { View, Text } from 'react-native'
import { Link } from "expo-router";
import React from 'react'

export default function Profile() {
  return (
    <View>
      <Text className="text-red-400 text-2xl">profile</Text>
      <Link href="/" className="bg-slate-800 mt-12 p-4">
        Go to Home
      </Link>
    </View>
  );
}