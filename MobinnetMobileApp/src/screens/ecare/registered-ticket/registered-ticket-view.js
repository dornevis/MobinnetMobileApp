import React, { Component } from 'react'
import styles from './registered-ticket-style'
import { View, Text, Image, ScrollView } from 'react-native'
import { Header, Right, Button, Title, Card, CardItem, Body, Left } from 'native-base';
import Images from '../../../helpers/images'


class RegisteredTicketView extends Component {

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
                            <Title style={styles.headerTitle}>تیکت‌های ثبت‌شده</Title>
                        </Right>
                    </Header>
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
                                            14258
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            موضوع
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
                                            بسته شده
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            وضعیت
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <View style={[styles.cardBody, { borderBottomWidth: 0 }]}>
                                    <View style={[styles.col, { borderBottomLeftRadius: 5 }]}>
                                        <Text style={styles.textInfo}>
                                            AHD-225898
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderBottomRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            شماره پیگیری
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
                                            14258
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            موضوع
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
                                            بسته شده
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            وضعیت
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <View style={[styles.cardBody, { borderBottomWidth: 0 }]}>
                                    <View style={[styles.col, { borderBottomLeftRadius: 5 }]}>
                                        <Text style={styles.textInfo}>
                                            AHD-225898
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderBottomRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            شماره پیگیری
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

export default RegisteredTicketView;