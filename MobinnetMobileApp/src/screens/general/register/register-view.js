import React, { Component } from 'react'
import styles from './register-style'
import { Image, View, Dimensions } from 'react-native'
import Images from '../../../helpers/images'
import { Card, CardItem, Form, Item, Input, Label, Text, Button } from 'native-base';
import routeNames from '../../../helpers/route-names';
import apiConfig from '../../../helpers/api-config';
import toastHelper from '../../../helpers/toast-helper';
import apiResultCodes from '../../../helpers/api-result-codes';
import defaultMessages from '../../../helpers/default-messages';
import { Loading } from '../../../components';
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';
var { width, height } = Dimensions.get('window');

class RegisterView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            phoneNumber: "",
            password: "",
            mobileToken: "",
            fullName: "",
            showLoading: false
        }
    }

    async componentDidMount() {

    }

    onBackClick() {
        this.props.navigation.navigate(routeNames.general.login, {})
    }

    onRegisterClick() {
        self = this;
        this.setState({
            showLoading: true
        });
        try {
            axios.post(apiConfig.serverApi + "User/Register", {
                phoneNumber: this.state.phoneNumber,
                mobileToken: this.state.mobileToken,
                password: this.state.password,
                fullName: this.state.fullName
            })
                .then(function (response) {
                    if (response.data.resultCode == apiResultCodes.RegisterSuccess) {
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

    onChangeTextMobileToken(value) {
        this.setState({
            mobileToken: value
        });
    }

    onChangeTextPassword(value) {
        this.setState({
            password: value
        });
    }

    onChangeTextFullName(value) {
        this.setState({
            fullName: value
        });
    }

    render() {
        return (
            <View style={styles.view}>
                {this.state.showLoading &&
                    <Loading />
                }
                <Text style={width > 769 ? styles.title : styles.titleResponsive}>تکمیل اطلاعات</Text>
                <Image
                    style={styles.logoImage}
                    source={Images.getMobinnetLogoImage} />
                <Image
                    style={width > 1200 ? styles.backgroundImage : styles.backgroundImageResponsive}
                    source={Images.getBackgroundImage} />
                <Card style={width > 1200 ? styles.registerCard : styles.registerCardResponsive}>
                    <CardItem>
                        <Form style={styles.form}>
                            <Item floatingLabel last style={styles.item}>
                                <Label style={width > 1200 ? styles.label : styles.labelResponsive}>نام و نام خانوادگی</Label>
                                <Input style={width > 1200 ? styles.input : styles.inputResponsive} onChangeText={this.onChangeTextFullName.bind(this)} />
                            </Item>
                            <Image
                                style={[styles.icon, { top: 30 }]}
                                source={Images.getUserIcon} />
                            <Item floatingLabel last style={styles.item}>
                                <Label style={width > 1200 ? styles.label : styles.labelResponsive}>شماره موبایل</Label>
                                <Input style={width > 1200 ? styles.input : styles.inputResponsive} onChangeText={this.onChangeTextPhoneNumber.bind(this)} />
                            </Item>
                            <Image
                                style={[styles.icon, { top: 87 }]}
                                source={Images.getPhoneIcon} />
                            <Item floatingLabel last style={styles.item}>
                                <Label style={width > 1200 ? styles.label : styles.labelResponsive}>کد فعالسازی</Label>
                                <Input style={width > 1200 ? styles.input : styles.inputResponsive} onChangeText={this.onChangeTextMobileToken.bind(this)} />
                            </Item>
                            <Image
                                style={[styles.icon, { top: 143 }]}
                                source={Images.getVerificationCodeIcon} />
                            <Item floatingLabel last style={styles.item}>
                                <Label style={width > 1200 ? styles.label : styles.labelResponsive}>کلمه عبور</Label>
                                <Input style={width > 1200 ? styles.input : styles.inputResponsive} secureTextEntry onChangeText={this.onChangeTextPassword.bind(this)} />
                            </Item>
                            <Image
                                style={[styles.icon, { top: 200 }]}
                                source={Images.getEyeSlashIcon} />
                        </Form>
                    </CardItem>
                </Card>
                <Button success style={width > 769 ? styles.registerBtn : styles.registerBtnResponsive} onPress={this.onRegisterClick.bind(this)}>
                    <Text style={styles.textBtn}>ثبت نام</Text>
                </Button>
                <Button onPress={this.onBackClick.bind(this)} small light style={[styles.transparentBtn, styles.backBtn]}><Text style={styles.backBtnText}>بازگشت به<Text style={styles.backText}>صفحه ورود</Text></Text></Button>
            </View>
        )
    }
}

export default RegisterView;