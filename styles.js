import { StyleSheet } from "react-native";

import * as Colors from "./Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    marginLeft: "5%",
    color: "black",
    fontWeight: "300",
    fontSize: 20,
  },
  text: {
    color: "black",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 15,
  },
  greyLine: {
    width: "90%",
    alignSelf: "center",
    borderBottomColor: Colors.LTgrey,
    borderBottomWidth: 1,
    marginTop: 5,
  },
});

export default styles;
