import React, { Component } from 'react'
import styles from './forgot-password-style'
import { Image, View } from 'react-native'
import { Card, CardItem, Form, Item, Input, Label, Text, Button } from 'native-base';
import Images from '../../../helpers/images'

class ForgotPasswordView extends Component {

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
                    <Text style={styles.title}>فراموشی رمز عبور</Text>
                    <Image
                        style={styles.logoImage}
                        source={Images.getMobinnetLogoImage} />
                    <Image
                        style={styles.backgroundImage}
                        source={Images.getBackgroundImage} />
                    <Card style={styles.forgotPasswordCard}>
                        <CardItem>
                            <Form style={styles.form}>
                                <Item floatingLabel last style={styles.item}>
                                    <Label style={styles.label}>شماره موبایل</Label>
                                    <Input style={styles.input} />
                                </Item>
                                <Image
                                    style={styles.icon}
                                    source={Images.getPhoneIcon} />
                            </Form>
                        </CardItem>
                    </Card>
                    <Button success style={styles.forgotPasswordBtn} >
                        <Text style={styles.textBtn}>تأیید</Text>
                    </Button>
                </View>
                <Button onPress={this.onBackClick.bind(this)} small light style={[styles.transparentBtn, styles.backBtn]}><Text style={styles.backBtnText}>بازگشت به<Text style={styles.backText}>صفحه ورود</Text></Text></Button>
            </View>
        )
    }
}

export default ForgotPasswordView;