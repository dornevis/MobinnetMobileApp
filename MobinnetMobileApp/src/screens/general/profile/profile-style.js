import { Dimensions, StyleSheet } from "react-native";
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative'
    },
    backgroundImage: {
        width: width,
        height: height,
        resizeMode: "stretch",
        position: 'relative',
    },
    headerProfile: {
        backgroundColor: 'rgb(132,193,37)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginBottom: 20
    },
    headerTitle: {
        fontSize: 12,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    profileText: {
        fontSize: 8,
        color: '#333',
        lineHeight: 31,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 0,
    },
    titleImage: {
        borderRadius: 50,
        width: 60,
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 0
    },
    titleText: {
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
        justifyContent: 'center'
    },
    item: {
        marginBottom: 15
    },
    label: {
        fontSize: 9,
        color: '#515151',
        fontWeight: 'bold',
    },
    star: {
        fontSize: 10,
        color: 'red',
    },
    form: {
        width: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderColor: '#124d4d',
        borderWidth: 1,
        borderRadius: 2,
        height: 25,
        marginTop: 5,
        fontSize: 9,
        textAlign: 'right'
    },
    confirmBtn: {
        backgroundColor: 'rgb(132,193,37)',
        height: 25,
        width: 100,
        borderRadius: 13,
        justifyContent: 'center',
        marginTop: 5
    },
    confirmTextBtn: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold'
    }
});