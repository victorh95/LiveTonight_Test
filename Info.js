import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { infos } from "./Datas";

Info = (props) => {
  let info = [];
  info.push(
    <Text
      style={{
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
      }}
      key={0}
    >
      {infos[0].title}
    </Text>
  );
  info.push(
    <Text style={{ textAlign: "center", color: "white", fontSize: 15 }} key={1}>
      {infos[0].text}
    </Text>
  );

  if (props.hide)
    return (
      <View style={{ width: "100%", backgroundColor: "#3CE295" }}>
        {info}
        <TouchableOpacity onPress={props.closeInfo} style={{ width: 22, height: 22, position: "absolute", bottom: 0, right: 0 }}>
          <AntDesign name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  else return null;
};

export default Info;
