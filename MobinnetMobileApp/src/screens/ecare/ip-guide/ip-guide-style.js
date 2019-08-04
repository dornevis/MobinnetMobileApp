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
        marginBottom: 40
    },
    headerTitle: {
        fontSize: 14,
        alignSelf: 'center',
        fontWeight: 'bold',
        paddingRight: 10
    },
    headerRight: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        display: 'flex',
    },
    guideText: {
        fontSize: 13,
        color: '#333',
        lineHeight: 31,
        paddingRight: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    guideTextResponsive: {
        fontSize: 10,
        color: '#333',
        lineHeight: 31,
        paddingRight: 5,
        textAlign: 'center',
        fontWeight: 'bold',
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
    guideTextTitle: {
        fontSize: 13,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#124d4d',
        alignSelf: 'center'
    },
    guideTextTitleResponsive: {
        fontSize: 10,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#124d4d',
        alignSelf: 'center'
    },
    icon: {
        width: 20,
        resizeMode: "contain",
        height: 20,
    },
    card: {
        width: width - 40,
        height: 250,
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
        height: 160,
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
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    cardItemResponsive: {
        height: 160,
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
        marginLeft: 10
    },
    cardBody: {
        flexDirection: 'column',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    textInfoTitle: {
        fontSize: 60,
        color: '#124d4d',
        fontWeight: 'bold',
        marginTop: 5
    },
    textInfoTitleResponsive: {
        fontSize: 40,
        color: '#124d4d',
        fontWeight: 'bold',
        marginTop: 5
    },
    textInfoType: {
        fontSize: 30,
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
        fontWeight: 'bold',
    },
    textCurrencyResponsive: {
        fontSize: 10,
        color: 'gray',
        fontWeight: 'bold'
    },
    priceInfoDetail: {
        fontSize: 30,
        color: '#124d4d',
        fontWeight: 'bold',
        paddingTop: 20
    },
    priceInfoDetailResponsive: {
        fontSize: 20,
        color: '#124d4d',
        fontWeight: 'bold',
        paddingTop: 13
    },
    priceInfo: {
        fontSize: 60,
        color: '#124d4d',
        fontWeight: 'bold'
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
        marginTop: 40,
        alignSelf: 'center'
    },
    confirmBtnResponsive: {
        backgroundColor: 'rgb(132,193,37)',
        height: 25,
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
    bodyContent: {
        position: 'relative',
        backgroundColor: 'transparent',
        width: width - 40,
        marginTop:0,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    guideTextView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0
    },
    priceImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        position: 'absolute',
        top: -10,
        right: 0
    },
    circle: {
        width: 6,
        height: 6,
        borderRadius: 50,
        backgroundColor: '#84c126'
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
        width: 10,
        height: 100,
        resizeMode: 'contain',
        position: 'relative',
        right: 5,
    }

});