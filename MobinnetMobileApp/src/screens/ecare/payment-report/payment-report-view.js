import React, { Component } from 'react'
import styles from './payment-report-style'
import { View, Text, Image, ScrollView } from 'react-native'
import { Header, Right, Button, Title, Card, CardItem, Body, Left } from 'native-base';
import Images from '../../../helpers/images'


class PaymentReportView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {

    }
    onBackScreenClick() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'rgb(240,241,245)' }}>
                <View style={styles.view}>
                    <Header style={styles.headerProfile}>
                        <Left>
                            <Button transparent onPress={this.onBackScreenClick.bind(this)}>
                                <Image
                                    style={styles.icon}
                                    source={Images.getBackIcon} />
                            </Button>
                        </Left>
                        <Right style={styles.headerRight}>
                            <Title style={styles.headerTitle}>گزارش پرداخت‌ها</Title>
                        </Right>
                    </Header>
                    <Card style={styles.card}>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={[styles.col, { borderTopLeftRadius: 5 }]}>
                                        <Text style={styles.textInfo}>
                                            ملت
                                </Text>
                                    </View>
                                    <View style={[styles.colTitle, { borderTopRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            نام درگاه
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Text style={styles.textInfo}>
                                            1398/05/25
                                </Text>
                                    </View>
                                    <View style={styles.colTitle}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            تاریخ
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Text style={styles.textInfo}>
                                            1234560
                                </Text>
                                    </View>
                                    <View style={styles.colTitle}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            شناسه
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Text style={styles.textInfo}>
                                            9810 تومان
                                </Text>
                                    </View>
                                    <View style={styles.colTitle}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            قیمت
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Text style={styles.textInfo}>
                                            تأیید شده
                                </Text>
                                    </View>
                                    <View style={styles.colTitle}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            وضعیت تأیید
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Text style={styles.textInfo}>
                                            ---
                                </Text>
                                    </View>
                                    <View style={styles.colTitle}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            برگشت پول
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Text style={styles.textInfo}>
                                            خرید حجم 3 گیگابایت
                                </Text>
                                    </View>
                                    <View style={styles.colTitle}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            توضیحات
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={[styles.cardItem, { borderBottomWidth: 0 }]}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={[styles.col, { borderBottomLeftRadius: 5 }]}>
                                        <Text style={styles.textInfo}>
                                            یکشنبه 98/05/25 ساعت 14:30
                                </Text>
                                    </View>
                                    <View style={[styles.colTitle, { borderBottomRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            تاریخ
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </ScrollView>
        )
    }
}

export default PaymentReportView;