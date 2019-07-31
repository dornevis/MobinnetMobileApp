import { StyleSheet, Dimensions } from "react-native";
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    toastStyle: {
        margin: 10,
        borderRadius: 5
    },
    toastTextStyle: {

    },
    loadingStyle: {
        height: height,
        width: width,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        zIndex: 10000
    }
})