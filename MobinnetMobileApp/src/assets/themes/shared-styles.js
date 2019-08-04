import { Dimensions, StyleSheet } from "react-native";
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    backgroundImage: {
        resizeMode: "stretch",
        width: (width / 2) + 95,
        height: 160,
        position: 'relative'
    },
    drawerHeaderText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#124d4d',
        marginBottom: 5
    },
    textInfoView: {
        position: 'absolute',
        top: 55,
        left: 0,
        right: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        height: height,
    },
    listItem: {
        height: 10,
        marginBottom: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 270,
        marginLeft: 0,
        paddingLeft: 0,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent'
    },
    listItemText: {
        fontSize: 9,
        color: 'gray',
        fontWeight: 'bold',
    },
    modalView:{
        backgroundColor: "#fff",
        width: width - 30,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    }
});