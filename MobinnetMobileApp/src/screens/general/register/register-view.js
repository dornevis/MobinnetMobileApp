import React, { Component } from 'react'
import styles from './register-style'
import { Image, View } from 'react-native'
import { Card, CardItem, Form, Item, Input, Label, Text, Button } from 'native-base';
import Images from '../../../helpers/images'

class RegisterView extends Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {

    }

    onBackClick() {
        this.props.navigation.navigate(routeNames.general.login, {})
    }

    onRegisterClick() {
        this.props.navigation.navigate(routeNames.ecare.createAccount, {})
    }

    render() {
        return (
            <View style={styles.view}>
                <View style={styles.container}>
                    <Text style={styles.title}>ثبت نام</Text>
                    <Image
                        style={styles.logoImage}
                        source={Images.getMobinnetLogoImage} />
                    <Image
                        style={styles.backgroundImage}
                        source={Images.getBackgroundImage} />
                    <Card style={styles.registerCard}>
                        <CardItem>
                            <Form style={styles.form}>
                                <Item floatingLabel last style={styles.item}>
                                    <Label style={styles.label}>نام و نام خانوادگی</Label>
                                    <Input style={styles.input} />
                                </Item>
                                <Image
                                    style={[styles.icon, { top: 30 }]}
                                    source={Images.getUserIcon} />
                                <Item floatingLabel last style={styles.item}>
                                    <Label style={styles.label}>شماره موبایل</Label>
                                    <Input style={styles.input} />
                                </Item>
                                <Image
                                    style={[styles.icon, { top: 87 }]}
                                    source={Images.getPhoneIcon} />
                                <Item floatingLabel last style={styles.item}>
                                    <Label style={styles.label}>کد فعالسازی</Label>
                                    <Input style={styles.input} />
                                </Item>
                                <Image
                                    style={[styles.icon, { top: 143 }]}
                                    source={Images.getVerificationCodeIcon} />
                                <Item floatingLabel last style={styles.item}>
                                    <Label style={styles.label}>کلمه عبور</Label>
                                    <Input style={styles.input} secureTextEntry />
                                </Item>
                                <Image
                                    style={[styles.icon, { top: 200 }]}
                                    source={Images.getEyeSlashIcon} />
                            </Form>
                        </CardItem>
                    </Card>
                    <Button success style={styles.registerBtn} onPress={this.onRegisterClick.bind(this)}>
                        <Text style={styles.textBtn}>ثبت نام</Text>
                    </Button>
                </View>
                <Button onPress={this.onBackClick.bind(this)} small light style={[styles.transparentBtn, styles.backBtn]}><Text style={styles.backBtnText}>بازگشت به<Text style={styles.backText}>صفحه ورود</Text></Text></Button>
            </View>
        )
    }
}

export default RegisterView;