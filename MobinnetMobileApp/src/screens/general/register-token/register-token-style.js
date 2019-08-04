import { Dimensions, StyleSheet } from "react-native";
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    view: {
        justifyContent: 'center',
        backgroundColor: 'rgb(240,241,245)',
        alignItems: 'center',
        flex:1,
        position: 'relative'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    },
    title: {
        color: 'gray',
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 25
    },
    titleResponsive: {
        color: 'gray',
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 10
    },
    logoImage: {
        width: 50,
        height: 35,
        resizeMode: "stretch",
        marginBottom: 15,
        zIndex: 99
    },
    label: {
        fontSize: 11,
        color: 'rgb(132,193,37)',
    },
    labelResponsive: {
        fontSize: 9,
        color: 'rgb(132,193,37)',
    },
    input: {
        textAlign: 'right',
        fontSize: 11,
    },
    inputResponsive: {
        textAlign: 'right',
        fontSize: 9,
    },
    registerTokenCard: {
        width:500,
        height: 140,
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        paddingTop: 0,
        alignItems: 'center',
        alignSelf:'center',
        zIndex: -1,
    },
    registerTokenCardResponsive:{
        height: 140,
        width: 290,
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        paddingTop: 0,
        alignItems: 'center',
        alignSelf:'center',
        zIndex: -1,
    },
    registerBtn: {
        width:60,
        height: 60,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#eee',
        backgroundColor: 'rgb(132,193,37)',
        zIndex: 999,
        justifyContent: 'center',
        elevation: 0,
        marginTop:-30
    },
    registerBtnResponsive: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#eee',
        backgroundColor: 'rgb(132,193,37)',
        zIndex: 999,
        justifyContent: 'center',
        elevation: 0,
        marginTop: -30,
    },
    form: {
        flex: 1,
    },
    item: {
        marginTop: 0,
        marginBottom: 5,
        paddingLeft: 0,
    },
    icon: {
        width: 13,
        resizeMode: "contain",
        height: 13,
        position: 'absolute',
        left: 0,
        top:29
    },
    backgroundImage: {
        resizeMode: "stretch",
        width: 500,
        height: 140,
        position: 'relative',
        marginBottom: -5
    },
    backgroundImageResponsive: {
        resizeMode: "stretch",
        width: 290,
        height: 130,
        position: 'relative',
        marginBottom: -10
    },
    textBtn: {
        color: '#fff',
        fontSize: 10,
        paddingRight: 0,
        paddingLeft: 0,
        textAlign: 'center',
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