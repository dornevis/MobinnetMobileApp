import { Dimensions } from "react-native";
var { width, height } = Dimensions.get('window');

// alert(width)

export default styleCompatibility = {
    getAuthFormWidth: () => {
        if (width >= 991) {
            return width - 240;
        }
        else if (width >= 768) {
            return width - 220;
        }
        return width - 70;
    },
    getAuthFormLabelTextSize: () => {
        if (width >= 991) {
            return 17;
        }
        else if (width >= 768) {
            return 15;
        }
        return 12;
    },
    getAuthFormCircleButtonTextSize: () => {
        if (width >= 991) {
            return 17;
        }
        else if (width >= 768) {
            return 15;
        }
        return 12;
    },
    getAuthFormHeaderImageHeigth: () => {
        if (width >= 991) {
            return 250;
        }
        else if (width >= 768) {
            return 240;
        }
        return 150;
    },
    getAuthFormCircleButton: () => {
        if (width >= 991) {
            return {
                width: 140,
                height: 140,
                marginTop: -50
            }
        }
        else if (width >= 768) {
            return {
                width: 90,
                height: 90,
                marginTop: -50
            }
        }
        return {
            width: 65,
            height: 65,
            marginTop: -35
        }
    }
}