import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
const Levels = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#c8e2f7" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
        }}
      >
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            borderWidth: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/levels.png")}
            style={{ height: 35, width: 35 }}
          />
        </View>
        <Text style={{ fontSize: 20, marginLeft: 10 }}>Levels</Text>
      </View>
      <TouchableHighlight style={{ width: "50%", borderRadius: 30,marginTop:30 }} onPress={()=>navigation.navigate("Questions")}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 10,
            backgroundColor: "#1d1f4f",
            borderRadius: 30,
            padding:4
          }}
        >
          <Image
            source={require("../assets/easy.png")}
            style={{
              height: 60,
              width: 60,
              backgroundColor: "white",
              borderRadius: 30,
            }}
          />
          <Text style={{ fontSize: 25, marginLeft: 10, color: "white" }}>
            Easy
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={{ width: "50%", borderRadius: 30,marginTop:30 }} onPress={()=>navigation.navigate("Questions")}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 10,
            backgroundColor: "#1d1f4f",
            borderRadius: 30,
            padding:4
          }}
        >
        <Text style={{ fontSize: 25, marginLeft: 10, color: "white" }}>
          Medium
          </Text>
          <Image
            source={require("../assets/medium.png")}
            style={{
              height: 60,
              width: 60,
              backgroundColor: "white",
              borderRadius: 30,
            }}
          />
          
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={{ width: "50%", borderRadius: 30,marginTop:30 }} onPress={()=>navigation.navigate("Questions")}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 10,
            backgroundColor: "#1d1f4f",
            borderRadius: 30,
            padding:4
          }}
        >
          <Image
            source={require("../assets/hard.png")}
            style={{
              height: 60,
              width: 60,
              backgroundColor: "white",
              borderRadius: 30,
            }}
          />
          <Text style={{ fontSize: 25, marginLeft: 10, color: "white" }}>
            Hard
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Levels;

const styles = StyleSheet.create({});
