import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Menu() {
  return (
    <View>
      <Image
        source={{ uri: "https://res.cloudinary.com/dcyafbpoh/image/upload/f_auto,g_auto,q_auto:eco/avatar5Fichier_5.svg" }}
        style={{ width: 150, height: 150, marginTop: 20, marginBottom: 8, alignSelf: "center" }}
        imageStyle={{
          resizeMode: "cover",
        }}
      />
      <TouchableOpacity style={{ marginBottom: 25 }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 15 }}>Connexion</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
        <Image source={require("./assets/musicien.png")} style={{ width: 40, height: 40, marginLeft: 15 }} resizeMode={"contain"} />
        <Text style={{ marginLeft: 8, fontWeight: "bold", fontSize: 25, textDecorationLine: "underline" }}>Musiciens</Text>
      </View>

      {/*Buttons for the "Musiciens" category*/}
      <TouchableOpacity style={{ marginLeft: 75, marginBottom: 10 }}>
        <Text style={{ fontSize: 15 }}>Demande de devis</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 75, marginBottom: 10 }}>
        <Text style={{ fontSize: 15 }}>Musiciens mariage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 75, marginBottom: 10 }}>
        <Text style={{ fontSize: 15 }}>Musiciens soirées d'entreprise</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 75, marginBottom: 10 }}>
        <Text style={{ fontSize: 15 }}>Musiciens anniversaire</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 75, marginBottom: 10 }}>
        <Text style={{ fontSize: 15 }}>Tous les musiciens</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 75, marginBottom: 25 }}>
        <Text style={{ fontSize: 15 }}>Tous les DJs</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={require("./assets/outils.png")} style={{ width: 40, height: 40, marginLeft: 15 }} resizeMode={"contain"} />
        <Text style={{ marginLeft: 8, fontWeight: "bold", fontSize: 25, textDecorationLine: "underline" }}>Utiles</Text>
      </View>

      {/*Buttons for the "Utiles" category*/}
      <TouchableOpacity style={{ marginLeft: 75, marginBottom: 10 }}>
        <Text style={{ fontSize: 15 }}>Les concerts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 75, marginBottom: 10 }}>
        <Text style={{ fontSize: 15 }}>Musiciens: comment ça marche ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 75, marginBottom: 10 }}>
        <Text style={{ fontSize: 15 }}>J'ai besoin d'aide</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 75 }}>
        <Text style={{ fontSize: 15 }}>Inscription</Text>
      </TouchableOpacity>
    </View>
  );
}
