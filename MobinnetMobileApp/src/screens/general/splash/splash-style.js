import { Dimensions, StyleSheet } from "react-native";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default StyleSheet.create({
    backgroundImage: {
        width: width,
        height: height,
        resizeMode: "stretch",
        position: 'relative',
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    viewImage: {
        position: 'absolute',
        top: width / 3,
        flex: 1,
        alignItems: 'center'
    },
    logoImage: {
        width: 130,
        height: 90,
        resizeMode: "stretch",
    },
    logoTextImage: {
        width: 110,
        height: 60,
        resizeMode: "stretch",
        marginTop: 20,
    },
    firstCloudImage: {
        width: 100,
        height: 20,
        resizeMode: "stretch",
        position: 'absolute',
        left: 50,
        top: 100,
    },
    secondCloudImage: {
        width: 130,
        height: 25,
        resizeMode: "stretch",
        position: 'absolute',
        right: 40,
        top: 190,
        zIndex: 999
    },
    thirdCloudImage: {
        width: 110,
        height: 20,
        resizeMode: "stretch",
        position: 'absolute',
        left: 50,
        top: 300,
    }
});