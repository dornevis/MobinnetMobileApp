import { Dimensions, StyleSheet } from "react-native";
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    backgroundImage: {
        width: width,
        height: height,
        resizeMode: "stretch",
        position: 'relative',
    },
    infoText: {
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
        marginTop: 30
    },
    titleText: {
        fontSize: 13,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'gray',
        alignSelf: 'center'
    },
    formView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        marginBottom: 15,
        marginLeft: 5,
        marginRight: 5
    },
    formViewFisrtRow: {
        alignSelf: 'center',
        flexDirection: 'row',
    },
    childViewForm: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    label: {
        fontSize: 9,
        color: '#515151',
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },
    star: {
        fontSize: 10,
        color: 'red',
    },
    form: {
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderColor: '#124d4d',
        borderWidth: 0.5,
        borderRadius: 2,
        height: 25,
        marginTop: 5,
        fontSize: 9,
        textAlign: 'right',
        flex: 1
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
    },
    radiButtonLabel: {
        fontSize: 9,
        color: 'gray',
        fontWeight: 'bold',
        paddingLeft: 0,
        marginTop:-3,
        marginLeft:10,
        marginRight:-5
    }
});