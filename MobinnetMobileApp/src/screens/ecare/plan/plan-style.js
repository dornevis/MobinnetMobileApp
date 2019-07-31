import { Dimensions, StyleSheet } from "react-native";
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 15
    },
    headerProfile: {
        backgroundColor: 'rgb(132,193,37)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginBottom: 0
    },
    headerTitle: {
        fontSize: 12,
        alignSelf: 'center',
        fontWeight: 'bold',
        paddingRight: 5
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
        width: 320,
        height: 180,
        alignSelf: 'center',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0, .2)',
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative',
        paddingBottom: 10,
        marginTop: 0
    },
    specialText: {
        color: '#124d4d',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10,
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
        marginRight: 10,
        marginLeft: 10,
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
    planDurationText: {
        fontSize: 9,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#124d4d'
    },
    planCategoryView: {
        backgroundColor: '#84c126',
        width: 100,
        height: 20,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 10
    },
    planSpecialView: {
        bottom: 40
    },
    planCategoryText: {
        fontSize: 8,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#fff'
    },
    planDurationView: {
        marginTop: 13,
        marginRight: -5
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
    confirmTextBtn: {
        color: '#fff',
        fontSize: 9,
        fontWeight: 'bold'
    },
    bodyContent: {
        position: 'relative',
        backgroundColor: 'transparent',
        width: 320,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center'
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
        right: 0.5,
        paddingTop: 3,
        fontWeight: 'bold',
        top: -12,
        zIndex: 3,
        textAlign: 'center',
    },
    tabBody: {
        marginBottom: 15
    },
    borderStyle: {
        width: 10,
        height: 100,
        resizeMode: 'contain',
        position: 'relative',
        right: 5,
    },
    textTabBar: {
        color: '#124d4d',
        fontSize: 8,
        fontWeight: 'bold'
    },
    activeTextTabBar: {
        color: '#124d4d',
        backgroundColor: '#84c124',
        fontSize: 8,
        paddingTop: 5,
        paddingRight: 5, paddingLeft: 5,
        paddingBottom: 5,
        borderRadius: 3,
        fontWeight: 'bold'
    },
    tabstyle: {
        backgroundColor: '#fff',
        borderColor: '#84c126',
    },
    confirmBtn: {
        backgroundColor: 'rgb(132,193,37)',
        height: 23,
        width: 90,
        borderRadius: 13,
        justifyContent: 'center',
        marginTop: -15,
        marginLeft: 35
    },
    reservationBtn: {
        backgroundColor: 'rgb(132,193,37)',
        height: 21,
        width: 50,
        borderRadius: 12,
        justifyContent: 'center',
        marginTop: 6,
        marginLeft: 55
    },
    specialBtnTab: {
        alignSelf: 'center',
        marginTop: 20,
        marginLeft: 0
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
    infoText: {
        fontSize: 9,
        fontWeight: 'bold',
        color: '#124d4d',
        marginRight: 5
    }
});