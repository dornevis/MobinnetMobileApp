import React, { Component } from 'react'
import styles from './create-account-style'
import { View, Dimensions, Image, Picker, ScrollView, ImageBackground } from 'react-native'
import { Card, CardItem, Form, Item, Input, Label, Text, Button, Icon, } from 'native-base';
import Images from '../../../helpers/images'
var { width, height } = Dimensions.get('window');

class CreateAccountView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "key1",
            showMenu: false,
            selectedItem: ''
        };
    }
    componentDidMount() {

    }
    onValueChange(value) {
        this.setState({
            selected: value,
        });
    }

    onBackClick() {
        this.props.navigation.navigate(routeNames.general.login, {})
    }

    onHelpClick() {
        this.props.navigation.navigate(routeNames.general.help, {})
    }

    // renderPicker() {
    //     if (this.state.showMenu) {
    //         return (
    //             <View style={{
    //                 width: 415,
    //                 height: 120,
    //                 position: 'absolute',
    //                 top: 48,
    //                 left: 0,
    //                 backgroundColor: '#fff',
    //                 zIndex: 10,
    //                 borderWidth: 1,
    //                 borderColor: '#ccc',
    //                 alignSelf: 'center',
    //                 right: 0,
    //                 justifyContent: 'center',
    //                 alignItems: 'flex-end',
    //                 borderRadius: 5,
    //                 shadowOffset: { width: 0, height: 1 },
    //                 shadowOpacity: 0.1,
    //                 shadowColor: '#eee',
    //                 paddingRight: 20,
    //                 paddingTop: 20,
    //                 paddingBottom: 20
    //             }}>
    //                 <ScrollView>
    //                     <Text onPress={(value) => this.selectItem(value)} style={{ fontSize: 15, fontWeight: 'bold', color: 'gray', marginBottom: 15 }}>تستی</Text>
    //                     <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray', marginBottom: 15 }}>تستی</Text>
    //                     <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray', marginBottom: 15 }}>تستی</Text>
    //                 </ScrollView>
    //             </View>
    //         )
    //     } else {
    //         return null;
    //     }
    // }

    showMenu() {
        this.setState({ showMenu: !this.state.showMenu })
    }

    selectItem(value) {
        this.setState({ selectedItem: value })
    }


    render() {
        return (
            <View style={styles.view}>
                <View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <ImageBackground source={Images.getWifiBackImage} style={styles.backgroundImage}>
                        <View style={styles.helpView}>
                            <Text style={width > 769 ? styles.helpText : styles.helpTextResponsive}>
                                مشتریان مبین‌نت می‌توانند جهت استفاده از تلفن‌های ثابت مبین‌نت
                                به پیش‌ شماره 0944 در این صفحه اقدام نمایند، لذا جهت کسب
                                اطلاعات بیشتر به وب‌سایت مبین‌نت مراجعه نمایید.
                             </Text>
                        </View>
                        <View>
                            <Image source={Images.getSubmitServiceImage} style={width > 769 ? styles.submitImage : styles.submitImageResponsive} />
                            <Card style={width > 769 ? styles.submitServiceCard : styles.submitServiceCardResponsive}>
                                <CardItem>
                                    <Form style={styles.form}>
                                        <Item picker style={[width > 769 ? styles.item : styles.itemResponsive, { marginTop: 10, justifyContent: 'center', alignItems: 'center' }]}>
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon name="arrow-down" />}
                                                placeholder="نوع سرویس"
                                                itemStyle={{ fontSize: 9, color: 'red', backgroundColor: 'lightgrey' }}
                                                itemTextStyle={{ fontSize: 9, color: 'green' }}
                                                textStyle={{ fontSize: 9, color: 'gray' }}
                                                style={{ height: 50, width: 250, fontSize: 9, color: 'gray', alignSelf: 'flex-start' }}
                                                selectedValue={this.state.selected}
                                                onValueChange={this.onValueChange.bind(this)}
                                            >
                                                <Picker.Item label="نوع سرویس" value="" color='gray' />
                                                <Picker.Item label="1تستی" value="key1" color='#85c125' />
                                                <Picker.Item label="2تستی" value="key2" color='#85c125' />
                                                <Picker.Item label="3تستی" value="key3" color='#85c125' />
                                                <Picker.Item label="تستی4" value="key4" color='#85c125' />
                                            </Picker>
                                            {/* <Button onPress={this.showMenu.bind(this)} transparent style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={Images.getDropDownIcon} style={{ width: 10, height: 10, resizeMode: 'contain' }} />
                                                <Text style={{ fontSize: 14, color: 'gray', fontWeight: 'bold' }}>نوع سرویس</Text>
                                                <Text style={{ fontSize: 14, color: 'gray', fontWeight: 'bold' }}>{this.state.selectedItem}</Text>
                                            </Button> */}
                                        </Item>
                                        {/* {this.renderPicker()} */}
                                        <Item floatingLabel last style={width > 769 ? styles.item : styles.itemResponsive}>
                                            <Label style={width > 769 ? styles.label : styles.labelResponsive}>نام مستعار</Label>
                                            <Input style={width > 769 ? styles.input : styles.inputResponsive} />
                                        </Item>
                                        <Image
                                            style={[styles.icon, width > 769 ? styles.userIcon : styles.userIconResponsive]}
                                            source={Images.getUserIcon} />
                                        <Item floatingLabel last style={width > 769 ? styles.item : styles.itemResponsive}>
                                            <Label style={width > 769 ? styles.label : styles.labelResponsive}>شماره خط</Label>
                                            <Input style={width > 769 ? styles.input : styles.inputResponsive} />
                                        </Item>
                                        <Image
                                            style={[styles.icon, width > 769 ? styles.numberIcon : styles.numberIconResponsive]}
                                            source={Images.getPhoneIcon} />
                                        <Item floatingLabel last style={width > 769 ? styles.item : styles.itemResponsive}>
                                            <Label style={width > 769 ? styles.label : styles.labelResponsive}>رمز خط</Label>
                                            <Input style={width > 769 ? styles.input : styles.inputResponsive} secureTextEntry />
                                        </Item>
                                        <Image
                                            style={[styles.icon, width > 769 ? styles.passIcon : styles.passIconResponsive]}
                                            source={Images.getEyeSlashIcon} />
                                    </Form>
                                </CardItem>
                            </Card>
                            <Button success style={width > 769 ? styles.submitBtn : styles.submitBtnResponsive} >
                                <Text style={width > 769 ? styles.textBtn : styles.textBtnResponsive}>ثبت سرویس</Text>
                            </Button>
                        </View>
                        <View style={width > 769 ? styles.submitServiceFooter : styles.submitServiceFooterResponsive}>
                            <Button small light style={[styles.transparentBtn]} onPress={this.onHelpClick.bind(this)}>
                                <Text style={width > 769 ? styles.guideText : styles.guideTextResponsive}>راهنما</Text>
                                <Image
                                    style={styles.helpIcon}
                                    source={Images.getGuideIcon} />
                            </Button>
                        </View>
                        <Button onPress={this.onBackClick.bind(this)} small light style={[styles.transparentBtn, styles.backBtn]}><Text style={styles.backBtnText}>بازگشت به<Text style={styles.backText}>صفحه ورود</Text></Text></Button>
                    </ImageBackground>
                </ScrollView>
            </View>
        )
    }
}

export default CreateAccountView;