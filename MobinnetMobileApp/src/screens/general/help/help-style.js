import { Dimensions, StyleSheet } from "react-native";
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'rgb(240,241,245)',
        alignItems: 'center',
        position: 'relative'
    },
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
    container: {
        position: 'absolute',
        top: width / 5,
        alignItems: 'center',
    },
    helpIcon: {
        width: 35,
        height: 40,
        resizeMode: "contain",
        marginBottom: 20
    },
    helpTextView: {
        flexDirection: 'row'
    },
    helpText: {
        fontSize: 9,
        color: 'gray',
        lineHeight: 31,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'right',
        marginBottom: 15,
    },
    helpNoteIcon: {
        resizeMode: "contain",
        width: 30,
        height: 50,
        marginRight: 10
    },
    helpBtn: {
        backgroundColor: '#fff',
        width: 190,
        marginBottom: 6,
        textAlign: 'right',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    helpBtnText: {
        fontSize: 9,
        color: 'gray',
        textAlign: 'right',
        paddingRight: 5
    },
    helpView: {
        position: 'relative',
    },
    transparentBtn: {
        backgroundColor: '#00000000',
        elevation: 0,
        shadowOpacity: 0
    },
    backBtn: {
        position: 'absolute',
        bottom: 0,
    },
    backBtnText: {
        fontSize: 8,
        color: 'gray'
    },
    backText: {
        color: 'rgb(0,185,13)',
        fontSize: 8
    }
});