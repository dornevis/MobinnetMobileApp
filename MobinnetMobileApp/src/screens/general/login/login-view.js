import React, { Component } from 'react'
import styles from './login-style'
import axios from 'axios'
import { Image, View } from 'react-native'
import { Card, CardItem, Form, Item, Input, Label, Text, Button } from 'native-base';
import Images from '../../../helpers/images'
import routeNames from '../../../helpers/route-names';
import apiConfig from '../../../helpers/api-config';
import toastHelper from '../../../helpers/toast-helper';
import apiResultCodes from '../../../helpers/api-result-codes';
import defaultMessages from '../../../helpers/default-messages';
import { Loading } from '../../../components';

class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            phoneNumber: "",
            password: "",
            showLoading: false
        }
    }

    async componentDidMount() {

    }

    onForgotPasswordClick() {
        this.props.navigation.navigate(routeNames.general.forgotPassword, {})
    }

    onRegisterClick() {
        this.props.navigation.navigate(routeNames.general.registerToken, {})
    }

    onHelpClick() {
        this.props.navigation.navigate(routeNames.general.help, {})
    }

    onLoginClick() {
        self = this;
        this.setState({
            showLoading: true
        });
        try {
            axios.post(apiConfig.serverApi + "User/Login", {
                phoneNumber: this.state.phoneNumber,
                password: this.state.password
            })
                .then(function (response) {
                    if (response.data.resultCode == apiResultCodes.LoginSuccess) {
                        toastHelper.showSuccessToast(response.data.message);
                        self.props.navigation.replace(routeNames.ecare.myServices, { passProps: self.props });
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

    onChangeTextPhoneNumber(value) {
        this.setState({
            phoneNumber: value
        });
    }

    onChangeTextPassword(value) {
        this.setState({
            password: value
        });
    }

    render() {
        return (
            <View style={styles.view}>
                {this.state.showLoading &&
                    <Loading />
                }
                <View style={styles.container}>
                    <Text style={styles.title}>ورود به پنل کاربری</Text>
                    <Image
                        style={styles.logoImage}
                        source={Images.getMobinnetLogoImage} />
                    <Image
                        style={styles.backgroundImage}
                        source={Images.getBackgroundImage} />
                    <Card style={styles.loginCard}>
                        <CardItem>
                            <Form style={styles.form}>
                                <Item floatingLabel last style={styles.item}>
                                    <Label style={styles.label}>شماره موبایل</Label>
                                    <Input style={styles.input} onChangeText={this.onChangeTextPhoneNumber.bind(this)} />
                                </Item>
                                <Image
                                    style={[styles.icon, { top: 30 }]}
                                    source={Images.getPhoneIcon}

                                />
                                <Item floatingLabel last style={styles.item}>
                                    <Label style={styles.label}>کلمه عبور</Label>
                                    <Input style={styles.input} onChangeText={this.onChangeTextPassword.bind(this)} secureTextEntry={!this.state.showPassword} />
                                </Item>
                                <Image
                                    style={[styles.icon, { top: 87 }]}
                                    source={Images.getEyeSlashIcon} />
                            </Form>
                        </CardItem>
                    </Card>
                    <Button onPress={this.onLoginClick.bind(this)} success style={styles.loginBtn} >
                        <Text style={styles.textBtn}>ورود</Text>
                    </Button>
                    <View style={styles.loginFooter}>
                        <Button small light style={[styles.transparentBtn]}
                            onPress={this.onHelpClick.bind(this)}>
                            <Text style={styles.forgotText}>راهنمای ورود</Text>
                            <Image
                                style={styles.helpIcon}
                                source={Images.getHelpIcon} />
                        </Button>
                        <Button small light style={[styles.transparentBtn]} onPress={this.onForgotPasswordClick.bind(this)}><Text style={styles.forgotText}>فراموشی کلمه عبور!</Text></Button>
                    </View>
                </View>
                <Button onPress={this.onRegisterClick.bind(this)} small light style={[styles.transparentBtn, styles.registerBtn]}><Text style={styles.registerBtnText}>عضو نیستید؟ <Text style={styles.registerText}>ثبت نام</Text>کنید</Text></Button>
            </View>
        )
    }
}

export default LoginView;