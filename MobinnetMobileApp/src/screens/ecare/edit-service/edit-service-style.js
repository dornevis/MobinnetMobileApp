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
    icon: {
        width: 20,
        resizeMode: "contain",
        height: 20,
    },
    headerProfile: {
        backgroundColor: 'rgb(132,193,37)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginBottom: 25
    },
    headerTitle: {
        fontSize: 12,
        alignSelf: 'center',
        fontWeight: 'bold',
        paddingRight: 5
    },
    headerTitle: {
        fontSize: 14,
        alignSelf: 'center',
        fontWeight: 'bold',
        paddingRight: 10
    },
    item: {
        marginBottom: 15
    },
    serviceContent: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width - 50
    },
    bodyContent: {
        position: 'relative',
        flexDirection: 'column',
        flex: 1
    },
    label: {
        fontSize: 14,
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
        fontSize: 12,
        color: 'red',
        position: 'absolute',
        top: 80,
        right: 85
    },
    starResponsive:{
        fontSize: 12,
        color: 'red',
        position: 'absolute',
        top: 65,
        right: 65
    },
    form: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'column',
        width: '45%',
        justifyContent:'center',
        alignItems:'center'
    },
    input: {
        borderColor: '#124d4d',
        borderWidth: 0.5,
        borderRadius: 3,
        height: 37,
        marginTop: 10,
        fontSize: 13,
        textAlign: 'right'
    },
    inputResponsive: {
        borderColor: '#124d4d',
        borderWidth: 0.5,
        borderRadius: 3,
        height: 27,
        paddingBottom:5,
        marginTop: 10,
        fontSize: 10,
        textAlign: 'right',
    },
    borderStyle: {
        width: width,
        height: 10,
        resizeMode: 'contain',
    },
    confirmBtn: {
        backgroundColor: 'rgb(132,193,37)',
        height: 35,
        width: 140,
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 0,
        alignSelf: 'center',
        marginTop: 15
    },
    confirmBtnResponsive: {
        backgroundColor: 'rgb(132,193,37)',
        height: 23,
        width: 90,
        borderRadius: 13,
        justifyContent: 'center',
        marginTop: 10
    },
    confirmTextBtn: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    confirmTextBtnResponsive: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold'
    },
    cancelBtn: {
        backgroundColor: '#c22636',
        height: 35,
        width: 140,
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 0,
        alignSelf: 'center',
        marginTop: 50
    },
    cancelBtnResponsive: {
        backgroundColor: '#c22636',
        height: 23,
        width: 90,
        borderRadius: 13,
        justifyContent: 'center',
        marginTop: 50
    },
    cancelTextBtn: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    cancelTextBtnResponsive: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold'
    },
});