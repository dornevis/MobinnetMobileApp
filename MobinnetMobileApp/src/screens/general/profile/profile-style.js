import { Dimensions, StyleSheet } from "react-native";
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'transparent',
        position: 'relative'
    },
    backgroundImage: {
        position: 'relative',
        height: height,
        width: width,
        position: 'absolute',
        top: 0,
        left: 0
    },
    headerProfile: {
        backgroundColor: 'rgb(132,193,37)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginBottom: 25
    },
    headerTitle: {
        fontSize: 14,
        alignSelf: 'center',
        fontWeight: 'bold',
        paddingRight: 10
    },
    profileText: {
        fontSize: 13,
        color: '#333',
        lineHeight: 31,
        paddingRight: 50,
        paddingLeft: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    profileTextResponsive: {
        fontSize: 10,
        color: '#333',
        lineHeight: 31,
        paddingRight: 30,
        paddingLeft: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    titleImage: {
        borderRadius: 50,
        width: 80,
        height: 80,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 0
    },
    titleImageResponsive: {
        borderRadius: 50,
        width: 60,
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 0
    },
    titleText: {
        fontSize: 17,
        marginTop: 25,
        marginBottom: 25,
        fontWeight: 'bold',
        color: '#124d4d',
        alignSelf: 'center'
    },
    titleTextResponsive: {
        fontSize: 13,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#124d4d',
        alignSelf: 'center'
    },
    headerRight: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        display: 'flex'
    },
    transparentBtn: {
        backgroundColor: '#00000000',
        elevation: 0,
        shadowOpacity: 0,
        width: 100,
        height: 100
    },
    icon: {
        width: 20,
        resizeMode: "contain",
        height: 20,
    },
    formView: {
        alignItems: 'center',
        marginRight: 50,
        marginLeft: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        width: 400,
        marginTop: 20
    },
    formViewResponsive: {
        alignItems: 'center',
        marginRight: 50,
        marginLeft: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        width: 300,
        marginTop: 10
    },
    formViewPhone: {
        alignItems: 'center',
        marginRight: 50,
        marginLeft: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        width: 200,
        marginTop: 10
    },
    item: {
        marginBottom: 20,
        marginLeft: 0,
    },
    label: {
        fontSize: 13,
        color: '#515151',
        fontWeight: 'bold',
        width: 200,
    },
    labelResponsive: {
        fontSize: 11,
        color: '#515151',
        fontWeight: 'bold',
        width: 200,
    },
    star: {
        fontSize: 10,
        color: 'red',
    },
    form: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    input: {
        borderColor: '#124d4d',
        borderWidth: 0.5,
        borderRadius: 2,
        height: 35,
        marginTop: 10,
        fontSize: 13,
        textAlign: 'right'
    },
    inputResponsive: {
        borderColor: '#124d4d',
        borderWidth: 0.5,
        borderRadius: 2,
        height: 25,
        marginTop: 10,
        fontSize: 11,
        textAlign: 'right'
    },
    confirmBtn: {
        backgroundColor: '#84c126',
        height: 28,
        width: 100,
        borderRadius: 13,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 40
    },
    confirmTextBtn: {
        color: '#fff',
        fontSize: 11,
        fontWeight: 'bold'
    },
});