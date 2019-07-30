import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'rgb(240,241,245)',
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
        paddingRight:5
    },
    headerRight: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        display: 'flex',
    },
    icon: {
        width: 20,
        resizeMode: "contain",
        height: 20,
    },
    card: {
        width: 320,
        height: 150,
        alignSelf: 'center',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0, .2)',
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingBottom: 10
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardBodyContent: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    cardBody: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 10
    },
    textInfoTitle: {
        fontSize: 40,
        color: '#124d4d',
        fontWeight: 'bold',
        marginTop: 5
    },
    textInfoType: {
        fontSize: 10,
        color: 'gray',
        fontWeight: 'bold'
    },
    textCurrency: {
        fontSize: 13,
        color: 'gray',
        fontWeight: 'bold'
    },
    priceInfoDetail: {
        fontSize: 20,
        color: '#124d4d',
        fontWeight: 'bold'
    },
    priceInfo: {
        fontSize: 40,
        color: '#124d4d',
        fontWeight: 'bold'
    },
    confirmBtn: {
        backgroundColor: 'rgb(132,193,37)',
        height: 23,
        width: 90,
        borderRadius: 13,
        justifyContent: 'center',
        marginTop: -5
    },
    confirmTextBtn: {
        color: '#fff',
        fontSize: 9,
        fontWeight: 'bold'
    },
    bodyContent: {
        position: 'relative',
        marginBottom: 20
    },
    priceImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        position: 'absolute',
        top: -10,
        right: 0
    },
    countNumber: {
        backgroundColor: '#fff',
        width: 25,
        height: 20,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333',
        fontSize: 8,
        position: 'absolute',
        right: 20.2,
        paddingTop: 3,
        fontWeight: 'bold',
        top: -10,
        zIndex: 3,
        textAlign: 'center'
    },
    borderStyle: {
        width: 10,
        height: 100,
        resizeMode: 'contain',
        position: 'relative',
        right: 5,
    }

});