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
    cardBody: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        width: 320,
        paddingBottom: 0,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingRight: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        paddingLeft: 0,
    },
    image: {
        width: 130,
        height: 80,
        resizeMode: "contain"
    },
    col: {
        width: 200,
        paddingTop: 0,
        paddingRight: 0,
        paddingLeft: 0,
        paddingBottom: 0,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    card: {
        width: 320,
        alignSelf: 'center',
        shadowColor: 'rgba(0,0,0, .2)',
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        marginBottom: 10,
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        flex: 1
    },

    cardItem: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 0,
    },
    cardItemText: {
        color: '#fff',
        fontSize: 10
    },
    textInfo: {
        color: 'gray',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'center',
        marginBottom: 0
    },
    confirmBtn: {
        backgroundColor: 'rgb(132,193,37)',
        height: 20,
        width: 70,
        borderRadius: 13,
        justifyContent: 'center',
        marginTop: 0
    },
    confirmTextBtn: {
        color: '#fff',
        fontSize: 8,
        fontWeight: 'bold'
    }
});