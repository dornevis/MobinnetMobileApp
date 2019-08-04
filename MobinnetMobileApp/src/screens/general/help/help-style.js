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
        width: 80,
        height: 80,
        resizeMode: "contain",
        marginBottom: 20
    },
    helpIconResponsive: {
        width: 40,
        height: 40,
        resizeMode: "contain",
        marginBottom: 20
    },
    helpTextView: {
        flexDirection: 'row'
    },
    helpText: {
        fontSize: 14,
        color: 'gray',
        lineHeight: 31,
        paddingRight: 20,
        paddingLeft: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        marginTop:10
    },
    helpTextResponsive: {
        fontSize: 10,
        color: 'gray',
        lineHeight: 31,
        paddingRight: 20,
        paddingLeft: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        marginTop:10
    },
    helpNoteIcon: {
        resizeMode: "contain",
        width: 30,
        height: 50,
        marginRight: 15
    },
    helpBtn: {
        backgroundColor: '#fff',
        width: 500,
        height:70,
        marginBottom: 25,
        textAlign: 'right',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius:5
    },
    helpBtnResponsive:{
        backgroundColor: '#fff',
        width: 190,
        height:40,
        marginBottom: 10,
        textAlign: 'right',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius:5
    },
    helpBtnText: {
        fontSize: 13,
        color: 'gray',
        textAlign: 'right',
        paddingRight: 10,
        fontWeight: 'bold'
    },
    helpBtnTextResponsive: {
        fontSize: 9,
        color: 'gray',
        textAlign: 'right',
        paddingRight: 10,
        fontWeight: 'bold'
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