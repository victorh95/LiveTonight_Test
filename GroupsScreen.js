import React, { useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import ViewMoreText from "react-native-view-more-text";
import YoutubePlayer from "react-native-youtube-iframe";
import Tooltip from "react-native-walkthrough-tooltip";
import { Feather, AntDesign } from "@expo/vector-icons";

import { groups } from "./Datas";
import Stars from "./Stars";
import Info from "./Info";
import PopUp from "./PopUp";
import Services from "./Services";
import Opinions from "./Opinions";
import * as Colors from "./Colors";
import styles from "./styles";

function renderViewMore(onPress) {
  return (
    <Text
      onPress={onPress}
      style={{
        marginLeft: "5%",
        textDecorationLine: "underline",
        color: Colors.LTgreen,
        marginBottom: 30,
      }}
    >
      en savoir plus
    </Text>
  );
}

function renderViewLess(onPress) {
  return (
    <Text
      onPress={onPress}
      style={{
        marginLeft: "5%",
        textDecorationLine: "underline",
        color: Colors.LTgreen,
        marginBottom: 30,
      }}
    >
      réduire
    </Text>
  );
}

export default function Brocoli({ navigation }) {
  const [infoVisible, setInfoVisible] = useState(true);
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [ref, setRef] = useState(null);
  const [toolTipVisible1, setToolTipVisible1] = useState(false);
  const [toolTipVisible2, setToolTipVisible2] = useState(false);
  const [toolTipVisible3, setToolTipVisible3] = useState(false);

  const closeInfo = () => {
    setInfoVisible(false);
  };

  const openPopUp = () => {
    setPopUpVisible(true);
  };

  const closePopUp = () => {
    setPopUpVisible(false);
  };

  return (
    <View style={styles.container}>
      <Info hide={infoVisible} closeInfo={closeInfo} />

      <View
        style={{
          flexDirection: "row",
          height: 65,
          borderBottomWidth: 0.5,
          borderColor: Colors.LTgrey,
        }}
      >
        <TouchableOpacity
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Image
            source={require("./assets/logo.png")}
            style={{ width: 150, height: 30 }}
            imageStyle={{
              resizeMode: "cover",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            position: "absolute",
            right: 0,
          }}
          onPress={() => navigation.openDrawer()}
        >
          <Feather name="menu" size={35} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        ref={(ref) => {
          setRef(ref);
        }}
        showsVerticalScrollIndicator={false}
      >
        {/*Banner*/}
        <Image
          source={groups[0].banner}
          style={{
            width: "100%",
            height: 200,
            position: "absolute",
          }}
          imageStyle={{
            resizeMode: "cover",
          }}
        />

        {/*Profile picture*/}
        <View
          style={{
            width: 173,
            height: 173,
            marginTop: 100,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            source={groups[0].profilePicture}
            style={{ width: 165, height: 165 }}
            imageStyle={{
              resizeMode: "cover",
            }}
          />
        </View>

        {/*Group informations*/}
        <Text style={[styles.title, { marginLeft: "0%", marginBottom: 10, textAlign: "center" }]}>{groups[0].name}</Text>
        <Text style={styles.text}>{groups[0].styles}</Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Stars rating={groups[0].rating} />
          <Text
            style={{
              alignSelf: "center",
              marginLeft: "2%",
              color: "black",
              fontSize: 15,
            }}
          >
            ({groups[0].nbReviews} avis)
          </Text>
        </View>
        <Text style={styles.text}>{groups[0].services[0].price}</Text>

        {/*Button "Réserver"*/}
        <TouchableOpacity
          onPress={() => ref.scrollTo({ x: 0, y: 1800, animated: true })}
          style={{
            width: 130,
            height: 40,
            borderRadius: 90,
            borderWidth: 1,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 15,
          }}
        >
          <Text style={styles.TEXT}>Réserver</Text>
        </TouchableOpacity>

        {/*"Présentation" part*/}
        <Text style={styles.title}>Présentation</Text>
        <View style={styles.greyLine} />
        <ViewMoreText
          numberOfLines={10}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}
          textStyle={{
            marginLeft: "5%",
            marginRight: "5%",
            textAlign: "justify",
          }}
        >
          <Text>{groups[0].presentation}</Text>
        </ViewMoreText>

        {/*Videos*/}
        <View style={{ alignItems: "center" }}>
          <YoutubePlayer width={"90%"} height={180} play={false} videoId={"f2PA1grSHGg"} />
          <Text style={{ textAlign: "center", fontStyle: "italic", fontSize: 15, color: "#969695", marginTop: 15, marginBottom: 15 }}>
            When Hollywood Goes Black
          </Text>
          <YoutubePlayer width={"90%"} height={180} play={false} videoId={"Tr8OA-PJfe8"} />
          <Text style={{ textAlign: "center", fontStyle: "italic", fontSize: 15, color: "#969695", marginTop: 15, marginBottom: 15 }}>
            Teaser EP / Walkin' One and Only
          </Text>
          <YoutubePlayer width={"90%"} height={180} play={false} videoId={"W7NcC0CWl6I"} />
          <Text style={{ textAlign: "center", fontStyle: "italic", fontSize: 15, color: "#969695", marginTop: 15, marginBottom: 15 }}>Deed I Do</Text>
        </View>

        {/*Frame "Informations pratiques"*/}
        <View
          style={{ width: "90%", height: 220, alignSelf: "center", borderRadius: 3, borderWidth: 0.5, borderColor: Colors.LTgrey, marginBottom: 15 }}
        >
          <Text style={[styles.title, { marginBottom: 10 }]}>Informations pratiques</Text>
          <View style={{ width: "90%", height: "75%", alignSelf: "center", borderLeftWidth: 0.5, borderColor: Colors.LTgrey }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("./assets/maison.png")} style={{ width: 40, height: 40, marginLeft: 15 }} resizeMode={"contain"} />
              <Text style={{ width: 227, marginLeft: 8, fontSize: 15 }}>{groups[0].localisation}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("./assets/micro.png")} style={{ width: 40, height: 40, marginLeft: 15 }} resizeMode={"contain"} />
              <Text style={{ width: 227, marginLeft: 8, fontSize: 15 }}>{groups[0].styles}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("./assets/radio.png")} style={{ width: 40, height: 40, marginLeft: 15 }} resizeMode={"contain"} />
              <Text style={{ width: 227, marginLeft: 8, fontSize: 15 }}>{groups[0].cover}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("./assets/engrenage.png")} style={{ width: 40, height: 40, marginLeft: 15 }} resizeMode={"contain"} />
              <Text style={{ width: 227, marginLeft: 8, fontSize: 15 }}>{groups[0].equipment}</Text>
            </View>
          </View>
        </View>

        {/*GIF*/}
        <Image
          source={require("./assets/services.gif")}
          style={{ width: "90%", height: 100, alignSelf: "center", marginBottom: 15 }}
          resizeMode={"contain"}
        />

        {/*"Aperçu du répertoire" part*/}
        <Text style={styles.title}>Aperçu du répertoire</Text>
        <View style={styles.greyLine} />
        <Text
          style={{
            marginLeft: "5%",
            marginRight: "5%",
          }}
          numberOfLines={3}
        >
          {groups[0].directory_preview}
        </Text>
        <TouchableOpacity style={{ width: 120, height: 20, marginLeft: "5%", marginBottom: 15 }} onPress={() => openPopUp()}>
          <Text
            style={{
              textDecorationLine: "underline",
              color: Colors.LTgreen,
            }}
          >
            plus de morceaux
          </Text>
        </TouchableOpacity>
        <PopUp popUpVisible={popUpVisible} closePopUp={closePopUp} />

        {/*"Prestations standards" part*/}
        <Text style={styles.title}>Prestations standards</Text>
        <View style={styles.greyLine} />
        <Services />

        {/*"Cagnotte LiveTonight" part*/}
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Text style={styles.title}>Cagnotte LiveTonight</Text>
          <View
            style={{
              width: 45,
              height: 13,
              justifyContent: "center",
              alignSelf: "flex-end",
              marginLeft: 5,
              borderRadius: 3,
              backgroundColor: Colors.LTred,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 10, color: "white" }}>Nouveau</Text>
          </View>
        </View>
        <View style={styles.greyLine} />
        <View style={{ marginLeft: "5%", marginRight: "5%", flexDirection: "row", marginTop: 15 }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("./assets/gateau.png")}
              style={{ width: 80, height: 55 }}
              imageStyle={{
                resizeMode: "cover",
              }}
            />
          </View>
          <View style={{ flex: 3 }}>
            <Text style={[styles.title, { color: Colors.LTgreen }]}>{groups[0].name}</Text>
            <Text style={{ fontSize: 15, marginLeft: "5%" }}>
              Solliciter vos invités via un "chapeau digital" pour profiter d'une prestation musicale lors de votre événement.{"\n"}Le prix final sera
              fixé après discussion avec le musicien.
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: "5%", marginRight: "5%", flexDirection: "row", marginTop: 15 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>1.</Text>
            <Text style={{ textAlign: "center", fontSize: 15 }}>Contactez et échangez avec le musicien.</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>2.</Text>
            <Text style={{ textAlign: "center", fontSize: 15 }}>Partagez le lien de la cagnotte à vos invités.</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>3.</Text>
            <Text style={{ textAlign: "center", fontSize: 15 }}>Clôturez la cagnotte et profitez de votre soirée en musique !</Text>
          </View>
        </View>
        <View style={{ marginLeft: "5%", marginRight: "5%", marginTop: 15, marginBottom: 15 }}>
          <Text style={{ textAlign: "center", fontSize: 15 }}>Intéressé ? Contactez-nous à l'adresse suivante: booking@livetonight.fr</Text>
        </View>

        {/*"Avis" part*/}
        <Text style={styles.title}>Avis</Text>
        <View style={styles.greyLine} />
        <View style={{ flexDirection: "row", marginLeft: "5%", marginRight: "5%", marginTop: 10 }}>
          <Stars rating={groups[0].rating} />
          <Text
            style={{
              alignSelf: "center",
              marginLeft: "2%",
              color: "black",
              fontSize: 15,
            }}
          >
            {groups[0].rating} - {groups[0].nbReviews} avis
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: "5%", marginRight: "5%", marginTop: 15 }}>
          <Text style={{ fontSize: 15 }}>Performance musicale - {groups[0].musical_perf}</Text>
          <Tooltip
            isVisible={toolTipVisible1}
            content={
              <Text style={{ fontSize: 15 }}>
                Les personnes qui ont notés ce point là ont répondu aux questions suivantes :{"\n"}- L'artiste a-t-il bien compris ce que vous
                recherchiez ?{"\n"}- A-t-il su s'adapter à votre événement le jour J ?{"\n"}- Le volume sonore était-il en adéquation avec l'événement
                ?
              </Text>
            }
            placement="top"
            onClose={() => setToolTipVisible1(false)}
          >
            <TouchableOpacity onPress={() => setToolTipVisible1(true)} style={{ width: 30, alignItems: "center" }}>
              <AntDesign name="questioncircle" size={20} color={Colors.LTgrey} />
            </TouchableOpacity>
          </Tooltip>
        </View>
        <View style={{ flexDirection: "row", marginLeft: "5%", marginRight: "5%", marginTop: 5 }}>
          <Text style={{ fontSize: 15 }}>Performance scénique - {groups[0].stage_perf}</Text>
          <Tooltip
            isVisible={toolTipVisible2}
            content={
              <Text style={{ fontSize: 15 }}>
                Les personnes qui ont notés ce point là ont répondu aux questions suivantes :{"\n"}- La perfomance scénique du ou des musiceins
                était-elle en adéquation avec votre événement ?{"\n"}- La tenue des musiciens était-elle à la hauteur de vos attentes ?
              </Text>
            }
            placement="top"
            onClose={() => setToolTipVisible2(false)}
          >
            <TouchableOpacity onPress={() => setToolTipVisible2(true)} style={{ width: 30, alignItems: "center" }}>
              <AntDesign name="questioncircle" size={20} color={Colors.LTgrey} />
            </TouchableOpacity>
          </Tooltip>
        </View>
        <View style={{ flexDirection: "row", marginLeft: "5%", marginRight: "5%", marginTop: 5 }}>
          <Text style={{ fontSize: 15 }}>Professionalisme - {groups[0].professionalism}</Text>
          <Tooltip
            isVisible={toolTipVisible3}
            content={
              <Text style={{ fontSize: 15 }}>
                Les personnes qui ont notés ce point là ont répondu aux questions suivantes :{"\n"}- Les musiciens ont-ils étaient professionnels tout
                du long de vos échanges ?{"\n"}- Étaient-ils bien à l'heure convenue le jour J ?{"\n"}- Ont-ils réalisé la prestation telle que vous
                l'aviez définie ensemble ?
              </Text>
            }
            placement="top"
            onClose={() => setToolTipVisible3(false)}
          >
            <TouchableOpacity onPress={() => setToolTipVisible3(true)} style={{ width: 30, alignItems: "center" }}>
              <AntDesign name="questioncircle" size={20} color={Colors.LTgrey} />
            </TouchableOpacity>
          </Tooltip>
        </View>

        <Opinions />
      </ScrollView>
    </View>
  );
}
