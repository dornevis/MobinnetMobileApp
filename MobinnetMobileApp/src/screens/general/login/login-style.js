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
    container: {
        position: 'absolute',
        top: width / 5,
        alignItems: 'center',
    },
    title: {
        color: 'gray',
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 25
    },
    logoImage: {
        width: 50,
        height: 35,
        resizeMode: "stretch",
        marginBottom: 15,
        position: 'absolute',
        top: 50,
        zIndex: 99
    },
    label: {
        fontSize: 10,
        color: 'rgb(132,193,37)',
    },
    input: {
        textAlign: 'right',
        fontSize: 11,
    },
    loginCard: {
        width: (width / 2) + 95,
        position: 'relative',
        top: -6,
        height: 160,
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        paddingTop: 0,
        flex: 1,
        alignItems: 'center',
        zIndex: -1
    },
    loginBtn: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#eee',
        backgroundColor: 'rgb(132,193,37)',
        position: 'absolute',
        zIndex: 999,
        justifyContent: 'center',
        elevation: 0,
        bottom: -5
    },
    form: {
        flex: 1,
    },
    item: {
        marginTop: 0,
        marginBottom: 5,
        paddingLeft: 0,
        position: 'relative'
    },
    icon: {
        width: 12,
        resizeMode: "contain",
        height: 12,
        position: 'absolute',
        left: 0
    },
    helpIcon: {
        width: 9,
        resizeMode: "contain",
        height: 11,
    },
    backgroundImage: {
        resizeMode: "stretch",
        width: (width / 2) + 95,
        height: 140,
        position: 'relative'
    },
    textBtn: {
        color: '#fff',
        fontSize: 10,
        paddingRight: 0,
        paddingLeft: 0,
        textAlign: 'center',
    },
    loginFooter: {
        flex: 1,
        width: (width / 2) + 95,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: -14
    },
    forgotText: {
        fontSize: 9,
        color: 'gray',
        paddingRight: 5
    },
    transparentBtn: {
        backgroundColor: '#00000000',
        elevation: 0,
        shadowOpacity: 0
    },
    registerBtn: {
        position: 'absolute',
        bottom: 0,
    },
    registerBtnText: {
        fontSize: 8,
        color: 'gray'
    },
    registerText: {
        color: 'rgb(0,185,13)',
        fontSize: 8
    }
});