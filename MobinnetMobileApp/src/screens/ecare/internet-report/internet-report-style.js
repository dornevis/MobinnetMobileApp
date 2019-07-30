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
        marginBottom: 20,
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
    calendarIcon: {
        width: 15,
        resizeMode: "contain",
        height: 15,
        position: 'absolute',
        left: 5,
        top: 9
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
    titleImage: {
        borderRadius: 50,
        width: 60,
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 0
    },
    titleText: {
        fontSize: 13,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#124d4d',
        alignSelf: 'center'
    },
    explainText: {
        fontSize: 7,
        color: '#333',
        lineHeight: 31,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 130,
        height: 80,
        resizeMode: "contain"
    },
    item: {
        marginLeft: 5,
        position: 'relative',
        marginRight: 5
    },
    label: {
        fontSize: 8,
        color: '#515151',
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginRight: 5
    },
    parentViewForm: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    form: {
        alignSelf: 'center',
        flexDirection: 'row',
    },
    formView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    input: {
        borderColor: '#124d4d',
        borderWidth: 0.5,
        borderRadius: 2,
        height: 25,
        marginTop: 5,
        fontSize: 9,
        textAlign: 'right',
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
    },
    tabHeader: {

    },
    tabs: {
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: 'gray',
        backgroundColor: '#fff'
    },
    tab: {
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: 'gray',
        backgroundColor: '#fff'
    },
    activeTab: {
        backgroundColor: 'rgb(132,193,37)',
        borderBottomLeftRadius:5,
        borderTopLeftRadius:5
    },
    tabText: {
        fontSize: 9,
        color: 'gray',
        fontWeight: 'bold'
    },
    activeTabText: {
        color: '#fff'
    }
});