import React from "react";
import { View, Modal, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { groups } from "./Datas";
import * as Colors from "./Colors";

export default function PopUp(props){
  return (
    <Modal animationType="slide" transparent={true} visible={props.popUpVisible}>
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
        <View
          style={{
            width: "85%",
            height: 550,
            marginTop: 75,
            backgroundColor: "white",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <ScrollView style={{ margin: 20, marginTop: 100 }}>
            <Text>{groups[0].directory_preview}</Text>
          </ScrollView>
        </View>

        <View
          style={{
            width: "90%",
            height: 60,
            alignSelf: "center",
            marginTop: "25%",
            elevation: 1,
            position: "absolute",
            backgroundColor: Colors.LTdarkblue,
          }}
        >
          <TouchableOpacity
            onPress={props.closePopUp}
            style={{
              width: 30,
              height: 30,
              position: "absolute",
              right: 0,
              justifyContent: "center",
              alignItems: "center",
              elevation: 2,
            }}
          >
            <FontAwesome name="close" size={25} color={Colors.LTblue} />
          </TouchableOpacity>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>Aperçu du répertoire</Text>
            <Image source={require("./assets/trompette.png")} style={{ width: 30, height: 30, marginLeft: 5 }} resizeMode={"contain"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
