import { Dimensions, StyleSheet } from "react-native";
var { width, height } = Dimensions.get('window');
import styleCompatibility from '../../../helpers/style-compatibility'



export default StyleSheet.create({
    view: {
        backgroundColor: 'rgb(240,241,245)',
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: width,
        height: height,
        position: 'relative',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'gray',
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 25
    },
    titleResponsive: {
        color: 'gray',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10
    },
    logoImage: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        marginBottom: 15,
        zIndex: 99
    },
    logoImageResponsive: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        marginBottom: 10,
        zIndex: 99
    },
    label: {
        fontSize: styleCompatibility.getAuthFormLabelTextSize(),
        color: 'rgb(132,193,37)',
        fontWeight: 'bold',
    },
    input: {
        textAlign: 'right',
        fontSize: 17,
        fontWeight: 'bold',
    },
    inputResponsive: {
        textAlign: 'right',
        fontSize: 13,
        fontWeight: 'bold',
    },
    loginCard: {
        width: styleCompatibility.getAuthFormWidth(),
        height: 250,
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        paddingTop: 0,
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: -1,
        justifyContent: 'center'
    },
    loginBtn: {
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#eee',
        backgroundColor: 'rgb(132,193,37)',
        zIndex: 999,
        justifyContent: 'center',
        elevation: 0
    },
    form: {
        flex: 1
    },
    item: {
        marginTop: 0,
        marginBottom: 30,
        paddingLeft: 0,
    },
    itemResponsive: {
        marginTop: 0,
        marginBottom: 10,
        paddingLeft: 0,
    },
    icon: {
        width: 23,
        resizeMode: "contain",
        height: 23,
        position: 'absolute',
        backgroundColor: 'transparent',
        left: 0,
    },
    iconResponsive: {
        width: 15,
        resizeMode: "contain",
        height: 15,
    },
    btnIcon: {
        elevation: 0
    },
    eyeIcon: {
        top: 95
    },
    phoneIcon: {
        top: 15
    },
    eyeIconResponsive: {
        top: 90,
    },
    phoneIconResponsive: {
        top: 29,
        width: 15,
        resizeMode: "contain",
        height: 15,
    },
    headerImage: {
        resizeMode: "stretch",
        width: styleCompatibility.getAuthFormWidth(),
        height: styleCompatibility.getAuthFormHeaderImageHeigth(),
        position: 'relative',
        marginBottom: -10
    },
    helpIcon: {
        width: 25,
        resizeMode: "contain",
        height: 25,
    },
    helpIconResponsive: {
        width: 15,
        resizeMode: "contain",
        height: 15,
    },
    textBtn: {
        color: '#fff',
        fontSize: styleCompatibility.getAuthFormCircleButtonTextSize(),
        paddingRight: 0,
        fontWeight: 'bold',
        paddingLeft: 0,
        textAlign: 'center',
    },
    loginFooter: {
        width: styleCompatibility.getAuthFormWidth(),
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: -23
    },
  
    forgotText: {
        fontSize: 17,
        color: 'gray',
        fontWeight: 'bold',
        paddingRight: 5
    },
    forgotTextResponsive: {
        fontSize: 10,
        color: 'gray',
        fontWeight: 'bold',
        paddingRight: 5
    },
    transparentBtn: {
        backgroundColor: '#00000000',
        elevation: 0,
        shadowOpacity: 0
    },
    registerBtn: {
    },
    registerBtnText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray'
    },
    registerBtnTextRegister: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'gray'
    },
    registerText: {
        color: 'rgb(0,185,13)',
        fontSize: 14,
        fontWeight: 'bold',
    },
    registerTextResponsive: {
        fontSize: 11,
        color: 'rgb(0,185,13)',
        fontWeight: 'bold',
    }
});