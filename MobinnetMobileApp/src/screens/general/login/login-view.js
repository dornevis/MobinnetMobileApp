import React, { Component } from 'react'
import styles from './login-style'
import axios from 'axios'
import { Image, View, Dimensions, ScrollView } from 'react-native'
import { Card, CardItem, Form, Item, Input, Label, Text, Button } from 'native-base';
import Images from '../../../helpers/images'
import routeNames from '../../../helpers/route-names';
import apiConfig from '../../../helpers/api-config';
import toastHelper from '../../../helpers/toast-helper';
import apiResultCodes from '../../../helpers/api-result-codes';
import defaultMessages from '../../../helpers/default-messages';
import { Loading } from '../../../components';
import styleCompatibility from '../../../helpers/style-compatibility'
var { width, height } = Dimensions.get('window');

class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: "",
            password: "",
            showLoading: false,
            togglePassword: false
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

    onTogglePassword() {
        this.setState({ togglePassword: !this.state.togglePassword })
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
                <View style={styles.container}>
                    {this.state.showLoading &&
                        <Loading />
                    }
                    <Text style={width > 991 ? styles.title : styles.titleResponsive}>ورود به پنل کاربری</Text>
                    <Image
                        style={width > 991 ? styles.logoImage : styles.logoImageResponsive}
                        source={Images.getMobinnetLogoImage} />
                    <Image
                        style={styles.headerImage}
                        source={Images.getBackgroundImage} />
                    <Card style={styles.loginCard}>
                        <CardItem>
                            <Form style={styles.form}>
                                <Item floatingLabel last style={width > 991 ? styles.item : styles.itemResponsive}>
                                    <Label style={styles.label}>شماره موبایل</Label>
                                    <Input style={width > 991 ? styles.input : styles.inputResponsive} onChangeText={this.onChangeTextPhoneNumber.bind(this)} />
                                </Item>
                                <Image
                                    style={[styles.icon, width > 991 ? styles.phoneIcon : styles.phoneIconResponsive]}
                                    source={Images.getPhoneIcon}
                                />
                                <Item floatingLabel last style={width > 991 ? styles.item : styles.itemResponsive}>
                                    <Label style={styles.label}>کلمه عبور</Label>
                                    <Input style={width > 991 ? styles.input : styles.inputResponsive} onChangeText={this.onChangeTextPassword.bind(this)} secureTextEntry={!this.state.togglePassword} />
                                </Item>
                                <Button style={[styles.icon, styles.btnIcon, width > 991 ? styles.eyeIcon : styles.eyeIconResponsive]} small light onPress={this.onTogglePassword.bind(this)}>
                                    <Image
                                        style={width > 991 ? styles.icon : styles.iconResponsive}
                                        source={this.state.togglePassword ? Images.getEyeIcon : Images.getEyeSlashIcon} />
                                </Button>
                            </Form>
                        </CardItem>
                    </Card>
                    <Button onPress={this.onLoginClick.bind(this)} success style={[styles.loginBtn, styleCompatibility.getAuthFormCircleButton()]} >
                        <Text style={styles.textBtn}>ورود</Text>
                    </Button>
                    <View style={styles.loginFooter}>
                        <Button small light style={[styles.transparentBtn]}
                            onPress={this.onHelpClick.bind(this)}>
                            <Text style={width > 991 ? styles.forgotText : styles.forgotTextResponsive}>راهنمای ورود</Text>
                            <Image
                                style={width > 991 ? styles.helpIcon : styles.helpIconResponsive}
                                source={Images.getHelpIcon} />
                        </Button>
                        <Button small light style={[styles.transparentBtn]} onPress={this.onForgotPasswordClick.bind(this)}><Text style={width > 991 ? styles.forgotText : styles.forgotTextResponsive}>فراموشی کلمه عبور!</Text></Button>
                    </View>
                    <Button onPress={this.onRegisterClick.bind(this)} small light style={[styles.transparentBtn, styles.registerBtn]}><Text style={width > 991 ? styles.registerBtnText : styles.registerBtnTextRegister}>عضو نیستید؟ <Text style={width > 991 ? styles.registerText : styles.registerTextResponsive}>ثبت نام</Text>کنید</Text></Button>
                </View>
            </View>
        )
    }
}

export default LoginView;