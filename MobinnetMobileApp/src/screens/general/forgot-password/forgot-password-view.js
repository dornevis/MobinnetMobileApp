import React, { Component } from 'react'
import styles from './forgot-password-style'
import { Image, View, Dimensions } from 'react-native'
import Images from '../../../helpers/images'
import axios from 'axios'
import { Card, CardItem, Form, Item, Input, Label, Text, Button } from 'native-base';
import routeNames from '../../../helpers/route-names';
import apiConfig from '../../../helpers/api-config';
import toastHelper from '../../../helpers/toast-helper';
import apiResultCodes from '../../../helpers/api-result-codes';
import defaultMessages from '../../../helpers/default-messages';
import { Loading } from '../../../components';
var { width, height } = Dimensions.get('window');

class ForgotPasswordView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: "",
            showLoading: false
        }
    }

    async componentDidMount() {

    }

    onForgotPasswordClick() {
        self = this;
        this.setState({
            showLoading: true
        });
        try {
            axios.post(apiConfig.serverApi + "User/SendPasswordRecoveryVerificationCode", {
                phoneNumber: this.state.phoneNumber
            })
                .then(function (response) {
                    if (response.data.resultCode == apiResultCodes.SendPasswordRecoveryVerificationCodeSuccess) {
                        toastHelper.showSuccessToast(response.data.message);
                        self.props.navigation.replace(routeNames.general.resetPassword, { passProps: self.props });
                    } else {
                        toastHelper.showDangerToast(response.data.message);
                    }
                })
                .catch(function (error) {
                    toastHelper.showDangerToast(defaultMessages.InternalError);
                    self.setState({
                        showLoading: false
                    });
                })
                .finally(function () {
                    self.setState({
                        showLoading: false
                    });
                });
        } catch (error) {
            toastHelper.showDangerToast(defaultMessages.InternalError);
            self.setState({
                showLoading: false
            });
        }
    }

    onBackClick() {
        this.props.navigation.navigate(routeNames.general.login, {})
    }

    onChangeTextPhoneNumber(value) {
        this.setState({
            phoneNumber: value
        });
    }

    render() {
        return (
            <View style={styles.view}>
                {this.state.showLoading &&
                    <Loading />
                }
                <Text style={width > 769 ? styles.title : styles.titleResponsive}>فراموشی کلمه عبور</Text>
                <Image
                    style={styles.logoImage}
                    source={Images.getMobinnetLogoImage} />
                <Image
                    style={width > 1200 ? styles.backgroundImage : styles.backgroundImageResponsive}
                    source={Images.getBackgroundImage} />
                <Card style={width > 1200 ? styles.forgotPasswordCard : styles.forgotPasswordCardResponsive}>
                    <CardItem>
                        <Form style={styles.form}>
                            <Item floatingLabel last style={styles.item}>
                                <Label style={width > 1200 ? styles.label : styles.labelResponsive}>شماره موبایل</Label>
                                <Input style={width > 1200 ? styles.input : styles.inputResponsive} onChangeText={this.onChangeTextPhoneNumber.bind(this)} />
                            </Item>
                            <Image
                                style={styles.icon}
                                source={Images.getPhoneIcon} />
                        </Form>
                    </CardItem>
                </Card>
                <Button onPress={this.onForgotPasswordClick.bind(this)} success style={width > 769 ? styles.forgotPasswordBtn : styles.forgotPasswordBtnResponsive} >
                    <Text style={styles.textBtn}>تأیید</Text>
                </Button>
                <Button onPress={this.onBackClick.bind(this)} small light style={[styles.transparentBtn, styles.backBtn]}><Text style={styles.backBtnText}>بازگشت به<Text style={styles.backText}>صفحه ورود</Text></Text></Button>
            </View>
        )
    }
}

export default ForgotPasswordView;