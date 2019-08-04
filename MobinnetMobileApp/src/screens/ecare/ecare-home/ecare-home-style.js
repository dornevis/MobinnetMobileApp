import { Dimensions, StyleSheet } from "react-native";
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'rgb(240,241,245)',
    },
    container: {
        justifyContent: 'center',
        marginBottom: 20
    },
    headerProfile: {
        backgroundColor: 'rgb(132,193,37)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    headerTitle: {
        fontSize: 12,
        alignSelf: 'center',
        fontWeight: 'bold'
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
    cardBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    image: {
        width: 130,
        height: 80,
        resizeMode: "contain",
    },
    col: {
        width: '50%',
        flexDirection: 'column',
        justifyContent: 'center',
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
    carouselImage: {
        flex: 1,
        width: '100%',
        height: height / 5,
        resizeMode: "contain"
    },
    carousel: {
        backgroundColor: '#fff',
        width: '100%',
        height: height / 5,
        marginTop: 0
    },
    carouselArrow: {
        color: '#333',
        fontSize: 15,
        marginLeft: 5,
        marginRight: 5
    },
    textInfo: {
        color: '#124d4d',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10
    },
    textInfoResponsive: {
        color: '#124d4d',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 10
    },
    remainText: {
        color: '#333',
        fontSize: 12,
        textAlign: 'right',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    remainTextResponsive: {
        color: '#333',
        fontSize: 10,
        textAlign: 'right',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    remainMainText: {
        color: 'rgb(132,193,37)',
        fontSize: 12,
        textAlign: 'right',
        fontWeight: 'bold',
        marginBottom: 5
    }
});