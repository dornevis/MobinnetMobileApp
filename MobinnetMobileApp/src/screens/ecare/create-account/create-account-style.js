import { Dimensions, StyleSheet } from "react-native";
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'rgb(240,241,245)',
        alignItems: 'center',
        position: 'relative'
    },
    container: {
        position: 'absolute',
        top: width / 9,
        alignItems: 'center',
    },
    backgroundImage: {
        width: width,
        height: height,
        resizeMode: "stretch",
        position: 'relative',
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    submitImage: {
        resizeMode: "stretch",
        width: (width / 2) + 85,
        height: 110
    },
    helpTextView: {
        flexDirection: 'row'
    },
    helpText: {
        fontSize: 9,
        color: 'gray',
        lineHeight: 31,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'right',
        marginBottom: 10,
    },
    label: {
        fontSize: 10,
        color: 'rgb(132,193,37)',
    },
    input: {
        textAlign: 'right',
        fontSize: 11,
    },
    submitServiceCard: {
        width: (width / 2) + 95,
        position: 'relative',
        top: -8,
        height: 270,
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
        paddingTop: 0,
        flex: 1,
        alignItems: 'center',
    },
    textBtn: {
        color: '#fff',
        fontSize: 10,
        paddingRight: 0,
        paddingLeft: 0,
        textAlign: 'center',
    },
    submitBtn: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#eee',
        backgroundColor: 'rgb(132,193,37)',
        position: 'absolute',
        zIndex: 999,
        justifyContent: 'center',
        elevation: 0,
        bottom: -5
    },
    form: {
        flex: 1,
    },
    item: {
        marginTop: 0,
        marginBottom: 5,
        paddingLeft: 0,
    },
    icon: {
        width: 12,
        resizeMode: "contain",
        height: 12,
        position: 'absolute',
        left: 0
    },
    guideText: {
        fontSize: 9,
        color: 'gray',
        paddingRight: 5
    },
    transparentBtn: {
        backgroundColor: '#00000000',
        elevation: 0,
        shadowOpacity: 0
    },
    helpIcon: {
        width: 9,
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
        flex: 1,
        width: (width / 2) + 95,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: -14
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
    }
});