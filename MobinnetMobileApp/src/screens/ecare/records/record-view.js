import React, { Component } from 'react'
import styles from './record-style'
import { View, Text, Image, ScrollView } from 'react-native'
import { Header, Right, Button, Title, Card, CardItem, Body, Left } from 'native-base';
import Images from '../../../helpers/images'


class RecordView extends Component {

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
                            <Title style={styles.headerTitle}>سوابق ورود</Title>
                        </Right>
                    </Header>
                    <Card style={styles.card}>
                        <CardItem style={[styles.cardItem,]}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={[styles.col, { borderTopLeftRadius: 5 }]}>
                                        <Text style={styles.textInfo}>
                                            سه شنبه
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderTopRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            روز
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
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
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
                                            F
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            ساعت
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
                                            178.131.86.241
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            IP
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
                                            موفق
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderBottomRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            وضعیت ورود
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
                                            سه شنبه
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderTopRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            روز
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
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
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
                                            F
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            ساعت
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
                                            178.131.86.241
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            IP
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
                                            موفق
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderBottomRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            وضعیت ورود
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
                                            سه شنبه
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderTopRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            روز
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
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
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
                                            F
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            ساعت
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
                                            178.131.86.241
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            IP
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
                                            موفق
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderBottomRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            وضعیت ورود
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
                                            سه شنبه
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderTopRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            روز
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
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
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
                                            F
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            ساعت
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
                                            178.131.86.241
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            IP
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
                                            موفق
                                </Text>
                                    </View>
                                    <View style={[styles.col, { backgroundColor: '#124d4d', width: 120, borderBottomRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            وضعیت ورود
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

export default RecordView;