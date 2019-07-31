import { Toast } from 'native-base'
import generalStyle from './general-style';

const defaultDuration = 5000;
const defaultPosition = 'bottom';

export default toastHelper = {
    showSuccessToast: (text) => {
        Toast.show({
            text: text,
            type: 'success',
            duration: defaultDuration,
            position: defaultPosition,
            style: generalStyle.toastStyle,
            textStyle: generalStyle.toastTextStyle
        });
    },
    showDangerToast: (text) => {
        Toast.show({
            text: text,
            type: 'danger',
            duration: defaultDuration,
            position: defaultPosition,
            style: generalStyle.toastStyle,
            textStyle: generalStyle.toastTextStyle
        });
    },
    showWarningToast: (text) => {
        Toast.show({
            text: text,
            type: 'warning',
            duration: defaultDuration,
            position: defaultPosition,
            style: generalStyle.toastStyle,
            textStyle: generalStyle.toastTextStyle
        });
    }
}