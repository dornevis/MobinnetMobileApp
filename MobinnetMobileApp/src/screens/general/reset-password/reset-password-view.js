import React, { Component } from 'react'
import styles from './reset-password-style'
import { Image, View } from 'react-native'
import { Card, CardItem, Form, Item, Input, Label, Text, Button } from 'native-base';
import Images from '../../../helpers/images'

class ResetPasswordView extends Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {

    }

    onBackClick() {
        this.props.navigation.navigate(routeNames.general.login, {})
    }

    render() {
        return (
            <View style={styles.view}>
                <View style={styles.container}>
                    <Text style={styles.title}>بازیابی کلمه عبور</Text>
                    <Image
                        style={styles.logoImage}
                        source={Images.getMobinnetLogoImage} />
                    <Image
                        style={styles.backgroundImage}
                        source={Images.getBackgroundImage} />
                    <Card style={styles.resetPasswordCard}>
                        <CardItem>
                            <Form style={styles.form}>
                                <Item floatingLabel last style={styles.item}>
                                    <Label style={styles.label}>شماره موبایل</Label>
                                    <Input style={styles.input} />
                                </Item>
                                <Image
                                    style={[styles.icon, { top: 30 }]}
                                    source={Images.getPhoneIcon} />
                                <Item floatingLabel last style={styles.item}>
                                    <Label style={styles.label}>کد بازیابی</Label>
                                    <Input style={styles.input} />
                                </Item>
                                <Image
                                    style={[styles.icon, { top: 87 }]}
                                    source={Images.getVerificationCodeIcon} />
                                <Item floatingLabel last style={styles.item}>
                                    <Label style={styles.label}>کلمه عبور جدید</Label>
                                    <Input style={styles.input} secureTextEntry />
                                </Item>
                                <Image
                                    style={[styles.icon, { top: 143 }]}
                                    source={Images.getEyeSlashIcon} />
                            </Form>
                        </CardItem>
                    </Card>
                    <Button success style={styles.resetPasswordBtn} >
                        <Text style={styles.textBtn}>تأیید</Text>
                    </Button>
                </View>
                <Button onPress={this.onBackClick.bind(this)} small light style={[styles.transparentBtn, styles.backBtn]}><Text style={styles.backBtnText}>بازگشت به<Text style={styles.backText}>صفحه ورود</Text></Text></Button>
            </View>
        )
    }
}

export default ResetPasswordView;