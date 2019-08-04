import React, { Component } from 'react'
import styles from './profile-style'
import { View, Text, Image, ImageBackground, ScrollView, Dimensions } from 'react-native'
import { Header, Left, Right, Button, Title, Form, Item, Input, Label } from 'native-base';
import Images from '../../../helpers/images'
let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
class ProfileView extends Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {

    }

    render() {
        return (
            <View style={styles.view}>
                <View>
                    <Image style={styles.backgroundImage}
                        source={Images.getDefaultBackground} />
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <Header style={styles.headerProfile}>
                        <Left>
                            <Button transparent>
                                <Image
                                    style={styles.icon}
                                    source={Images.getBackIcon} />
                            </Button>
                        </Left>
                        <Right style={styles.headerRight}>
                            <Title style={styles.headerTitle}>پروفایل کاربری</Title>
                        </Right>
                    </Header>
                    <Image
                        style={width > 769 ? styles.titleImage : styles.titleImageResponsive}
                        source={Images.getProfileIcon} />
                    <Text style={width > 769 ? styles.titleText : styles.titleTextResponsive}>مدیریت پروفایل کاربری</Text>
                    <Text style={width > 769 ? styles.profileText : styles.profileTextResponsive}>
                        مشترک گرامی در این بخش می‌توانید کلمه عبور و اطلاعات تماس خود را در صورت نیاز تغییر دهید، همچنین در صورت
                        به همراه داشتن شناسه نیز می‌توانید با درج اطلاعات دقیق از صحت دریافت اخبار و تغییرات طرح‌ها و تعرفه‌ها اطمینان
                        حاصل فرمایید.
                    </Text>
                    <View style={width > 1200 ? styles.formView : styles.formViewResponsive}>
                        <Form style={styles.form}>
                            <Label style={width > 769 ? styles.label : styles.labelResponsive}>نام</Label>
                            <Item style={styles.item}>
                                <Input style={width > 769 ? styles.input : styles.inputResponsive} />
                            </Item>
                            <Label style={width > 769 ? styles.label : styles.labelResponsive}>شماره موبایل</Label>
                            <Item style={styles.item}>
                                <Input style={width > 769 ? styles.input : styles.inputResponsive} />
                            </Item>
                            <Label style={width > 769 ? styles.label : styles.labelResponsive}>کلمه عبور<Text style={styles.star}>*</Text></Label>
                            <Item style={styles.item}>
                                <Input style={width > 769 ? styles.input : styles.inputResponsive} />
                            </Item>
                            <Label style={width > 769 ? styles.label : styles.labelResponsive}>تکرار کلمه عبور<Text style={styles.star}>*</Text></Label>
                            <Item style={styles.item}>
                                <Input style={width > 769 ? styles.input : styles.inputResponsive} secureTextEntry />
                            </Item>
                            <Label style={width > 769 ? styles.label : styles.labelResponsive}>نام و نام خانوادگی</Label>
                            <Item style={styles.item}>
                                <Input style={width > 769 ? styles.input : styles.inputResponsive} />
                            </Item>
                        </Form>
                        <Button style={styles.confirmBtn}><Text style={styles.confirmTextBtn}>ثبت تغییرات</Text></Button>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default ProfileView;