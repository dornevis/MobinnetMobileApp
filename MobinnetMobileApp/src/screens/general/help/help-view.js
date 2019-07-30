import React, { Component } from 'react'
import styles from './help-style'
import { View, Text, Button } from 'native-base'
import { Image, ImageBackground,Linking } from 'react-native'
import Images from '../../../helpers/images'

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

    render() {
        return (
            <View style={styles.view}>
                <ImageBackground source={Images.getWifiBackImage} style={styles.backgroundImage}>
                    <View style={styles.container}>
                        <Image source={Images.getHelpPageIcon} style={styles.helpIcon} />
                        <View style={styles.helpView}>
                            <Text style={styles.helpText}>
                                شما می‌توانید با دریافت دفترچه راهنما از لینک زیر تمامی مراحل
                        {"\n"}
                                ثبت نام را به راحتی
                                تکمیل نموده و سریع‌تر به جمع مشترکین
                         {"\n"} مبین‌نت بپیوندید
                </Text>
                        </View>
                        <Button light style={styles.helpBtn} onPress={this.onDownloadManualClick.bind(this)}>
                            <Text style={styles.helpBtnText}>دانلود دفترچه راهنمای ورود</Text>
                            <Image source={Images.getHelpNoteIcon} style={styles.helpNoteIcon} />
                        </Button>
                        <Button light style={styles.helpBtn} onPress={this.onDownloadVideoClick.bind(this)}>
                            <Text style={styles.helpBtnText}>دانلود فیلم آموزشی</Text>
                            <Image source={Images.getHelpVideoIcon} style={styles.helpNoteIcon} />
                        </Button>
                    </View>
                    <Button onPress={this.onBackClick.bind(this)} small light style={[styles.transparentBtn, styles.backBtn]}><Text style={styles.backBtnText}>بازگشت به<Text style={styles.backText}>صفحه ورود</Text></Text></Button>
                </ImageBackground>
            </View>
        )
    }
}

export default HelpView;