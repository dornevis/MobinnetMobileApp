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
        marginBottom: 20
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
    reservationText: {
        fontSize: 13,
        color: '#333',
        lineHeight: 31,
        paddingRight: 50,
        paddingLeft: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    reservationTextResponsive: {
        fontSize: 10,
        color: '#333',
        lineHeight: 31,
        paddingRight: 30,
        paddingLeft: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
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
    icon: {
        width: 20,
        resizeMode: "contain",
        height: 20,
    },
    falseIcon: {
        width: 8,
        height: 8,
        marginLeft: 3
    },
    cardBody: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        width: width - 30,
        paddingBottom: 0,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        paddingRight: 0,
        paddingLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    image: {
        width: 130,
        height: 80,
        resizeMode: "contain"
    },
    col: {
        width: '60%',
        paddingTop: 0,
        paddingRight: 0,
        paddingLeft: 0,
        paddingBottom: 0,
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    colTitle: {
        paddingTop: 0,
        paddingRight: 0,
        paddingLeft: 0,
        paddingBottom: 0,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#124d4d',
        width: '40%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    card: {
        width: width - 40,
        height: 130,
        alignSelf: 'center',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0, .2)',
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'transparent',
    },
    cardResponsive: {
        width: width - 40,
        height: 100,
        alignSelf: 'center',
        borderRadius: 0,
        shadowColor: 'rgba(0,0,0, .2)',
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'transparent',
    },
    cardItem: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    cardItemResponsive: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    cardItemText: {
        color: '#fff',
        fontSize: 10
    },
    textInfo: {
        color: 'gray',
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'center',
        marginBottom: 0
    },
    confirmBtn: {
        backgroundColor: 'rgb(132,193,37)',
        height: 22,
        width: 60,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 0
    },
    activatedBtn: {
        backgroundColor: '#c22636',
        height: 22,
        width: 60,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 0
    },
    confirmTextBtn: {
        color: '#fff',
        fontSize: 8,
        fontWeight: 'bold'
    }
});