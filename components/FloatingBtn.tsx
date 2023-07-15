import { StyleSheet } from "react-native";

const floatingBtnS = StyleSheet.create({
  floatinBtn: {
    backgroundColor: "#1DA1F2",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 15,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default floatingBtnS;
