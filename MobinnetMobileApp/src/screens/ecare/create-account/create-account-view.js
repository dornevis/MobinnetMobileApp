import React, { Component } from 'react'
import styles from './create-account-style'
import { View, ImageBackground, Image, Picker ,FlatList} from 'react-native'
import { Card, CardItem, Form, Item, Input, Label, Text, Button, Icon, } from 'native-base';
import Images from '../../../helpers/images'
class CreateAccountView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "key1"
        };
    }
    componentDidMount() {

    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    onBackClick() {
        this.props.navigation.navigate(routeNames.general.login, {})
    }

    onHelpClick() {
        this.props.navigation.navigate(routeNames.general.help, {})
    }

    render() {
        let data = [{
            value: 'تستی1',
        }, {
            value: 'تستی2',
        }, {
            value: 'تستی3',
        }];
        return (
            <View style={styles.view}>
                <ImageBackground source={Images.getWifiBackImage} style={styles.backgroundImage}>
                    <View style={styles.container}>
                        <View style={styles.helpView}>
                            <Text style={styles.helpText}>
                                مشتریان مبین‌نت می‌توانند جهت استفاده از تلفن‌های ثابت مبین‌نت
                    {"\n"}
                                به پیش‌ شماره 0944 در این صفحه اقدام نمایند، لذا جهت کسب
                     {"\n"}
                                اطلاعات بیشتر به وب‌سایت مبین‌نت مراجعه نمایید.
            </Text>
                        </View>
                        <Image source={Images.getSubmitServiceImage} style={styles.submitImage} />
                        <Card style={styles.submitServiceCard}>
                            <CardItem>
                                <Form style={styles.form}>
                                    <Item picker>
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
                                    </Item>
                                    <Item floatingLabel last style={styles.item}>
                                        <Label style={styles.label}>نام مستعار</Label>
                                        <Input style={styles.input} />
                                    </Item>
                                    <Image
                                        style={[styles.icon, { top: 85 }]}
                                        source={Images.getUserIcon} />
                                    <Item floatingLabel last style={styles.item}>
                                        <Label style={styles.label}>شماره خط</Label>
                                        <Input style={styles.input} />
                                    </Item>
                                    <Image
                                        style={[styles.icon, { top: 140 }]}
                                        source={Images.getPhoneIcon} />
                                    <Item floatingLabel last style={styles.item}>
                                        <Label style={styles.label}>رمز خط</Label>
                                        <Input style={styles.input} secureTextEntry />
                                    </Item>
                                    <Image
                                        style={[styles.icon, { top: 197 }]}
                                        source={Images.getEyeSlashIcon} />
                                </Form>
                            </CardItem>
                        </Card>
                        <Button success style={styles.submitBtn} >
                            <Text style={styles.textBtn}>ثبت سرویس</Text>
                        </Button>
                        <View style={styles.submitServiceFooter}>
                            <Button small light style={[styles.transparentBtn]} onPress={this.onHelpClick.bind(this)}>
                                <Text style={styles.guideText}>راهنما</Text>
                                <Image
                                    style={styles.helpIcon}
                                    source={Images.getGuideIcon} />
                            </Button>
                        </View>
                    </View>
                    <Button onPress={this.onBackClick.bind(this)} small light style={[styles.transparentBtn, styles.backBtn]}><Text style={styles.backBtnText}>بازگشت به<Text style={styles.backText}>صفحه ورود</Text></Text></Button>
                </ImageBackground>
            </View >
        )
    }
}

export default CreateAccountView;