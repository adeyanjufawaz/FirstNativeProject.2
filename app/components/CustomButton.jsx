import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from 'react'

export default function CustomButton({ title, handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffa001",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 7,
    marginTop: 20,
  },
});