import React, { Component } from 'react'
import styles from './gift-style'
import { View, Text, Image, ScrollView } from 'react-native'
import { Header, Right, Button, Title, Card, CardItem, Body, Left } from 'native-base';
import Images from '../../../helpers/images'


class GiftView extends Component {

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
                            <Button transparent
                                onPress={this.onBackScreenClick.bind(this)}>
                                <Image
                                    style={styles.icon}
                                    source={Images.getBackIcon} />
                            </Button>
                        </Left>
                        <Right style={styles.headerRight}>
                            <Title style={styles.headerTitle}>هدایا</Title>
                        </Right>
                    </Header>
                    <Image
                        style={styles.titleImage}
                        source={Images.getReservationBankIcon} />
                    <Text style={styles.titleText}>رزرو</Text>
                    <Text style={styles.reservationText}>
                        مشترک گرامی، در این قسمت شما قادر به مدیریت طرح‌ها و گیگ‌پک‌های رزروشده خود می‌باشید
                    </Text>
                    <Card style={styles.card}>
                        <CardItem style={[styles.cardItem,]}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={[styles.col, { borderTopLeftRadius: 5 }]}>
                                        <Text style={styles.textInfo}>
                                            1398/05/25
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderTopRightRadius: 5 }]}>
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
                                            گیگ‌پک‌
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            نوع هدیه
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
                                            هدیه طرح تمدید-4روز 40گیگابایت
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            توضیحات
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <View style={[styles.cardBody, { borderBottomWidth: 0 }]}>
                                    <View style={[styles.col, { borderBottomLeftRadius: 5 }]}>
                                        <Button style={styles.confirmBtn}><Text style={styles.confirmTextBtn}>فعال کن</Text></Button>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderBottomRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            فعال سازی
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem style={[styles.cardItem,]}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={[styles.col, { borderTopLeftRadius: 5 }]}>
                                        <Text style={styles.textInfo}>
                                            1398/05/25
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderTopRightRadius: 5 }]}>
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
                                            گیگ‌پک‌
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            نوع هدیه
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
                                            هدیه طرح تمدید-4روز 40گیگابایت
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            توضیحات
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <View style={[styles.cardBody, { borderBottomWidth: 0 }]}>
                                    <View style={[styles.col, { borderBottomLeftRadius: 5, flexDirection: 'row' }]}>
                                        <Text style={styles.textInfo}>
                                            فعال‌شده توسط شرکت فن‌آوران دُرنویس
                                </Text>
                                        <Image source={Images.getFalseIcon} style={styles.falseIcon} />
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderBottomRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            فعال‌سازی
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

export default GiftView;