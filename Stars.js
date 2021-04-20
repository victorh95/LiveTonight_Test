import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import * as Colors from "./Colors";

Stars = (props) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    let name = "star";
    if (i > props.rating) {
      name = "staro";
    }
    stars.push(<AntDesign name={name} size={24} color={Colors.LTgreen} key={i} />);
  }

  return <View style={{ flexDirection: "row" }}>{stars}</View>;
};

export default Stars;
