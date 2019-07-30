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
        flex: 1,
        justifyContent: 'center',
        marginBottom: 15
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
        fontWeight:'bold'
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 130,
        height: 80,
        resizeMode: "contain"
    },
    col: {
        width: '50%',
        flexDirection: 'column',
    },
    card: {
        width: 320,
        alignSelf: 'center',
        borderRadius: 8,
        shadowColor: 'rgba(0,0,0, .2)',
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        marginBottom: 10
    },
    cardItem: {
        backgroundColor: '#124d4d',
        justifyContent: 'center',
        height: 20,
        paddingTop: 0,
        paddingBottom: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderWidth: 0
    },
    cardItemText: {
        color: '#fff',
        fontSize: 10
    },
    carouselImage: {
        flex: 1,
        width: '100%',
        height: 130,
        resizeMode: "stretch"
    },
    carousel: {
        backgroundColor: '#fff',
        width: '100%',
        height: 130,
        marginTop: 10
    },
    carouselArrow: {
        color: '#333',
        fontSize: 15,
        marginLeft: 5,
        marginRight: 5
    },
    textInfo: {
        color: '#124d4d',
        fontSize: 9,
        fontWeight: 'bold',
        marginBottom: 10
    },
    remainText: {
        color: '#333',
        fontSize: 9,
        textAlign: 'right',
        fontWeight: 'bold',
    },
    remainMainText: {
        color: 'rgb(132,193,37)',
        fontSize: 9,
        textAlign: 'right',
        fontWeight: 'bold',
    }
});