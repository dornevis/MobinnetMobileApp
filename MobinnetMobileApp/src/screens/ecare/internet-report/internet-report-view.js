import React, { Component } from 'react'
import styles from './internet-report-style'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Header, Right, Button, Title, Left, Form, Input, Label, Item, Tab, Tabs } from 'native-base';
import Images from '../../../helpers/images'
const PersianCalendarPicker = require('react-native-persian-calendar-picker');


class InternetReportView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            showCalendar: false
        }
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        this.setState({ selectedStartDate: date });
    }

    async componentDidMount() {

    }

    onShowCalendar() {
        this.setState({ showCalendar: !this.state.showCalendar });
    }

    onBackScreenClick() {
        this.props.navigation.goBack();
    }

    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        return (
            <ScrollView style={{ backgroundColor: 'rgb(240,241,245)' }}>
                <View style={styles.view}>
                    <Header style={styles.headerProfile}>
                        <Left>
                            <Button transparent
                                onPress={this.onBackScreenClick.bind(this)}>
                                <Image
                                    style={styles.icon}
                                    source={Images.getBackIcon} />
                            </Button>
                        </Left>
                        <Right style={styles.headerRight}>
                            <Title style={styles.headerTitle}>گزارش کارکرد اینترنت</Title>
                            <Button transparent>
                                <Image
                                    style={styles.icon}
                                    source={Images.getMenuIcon} />
                            </Button>
                        </Right>
                    </Header>
                    <Image
                        style={styles.titleImage}
                        source={Images.getInternetReportImage} />
                    <Text style={styles.titleText}>کارکرد اینترنت</Text>
                    <Text style={styles.explainText}>
                        این گزارش نشان‌دهنده مجموع ارسال و دریافت اینترنت کاربر در بازه زمانی مختلف است.
                        همچنین برای آسان‌سازی دسترسی به گزارش موردنظر امکان تنظیم بازه زمانی برای گزارش ارسال و دریافت کاربر وجود دارد.
                        در این گزارش منظور از کارکرد شبانه، روزانه و رایگان بدین شرح است:
                        {"\n"}
                        -کارکرد شبانه: میزان مصرف کاربر درساعات شبانه
                        {"\n"}
                        -کارکرد روزانه: میزان مصرف کاربر درساعات روزانه
                        {"\n"}
                        -کارکرد رایگان: میزان استفاده رایگان کاربر از سایت‌هایی که برای کاربران مبین‌نت کاملا رایگان است
                    </Text>
                    {/* <PersianCalendarPicker
                        onDateChange={this.onDateChange}
                    />
                    <Text>SELECTED DATE:{startDate}</Text> */}
                    <View style={styles.parentViewForm}>
                        <Form style={styles.form}>
                            <View style={styles.formView}>
                                <Label style={styles.label}>تا تاریخ</Label>
                                <Item style={styles.item} >
                                    <Button onPress={() => alert('hi')} >
                                        <Image source={Images.getCalendarIcon} style={styles.calendarIcon} />
                                        <Input style={styles.input} />
                                    </Button>
                                </Item>
                            </View>
                            <View style={styles.formView}>
                                <Label style={styles.label}>از تاریخ</Label>
                                <Item style={styles.item}>
                                    <Image source={Images.getCalendarIcon} style={styles.calendarIcon} />
                                    <Input style={styles.input} />
                                </Item>
                            </View>
                        </Form>
                        <Tabs style={styles.tabs} tabBarUnderlineStyle={{ borderWidth: 0 }}>
                            <Tab heading="کارکرد شبانه"
                                tabStyle={styles.tab}
                                activeTabStyle={styles.activeTab}
                                textStyle={styles.tabText}
                                activeTextStyle={styles.activeTabText}
                            >
                                <Text style={styles.titleText}>گزارش کل</Text>
                            </Tab>
                            <Tab heading="کارکرد روزانه">
                                <Text style={styles.titleText}>کارکرد روزانه</Text>
                            </Tab>
                            <Tab heading="گزارش کل">
                                <Text style={styles.titleText}>کارکرد شبانه</Text>
                            </Tab>
                        </Tabs>
                    </View>
                </View>
            </ScrollView >
        )
    }
}

export default InternetReportView;