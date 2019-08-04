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
    card: {
        width: width - 50,
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: 'transparent',
        height: 150,
        shadowColor: 'rgba(0,0,0, .2)',
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        marginBottom: 20
    },
    cardItem: {
        backgroundColor: '#124d4d',
        justifyContent: 'center',
        height: 20,
        paddingTop: 0,
        paddingBottom: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderWidth: 0,
    },
    cardItemBody: {
        height: 130,
    },
    cardItemText: {
        color: '#fff',
        fontSize: 11
    },
    paymentTitle: {
        color: 'red',
        fontSize: 18
    },
    paymentTitleResponsive: {
        color: 'red',
        fontSize: 12
    },
    paymentText: {
        color: 'gray',
        fontSize: 14
    },
    paymentTextResponsive: {
        color: 'gray',
        fontSize: 10
    },
    paymentDetail: {
        flexDirection: 'row'
    },
    paymentIcon: {
        width: 15, height: 15,
        resizeMode: 'contain'
    }


});