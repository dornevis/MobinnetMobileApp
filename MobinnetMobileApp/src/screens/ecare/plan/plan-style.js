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
        marginBottom: 0
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
        display: 'flex'
    },
    icon: {
        width: 20,
        resizeMode: "contain",
        height: 20,
    },
    image: {
        width: 130,
        height: 80,
        resizeMode: "contain"
    },
    card: {
        width: width - 40,
        height: 280,
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
        height: 220,
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
        height: 280,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    cardItemResponsive: {
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    specialCard: {
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
    specialCardResponsive: {
        width: width - 40,
        height: 200,
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
    specialCardItem: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    specialCardItemResponsive: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    specialText: {
        color: '#124d4d',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 15
    },
    specialTextResponsive: {
        color: '#124d4d',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 0,
        marginTop: 15
    },
    parentTabView: {
        height: height,
        backgroundColor: 'rgb(240,241,245)'
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
        marginRight: 30,
        marginLeft: 30,
    },
    cardBodyContentResponsive: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 10,
    },
    cardBodyContentPrice: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 20,
    },
    cardBody: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 11
    },
    specialCardBody: {
        flexDirection: 'column',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    specialCardBodyResponsive: {
        flexDirection: 'column',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    specialPlanCardBody: {
        flexDirection: 'column',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: -35
    },
    specialPlanCardBodyResponsive: {
        flexDirection: 'column',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: -20
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
    planDurationText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#124d4d',
        marginRight: -10
    },
    planDurationTextResponsive: {
        fontSize: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#124d4d',
        textAlign: 'center',
        width: 150
    },
    planCategoryView: {
        backgroundColor: '#afce23',
        width: (width - 30) / 5,
        height: 30,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 10
    },
    planCategoryViewResponsive: {
        backgroundColor: '#afce23',
        width: (width - 30) / 3,
        height: 20,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 5
    },
    planSpecialView: {
        backgroundColor: '#afce23',
        width: (width - 30) / 5,
        height: 30,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 50
    },
    planSpecialViewResponsive: {
        backgroundColor: '#afce23',
        width: (width - 30) / 3,
        height: 20,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 50
    },
    planCategoryText: {
        fontSize: 12,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#fff'
    },
    planCategoryTextResponsive: {
        fontSize: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#fff'
    },
    planDurationView: {
        marginTop: 13,
        marginRight: -5
    },
    specialPlanDurationView: {
        marginTop: 13,
    },
    textCurrency: {
        fontSize: 20,
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
        fontWeight: 'bold'
    },
    priceInfoResponsive: {
        fontSize: 40,
        color: '#124d4d',
        fontWeight: 'bold'
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
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    priceImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        position: 'absolute',
        top: -50,
        right: 0,
        left: (width - 30) / 14,
        alignSelf: 'center',
    },
    priceImageResponsive: {
        width: 110,
        height: 110,
        resizeMode: 'contain',
        position: 'absolute',
        top: -30,
        right: 0,
        left: (width - 30) / 15,
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
    tabBody: {
        marginBottom: 15
    },
    specialTabBody: {
        marginBottom: 5
    },
    borderStyle: {
        width: 10,
        height: 110,
        resizeMode: 'contain',
        position: 'relative',
        right: 5,
    },
    specialBorderStyle: {
        width: 10,
        height: 110,
        resizeMode: 'contain',
        position: 'relative',
        right: 5,
        top: -20
    },
    textTabBar: {
        color: '#124d4d',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    activeTextTabBar: {
        color: '#124d4d',
        backgroundColor: '#84c124',
        fontSize: 10,
        paddingTop: 5,
        paddingRight: 5, paddingLeft: 5,
        paddingBottom: 5,
        borderRadius: 3,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    tabstyle: {
        backgroundColor: '#fff',
        borderColor: '#84c126',
    },
    confirmBtn: {
        backgroundColor: 'rgb(132,193,37)',
        height: 35,
        width: 130,
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 20,
        alignSelf: 'center'
    },
    confirmBtnResponsive: {
        backgroundColor: 'rgb(132,193,37)',
        height: 25,
        width: 90,
        borderRadius: 13,
        justifyContent: 'center',
        marginTop: 20
    },
    reservationBtn: {
        backgroundColor: 'rgb(132,193,37)',
        height: 35,
        width: 90,
        borderRadius: 17,
        justifyContent: 'center',
        marginTop: 10,
        alignSelf: 'center'
    },
    reservationBtnResponsive: {
        backgroundColor: 'rgb(132,193,37)',
        height: 23,
        width: 60,
        borderRadius: 15,
        justifyContent: 'center',
        marginTop: 10,
        alignSelf: 'center'
    },
    specialBtnTab: {
        alignSelf: 'center',
        marginTop: -60,
        marginLeft: 0,
        backgroundColor: 'rgb(132,193,37)',
        height: 35,
        width: 130,
        borderRadius: 17,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    specialBtnTabResponsive: {
        backgroundColor: 'rgb(132,193,37)',
        height: 25,
        width: 90,
        borderRadius: 13,
        justifyContent: 'center',
        marginTop: -40,
        alignSelf: 'center'
    },
    ovalShape: {
        width: 30,
        height: 5,
        borderRadius: 5,
        marginRight: 5,
        backgroundColor: 'blue'
    },
    infoView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    specialInfoView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    infoText: {
        fontSize: 9,
        fontWeight: 'bold',
        color: '#124d4d',
        marginRight: 5
    }
});