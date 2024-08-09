import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

import { icons } from "../../constants";

const tabIconsArray = [
  { routeName: "home", img: icons.home, name: "Home" },
  { routeName: "bookmark", img: icons.bookmark, name: "Bookmark" },
  { routeName: "create", img: icons.plus, name: "Create" },
  { routeName: "profile", img: icons.profile, name: "Profile" },
];

const TabBarIcon = ({ icon, color, focused, name }) => {
  return (
    <View className="gap-2 justify-center items-center">
      <Image
        source={icon}
        tintColor={color}
        focused={focused}
        resizeMode="contain"
        className="w-6 h-6"
      />
      <Text
        className={`text-white ${
          focused ? "font-psemibold text-yellow-600" : "font-pregular"
        }`}
      >
        {" "}
        {name}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            backgroundColor: "#161622",
            height: 100,
            color: "#fff",
          },
        }}
      >
        {tabIconsArray.map((cur) => {
          const { name, img, routeName } = cur;
          return (
            <Tabs.Screen
              name={routeName}
              key={routeName}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon
                    icon={img}
                    color={color}
                    name={name}
                    focused={focused}
                  />
                ),
              }}
            />
          );
        })}
      </Tabs>
    </>
  );
}
