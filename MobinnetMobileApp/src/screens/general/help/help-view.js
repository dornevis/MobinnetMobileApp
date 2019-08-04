import React, { Component } from 'react'
import styles from './help-style'
import { View, Text, Button } from 'native-base'
import { Image, ImageBackground, Linking, Dimensions } from 'react-native'
import Images from '../../../helpers/images'
var { width, height } = Dimensions.get('window');

class HelpView extends Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {

    }

    onBackClick() {
        this.props.navigation.navigate(routeNames.general.login, {})
    }

    onDownloadManualClick() {
        Linking.openURL('https://my.mobinnet.ir/pdf/%D8%B1%D8%A7%D9%87%D9%86%D9%85%D8%A7%DB%8C%20%D8%B3%D8%B1%D9%88%DB%8C%D8%B3%20td-lte.pdf');
    }

    onDownloadVideoClick() {
        Linking.openURL('https://my.mobinnet.ir/videos/Mobinnet-User-Page-Guide%20-%20V%2002.mp4');
    }

    onNavigateToFAQScreenClick() {
        this.props.navigation.navigate(routeNames.general.help, {})
    }

    render() {
        return (
            <View style={styles.view}>
                <ImageBackground source={Images.getWifiBackImage} style={styles.backgroundImage}>
                    <View style={styles.container}>
                        <Image source={Images.getHelpPageIcon} style={width > 769 ? styles.helpIcon : styles.helpIconResponsive} />
                        <View style={styles.helpView}>
                            <Text style={width > 769 ? styles.helpText : styles.helpTextResponsive}>
                                شما می‌توانید با دریافت دفترچه راهنما از لینک زیر تمامی مراحل
                                ثبت نام را به راحتی
                                تکمیل نموده و سریع‌تر به جمع مشترکین
                                مبین‌نت بپیوندید
                </Text>
                        </View>
                        <Button light style={width > 769 ? styles.helpBtn : styles.helpBtnResponsive} onPress={this.onDownloadManualClick.bind(this)}>
                            <Text style={width > 769 ? styles.helpBtnText : styles.helpBtnTextResponsive}>دانلود دفترچه راهنمای ورود</Text>
                            <Image source={Images.getHelpNoteIcon} style={styles.helpNoteIcon} />
                        </Button>
                        <Button light style={width > 769 ? styles.helpBtn : styles.helpBtnResponsive} onPress={this.onDownloadVideoClick.bind(this)}>
                            <Text style={width > 769 ? styles.helpBtnText : styles.helpBtnTextResponsive}>دانلود فیلم آموزشی</Text>
                            <Image source={Images.getHelpVideoIcon} style={styles.helpNoteIcon} />
                        </Button>
                        <Button light style={width > 769 ? styles.helpBtn : styles.helpBtnResponsive} onPress={this.onNavigateToFAQScreenClick.bind(this)}>
                            <Text style={width > 769 ? styles.helpBtnText : styles.helpBtnTextResponsive}>سوالات متداول</Text>
                            <Image source={Images.getFAQIcon} style={styles.helpNoteIcon} />
                        </Button>
                    </View>
                    <Button onPress={this.onBackClick.bind(this)} small light style={[styles.transparentBtn, styles.backBtn]}><Text style={styles.backBtnText}>بازگشت به<Text style={styles.backText}>صفحه ورود</Text></Text></Button>
                </ImageBackground>
            </View>
        )
    }
}

export default HelpView;