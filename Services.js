import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";
import { AntDesign } from "@expo/vector-icons";

import { groups } from "./Datas";
import * as Colors from "./Colors";
import styles from "./styles";

export default function PopUp(props) {
  let services = [];
  for (let i = 0; i < groups[0].services.length; i++) {
    const [toolTipVisible, setToolTipVisible] = useState(false);
    services.push(
      <Text style={[styles.title, { marginLeft: "0%", color: Colors.LTgreen, marginBottom: 5 }]} key={i}>
        {groups[0].services[i].name}
      </Text>
    );
    services.push(
      <Text style={{ color: "black", fontSize: 15, textAlign: "justify" }} key={i + groups[0].services.length}>
        {groups[0].services[i].text}
      </Text>
    );
    services.push(
      <View style={{ flexDirection: "row", marginTop: 15 }} key={i + 2 * groups[0].services.length}>
        <View style={{ flex: 1, alignItems: "center", height: 90 }}>
          <Image
            source={require("./assets/musicien.png")}
            style={{ width: 60, height: 60 }}
            imageStyle={{
              resizeMode: "cover",
            }}
          />
          <Text>{groups[0].services[i].nbMusicians} musiciens</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", height: 90 }}>
          <Image
            source={require("./assets/horloge.png")}
            style={{ width: 60, height: 60 }}
            imageStyle={{
              resizeMode: "cover",
            }}
          />
          <Text>{groups[0].services[i].nbHours} heures</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", height: 90 }}>
          <Image
            source={require("./assets/billets.png")}
            style={{ width: 60, height: 60 }}
            imageStyle={{
              resizeMode: "cover",
            }}
          />
          <Text>{groups[0].services[i].price}</Text>
          <Tooltip
            isVisible={toolTipVisible}
            content={
              <Text style={{ fontSize: 15 }}>
                Il s'agit du <Text style={{ color: Colors.LTgreen }}>prix standard</Text>. Le prix pourra varier en fontion de la durée de la prestation,
                des frais de transport ou encore du matériel supplémentaire à prévoir.
              </Text>
            }
            placement="top"
            onClose={() => setToolTipVisible(false)}
          >
            <TouchableOpacity onPress={() => setToolTipVisible(true)} style={{ width: 30, alignItems: "center" }}>
              <AntDesign name="questioncircle" size={20} color={Colors.LTgrey} />
            </TouchableOpacity>
          </Tooltip>
        </View>
      </View>
    );
    services.push(
      <View style={{ marginTop: 15 }} key={i + 3 * groups[0].services.length}>
        <TouchableOpacity
          style={{
            width: 130,
            height: 40,
            borderRadius: 90,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.LTgreen,
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>Contacter</Text>
        </TouchableOpacity>
      </View>
    );
    if (i != groups[0].services.length - 1) {
      services.push(
        <Text style={{ color: Colors.LTgrey, marginBottom: 15 }} ellipsizeMode="clip" numberOfLines={1} key={i + 4 * groups[0].services.length}>
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </Text>
      );
    }
  }

  return <View style={{ marginTop: 15, marginLeft: "5%", marginRight: "5%" }}>{services}</View>;
}
