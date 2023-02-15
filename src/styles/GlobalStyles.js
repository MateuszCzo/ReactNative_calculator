import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
    btnOrange: {
        backgroundColor: myColors.btnOrange,
        justifyContext: "center",
        alignItems: "center",
    },
    btnDark: {
        backgroundColor: myColors.btnDark,
        justifyContext: "center",
        alignItems: "center",
    },
    btnGray: {
        backgroundColor: myColors.btnGray,
        justifyContext: "center",
        alignItems: "center",
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    row: {
       maxWidth: '100%',
       flexDirection: "row",
       flexWrap: "wrap",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 0,
    },
    screenNumber: {
        fontSize: 96,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    }
});