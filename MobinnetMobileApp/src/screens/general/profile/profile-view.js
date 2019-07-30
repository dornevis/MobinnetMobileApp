import React, { Component } from 'react'
import styles from './profile-style'
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native'
import { Header, Left, Right, Button, Title, Form, Item, Input, Label } from 'native-base';
import Images from '../../../helpers/images'

class ProfileView extends Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {

    }

    render() {
        return (
            <ScrollView>
                <View style={styles.view}>
                    <ImageBackground source={Images.getDefaultBackground} style={styles.backgroundImage}>
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
                                <Button transparent>
                                    <Image
                                        style={styles.icon}
                                        source={Images.getMenuIcon} />
                                </Button>
                            </Right>
                        </Header>
                        <Image
                            style={styles.titleImage}
                            source={Images.getProfileIcon} />
                        <Text style={styles.titleText}>مدیریت پروفایل کاربری</Text>
                        <Text style={styles.profileText}>
                            مشترک گرامی در این بخش می‌توانید کلمه عبور و اطلاعات تماس خود را در صورت نیاز تغییر دهید، همچنین در صورت
                            به همراه داشتن شناسه نیز می‌توانید با درج اطلاعات دقیق از صحت دریافت اخبار و تغییرات طرح‌ها و تعرفه‌ها اطمینان
                            حاصل فرمایید.
                    </Text>
                        <View style={styles.formView}>
                            <Form style={styles.form}>
                                <Label style={styles.label}>نام</Label>
                                <Item style={styles.item}>
                                    <Input style={styles.input} />
                                </Item>
                                <Label style={styles.label}>شماره موبایل</Label>
                                <Item style={styles.item}>
                                    <Input style={styles.input} />
                                </Item>
                                <Label style={styles.label}>کلمه عبور<Text style={styles.star}>*</Text></Label>
                                <Item style={styles.item}>
                                    <Input style={styles.input} secureTextEntry />
                                </Item>
                                <Label style={styles.label}>تکرار کلمه عبور<Text style={styles.star}>*</Text></Label>
                                <Item style={styles.item}>
                                    <Input style={styles.input} secureTextEntry />
                                </Item>
                                <Label style={styles.label}>نام و نام خانوادگی</Label>
                                <Item style={styles.item}>
                                    <Input style={styles.input} />
                                </Item>
                            </Form>
                            <Button style={styles.confirmBtn}><Text style={styles.confirmTextBtn}>ثبت تغییرات</Text></Button>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        )
    }
}

export default ProfileView;