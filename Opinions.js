import React from "react";
import { View, Text, Image } from "react-native";

import Stars from "./Stars";
import { groups } from "./Datas";
import * as Colors from "./Colors";

export default function Opinions(props) {
  let opinions = [];
  for (let i = 0; i < groups[0].opinions.length; i++) {
    opinions.push(
      <View style={{ marginTop: 15, marginBottom: 15 }} key={i}>
        <Image
          source={{ uri: groups[0].opinions[i].profilePicture }}
          style={{ width: 80, height: 80, marginBottom: 5, alignSelf: "center" }}
          imageStyle={{
            resizeMode: "cover",
          }}
        />
        <Text style={{ fontSize: 13, marginBottom: 10, alignSelf: "center" }}>{groups[0].opinions[i].username}</Text>
        <Text style={{ fontSize: 15, marginBottom: 7 }}>{groups[0].opinions[i].text}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              alignSelf: "center",
              marginRight: 5,
              color: Colors.LTgrey,
              fontSize: 15,
            }}
          >
            {groups[0].opinions[i].date} -
          </Text>
          <Stars rating={groups[0].opinions[i].rating} />
        </View>
      </View>
    );
    if (i != groups[0].opinions.length - 1) {
      opinions.push(
        <Text style={{ color: Colors.LTgrey, marginBottom: 15 }} ellipsizeMode="clip" numberOfLines={1} key={i + 4 * groups[0].services.length}>
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </Text>
      );
    }
  }

  return <View style={{ marginTop: 15, marginLeft: "5%", marginRight: "5%" }}>{opinions}</View>;
}
