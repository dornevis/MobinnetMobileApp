import { Dimensions, StyleSheet } from "react-native";
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
    },
    backgroundImage: {
        width: width,
        height: height,
        resizeMode: "stretch",
        position: 'relative',
    },
    profileText: {
        fontSize: 8,
        color: '#333',
        lineHeight: 31,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 0,
    },
    titleImage: {
        borderRadius: 50,
        width: 60,
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 30
    },
    titleText: {
        fontSize: 13,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'gray',
        alignSelf: 'center'
    },
    icon: {
        width: 10,
        resizeMode: "contain",
        height:10,
        marginLeft: 5
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
    serviceText: {
        fontSize: 8,
        color: 'gray',
        lineHeight: 31,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 0,
    },
    card: {
        width: 300,
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
    },
    cardBody: {
        backgroundColor: 'rgb(132,193,37)',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 90
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    cardFooter: {
        backgroundColor: '#124d4d',
        height: 20,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardFooterText: {
        color: '#fff',
        fontSize: 7,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    cardBodyText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 0
    },
    lteImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        position: 'absolute',
        left: 0,
        bottom: 0
    },
    confirmBtn: {
        backgroundColor: 'transparent',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
    },
    confirmTextBtn: {
        color: '#00ba0d',
        fontSize: 9,
        fontWeight: 'bold',
        marginBottom: 0,
    }
});