import React, { Component } from 'react'
import styles from './forgot-password-style'
import { Image, View } from 'react-native'
import Images from '../../../helpers/images'
import axios from 'axios'
import { Card, CardItem, Form, Item, Input, Label, Text, Button } from 'native-base';
import routeNames from '../../../helpers/route-names';
import apiConfig from '../../../helpers/api-config';
import toastHelper from '../../../helpers/toast-helper';
import apiResultCodes from '../../../helpers/api-result-codes';
import defaultMessages from '../../../helpers/default-messages';
import { Loading } from '../../../components';

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

    onForgotPasswordClick(){
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
                <View style={styles.container}>
                    <Text style={styles.title}>فراموشی کلمه عبور</Text>
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
                                    <Input style={styles.input} onChangeText={this.onChangeTextPhoneNumber.bind(this)}/>
                                </Item>
                                <Image
                                    style={styles.icon}
                                    source={Images.getPhoneIcon} />
                            </Form>
                        </CardItem>
                    </Card>
                    <Button onPress={this.onForgotPasswordClick.bind(this)} success style={styles.forgotPasswordBtn} >
                        <Text style={styles.textBtn}>تأیید</Text>
                    </Button>
                </View>
                <Button onPress={this.onBackClick.bind(this)} small light style={[styles.transparentBtn, styles.backBtn]}><Text style={styles.backBtnText}>بازگشت به<Text style={styles.backText}>صفحه ورود</Text></Text></Button>
            </View>
        )
    }
}

export default ForgotPasswordView;