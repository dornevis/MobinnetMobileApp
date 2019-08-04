import { Dimensions, StyleSheet } from "react-native";
var { width, height } = Dimensions.get('window');

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
        paddingRight: 5
    },
    headerTitle: {
        fontSize: 14,
        alignSelf: 'center',
        fontWeight: 'bold',
        paddingRight: 10
    },
    icon: {
        width: 20,
        resizeMode: "contain",
        height: 20,
    },
    card: {
        width: width - 40,
        height: 240,
        alignSelf: 'center',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0, .2)',
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'transparent',
    },
    cardResponsive: {
        width: width - 40,
        height: 180,
        alignSelf: 'center',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0, .2)',
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'transparent',
    },
    cardItem: {
        height: 240,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    cardItemResponsive: {
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    mainBody: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center'
    },
    cardBodyContent: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        alignSelf:'center',
        marginLeft: 10,
    },
    cardBody: {
        flexDirection: 'column',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
    },
    textInfoTitle: {
        fontSize: 60,
        color: '#124d4d',
        fontWeight: 'bold',
    },
    textInfoTitleResponsive: {
        fontSize: 40,
        color: '#124d4d',
        fontWeight: 'bold',
    },
    textInfoType: {
        fontSize: 25,
        color: 'gray',
        fontWeight: 'bold'
    },
    textInfoTypeResponsive: {
        fontSize: 10,
        color: 'gray',
        fontWeight: 'bold'
    },
    textCurrency: {
        fontSize: 30,
        color: 'gray',
        fontWeight: 'bold'
    },
    textCurrencyResponsive: {
        fontSize: 10,
        color: 'gray',
        fontWeight: 'bold'
    },
    priceInfoDetail: {
        fontSize: 30,
        color: '#124d4d',
        fontWeight: 'bold'
    },
    priceInfoDetailResponsive: {
        fontSize: 20,
        color: '#124d4d',
        fontWeight: 'bold'
    },
    priceInfo: {
        fontSize: 60,
        color: '#124d4d',
        fontWeight: 'bold',
    },
    priceInfoResponsive: {
        fontSize: 40,
        color: '#124d4d',
        fontWeight: 'bold'
    },
    confirmBtn: {
        backgroundColor: 'rgb(132,193,37)',
        height: 35,
        width: 120,
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 0,
        alignSelf: 'center',
        marginTop: 30
    },
    confirmBtnResponsive: {
        backgroundColor: 'rgb(132,193,37)',
        height: 25,
        width: 90,
        borderRadius: 13,
        justifyContent: 'center',
        marginTop: 30
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
    bodyContent: {
        position: 'relative',
        backgroundColor: 'transparent',
        width: width - 40,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    priceImage: {
        width: 130,
        height: 140,
        resizeMode: 'contain',
        position: 'absolute',
        top: -40,
        right: 0,
        left: 30,
        alignSelf: 'center',
    },
    priceImageResponsive: {
        width: 120,
        height: 130,
        resizeMode: 'contain',
        position: 'absolute',
        top: -60,
        right: 0,
        left:0,
        alignSelf: 'center',
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
        right: 1,
        paddingTop: 3,
        fontWeight: 'bold',
        top: -12,
        zIndex: 3,
        textAlign: 'center',
    },
    borderStyle: {
        width: ' 55%',
        height: 10,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 50,
    }

});