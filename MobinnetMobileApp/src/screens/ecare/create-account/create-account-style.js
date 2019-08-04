import { Dimensions, StyleSheet } from "react-native";
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    view: {
        justifyContent: 'center',
        backgroundColor: 'rgb(240,241,245)',
        alignItems: 'center',
        flex: 1,
        position: 'relative'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    },
    backgroundImage: {
        width: width,
        height: height,
        resizeMode: "stretch",
        position: 'relative',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitImage: {
        resizeMode: "stretch",
        width: 450,
        height: 200,
        position: 'relative',
        marginBottom: -10,
    },
    submitImageResponsive: {
        resizeMode: "stretch",
        width: 270,
        height: 120,
        position: 'relative',
        marginBottom: -10
    },
    helpTextView: {
        flexDirection: 'row'
    },
    helpText: {
        fontSize: 15,
        color: 'gray',
        lineHeight: 31,
        paddingRight: 50,
        paddingLeft: 50,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold'
    },
    helpTextResponsive: {
        fontSize: 10,
        color: 'gray',
        lineHeight: 31,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    label: {
        fontSize: 14,
        color: 'rgb(132,193,37)',
        fontWeight:'bold' 
    },
    labelResponsive: {
        fontSize: 10,
        color: 'rgb(132,193,37)',
        fontWeight:'bold' 
    },
    input: {
        textAlign: 'right',
        fontSize: 14,
        fontWeight:'bold' 
    },
    inputResponsive: {
        textAlign: 'right',
        fontSize: 10,
        fontWeight:'bold' 
    },
    submitServiceCard: {
        width: 450,
        height: 400,
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        paddingTop: 0,
        alignItems: 'center',
        backgroundColor: '#fff',
        alignSelf: 'center',
        zIndex: 1,
    },
    submitServiceCardResponsive: {
        width: 270,
        height: 270,
        borderWidth: 0,
        backgroundColor: '#fff',
        borderColor: 'transparent',
        elevation: 0,
        paddingTop: 0,
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 1,
    },
    textBtn: {
        color: '#fff',
        fontSize: 13,
        paddingRight: 0,
        paddingLeft: 0,
        textAlign: 'center',
    },
    textBtnResponsive: {
        color: '#fff',
        fontSize: 10,
        paddingRight: 0,
        paddingLeft: 0,
        textAlign: 'center',
    },
    submitBtn: {
        width: 75,
        height: 75,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#eee',
        backgroundColor: 'rgb(132,193,37)',
        zIndex: 999,
        justifyContent: 'center',
        elevation: 0,
        marginTop: -40,
        alignSelf: 'center'
    },
    submitBtnResponsive: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#eee',
        backgroundColor: 'rgb(132,193,37)',
        zIndex: 999,
        justifyContent: 'center',
        elevation: 0,
        marginTop: -30,
        alignSelf: 'center'
    },
    form: {
        flex: 1,
    },
    item: {
        marginTop: 0,
        marginBottom: 30,
        paddingLeft: 0,
        position:'relative'
    },
    itemResponsive: {
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        position:'relative'
    },
    icon: {
        width: 12,
        resizeMode: "contain",
        height: 12,
        position: 'absolute',
        left: 0
    },
    guideText: {
        fontSize: 13,
        color: 'gray',
        paddingRight: 5
    },
     guideTextResponsive: {
        fontSize: 10,
        color: 'gray',
        paddingRight: 5
    },
    transparentBtn: {
        backgroundColor: '#00000000',
        elevation: 0,
        shadowOpacity: 0
    },
    helpIcon: {
        width: 11,
        resizeMode: "contain",
        height: 11,
    },
    backBtn: {
        position: 'absolute',
        bottom: 0,
    },
    backBtnText: {
        fontSize: 8,
        color: 'gray'
    },
    backText: {
        color: 'rgb(0,185,13)',
        fontSize: 8
    },
    submitServiceFooter: {
        width: 350,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: -30
    },
    submitServiceFooterResponsive: {
        width: 260,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: -40
    },
    containerStyle: {
        width: 235,
        textAlign: 'right',
        alignSelf: 'center',
        borderBottomColor: 'gray'
    },
    overlayStyle: {

    },
    itemTextStyle: {
        color: 'gray',
        fontSize: 10,
        textAlign: 'right',
        alignSelf: 'flex-end'
    },
    dropDownItem: {
        color: 'gray'
    },
    userIcon: {
        top: 115
    },
    userIconResponsive: {
        top: 83
    },
    numberIcon: {
        top: 195
    },
    numberIconResponsive: {
        top: 133
    },
    passIcon: {
        top: 280
    },
    passIconResponsive: {
        top: 185
    }
});