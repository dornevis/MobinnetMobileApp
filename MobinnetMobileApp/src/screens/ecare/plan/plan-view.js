import React, { Component } from 'react'
import styles from './plan-style'
import { View, Text, Image, ScrollView } from 'react-native'
import { Header, Right, Button, Title, Card, CardItem, Body, Left, Tab, Tabs } from 'native-base';
import Images from '../../../helpers/images'

class PlanView extends Component {

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
                            <Title style={styles.headerTitle}>تغییر و تمدید طرح</Title>
                        </Right>
                    </Header>
                    <Tabs
                        tabBarUnderlineStyle={{ borderBottomWidth: 0, borderBottomColor: 'transparent' }}
                    >
                        <Tab
                            heading="TD TURBO+ 4 To 40 Mbps"
                            tabStyle={[styles.tabstyle, { borderRightWidth: 0.2 }]}
                            textStyle={styles.textTabBar}
                            activeTabStyle={{ backgroundColor: '#fff' }}
                            activeTextStyle={styles.activeTextTabBar}>
                            <View style={styles.parentTabView}>
                                <View style={styles.infoView}>
                                    <View style={styles.infoView}>
                                        <Text style={styles.infoText}>Speed</Text>
                                        <View style={[styles.ovalShape, { backgroundColor: '#84c126' }]} />
                                        <View style={[styles.ovalShape, { backgroundColor: '#ffd200' }]} />
                                        <View style={[styles.ovalShape, { backgroundColor: '#c22636' }]} />
                                    </View>
                                    <View style={styles.infoView}>
                                        <Text style={styles.infoText}>Traffic</Text>
                                        <View style={[styles.ovalShape, { backgroundColor: '#84c126' }]} />
                                        <View style={[styles.ovalShape, { backgroundColor: '#ffd200' }]} />
                                        <View style={[styles.ovalShape, { backgroundColor: '#c22636' }]} />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.tabBody}>
                                        <View style={styles.bodyContent}>
                                            <Text style={styles.countNumber}>1</Text>
                                            <Card style={styles.card}>
                                                <CardItem>
                                                    <Body style={styles.body}>
                                                        <View style={styles.cardBody}>
                                                            <Image source={Images.getPriceImage} style={styles.priceImage} />
                                                            <View style={styles.cardBodyContent}>
                                                                <Text style={styles.priceInfo}>24</Text>
                                                            </View>
                                                            <View style={styles.cardBodyContent}>
                                                                <Text style={styles.textCurrency}>تومان</Text>
                                                                <Text style={styles.priceInfoDetail}>400</Text>
                                                            </View>
                                                        </View>
                                                        <Image source={Images.getVerticalLineImage} style={styles.borderStyle} />
                                                        <View style={[styles.cardBody, { flexDirection: 'column' }]}>
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <View style={styles.cardBodyContent}>
                                                                    <Text style={styles.textInfoTitle}>5</Text>
                                                                    <Text style={styles.textInfoType}>گیگابایت</Text>
                                                                </View>
                                                                <View style={styles.cardBodyContent}>
                                                                    <Text style={styles.textInfoTitle}>2</Text>
                                                                    <Text style={styles.textInfoType}>روز</Text>
                                                                </View>
                                                            </View>
                                                            <View style={styles.planDurationView}>
                                                                <Text style={styles.planDurationText}>10 گیگابایت شبانه
                                                             </Text>
                                                                <Text style={styles.planDurationText}>  4 تا 40</Text>
                                                            </View>
                                                        </View>
                                                    </Body>
                                                </CardItem>
                                                <View style={styles.planCategoryView}>
                                                    <Text style={styles.planCategoryText}>
                                                        شبانه پرسرعت
                                                             </Text>
                                                </View>
                                                <Button style={styles.confirmBtn}><Text style={styles.confirmTextBtn}>خرید</Text></Button>
                                                <Button style={styles.reservationBtn}><Text style={styles.confirmTextBtn}>رزرو</Text></Button>
                                            </Card>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Tab>
                        <Tab
                            heading="TD TURBO 4 To 40 Mbps"
                            tabStyle={[styles.tabstyle, { borderLeftWidth: 0.2 }]}
                            textStyle={styles.textTabBar}
                            activeTabStyle={{ backgroundColor: '#fff' }}
                            activeTextStyle={styles.activeTextTabBar}>
                            <View style={styles.parentTabView}>
                                <View style={styles.infoView}>
                                    <View style={styles.infoView}>
                                        <Text style={styles.infoText}>Speed</Text>
                                        <View style={[styles.ovalShape, { backgroundColor: '#84c126' }]} />
                                        <View style={[styles.ovalShape, { backgroundColor: '#ffd200' }]} />
                                        <View style={[styles.ovalShape, { backgroundColor: '#c22636' }]} />
                                    </View>
                                    <View style={styles.infoView}>
                                        <Text style={styles.infoText}>Traffic</Text>
                                        <View style={[styles.ovalShape, { backgroundColor: '#84c126' }]} />
                                        <View style={[styles.ovalShape, { backgroundColor: '#ffd200' }]} />
                                        <View style={[styles.ovalShape, { backgroundColor: '#c22636' }]} />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.tabBody}>
                                        <View style={styles.bodyContent}>
                                            <Text style={styles.countNumber}>1</Text>
                                            <Card style={styles.card}>
                                                <CardItem>
                                                    <Body style={styles.body}>
                                                        <View style={styles.cardBody}>
                                                            <Image source={Images.getPriceImage} style={styles.priceImage} />
                                                            <View style={styles.cardBodyContent}>
                                                                <Text style={styles.priceInfo}>24</Text>
                                                            </View>
                                                            <View style={styles.cardBodyContent}>
                                                                <Text style={styles.textCurrency}>تومان</Text>
                                                                <Text style={styles.priceInfoDetail}>400</Text>
                                                            </View>
                                                        </View>
                                                        <Image source={Images.getVerticalLineImage} style={styles.borderStyle} />
                                                        <View style={[styles.cardBody, { flexDirection: 'column' }]}>
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <View style={styles.cardBodyContent}>
                                                                    <Text style={styles.textInfoTitle}>5</Text>
                                                                    <Text style={styles.textInfoType}>گیگابایت</Text>
                                                                </View>
                                                                <View style={styles.cardBodyContent}>
                                                                    <Text style={styles.textInfoTitle}>2</Text>
                                                                    <Text style={styles.textInfoType}>روز</Text>
                                                                </View>
                                                            </View>
                                                            <View style={styles.planDurationView}>
                                                                <Text style={styles.planDurationText}>10 گیگابایت شبانه
                                                             </Text>
                                                                <Text style={styles.planDurationText}>  4 تا 40</Text>
                                                            </View>
                                                        </View>
                                                    </Body>
                                                </CardItem>
                                                <View style={styles.planCategoryView}>
                                                    <Text style={styles.planCategoryText}>
                                                        شبانه پرسرعت
                                                             </Text>
                                                </View>
                                                <Button style={styles.confirmBtn}><Text style={styles.confirmTextBtn}>خرید</Text></Button>
                                                <Button style={styles.reservationBtn}><Text style={styles.confirmTextBtn}>رزرو</Text></Button>
                                            </Card>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Tab>
                        <Tab
                            heading="پیشنهاد ویژه"
                            tabStyle={[styles.tabstyle, { borderLeftWidth: 0.2 }]}
                            textStyle={styles.textTabBar}
                            activeTabStyle={{ backgroundColor: '#fff', borderLeftWidth: 0.2, borderColor: '#84c126' }}
                            activeTextStyle={styles.activeTextTabBar}>
                            <View style={styles.parentTabView}>
                                <View style={styles.infoView}>
                                    <Text style={styles.specialText}>پیشنهاد ویژه مبین‌نت برای شما</Text>
                                </View>
                                <View>
                                    <View style={styles.tabBody}>
                                        <View style={styles.bodyContent}>
                                            <Card style={styles.card}>
                                                <CardItem>
                                                    <Body style={styles.body}>
                                                        <View style={[styles.cardBody, { flexDirection: 'column' }]}>
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <View style={styles.cardBodyContent}>
                                                                    <Text style={styles.textInfoTitle}>2</Text>
                                                                    <Text style={styles.textInfoType}>ماه</Text>
                                                                </View>
                                                            </View>
                                                            <View style={styles.planDurationView}>
                                                                <Text style={styles.planDurationText}>1000 گیگابایت شبانه
                                                             </Text>
                                                                <Text style={styles.planDurationText}>4 تا 40</Text>
                                                            </View>
                                                        </View>
                                                        <Image source={Images.getVerticalLineImage} style={styles.borderStyle} />
                                                        <View style={styles.cardBody}>
                                                            <View style={[styles.cardBodyContent, { marginTop: -35 }]}>
                                                                <Text style={styles.textInfoTitle}>100</Text>
                                                                <Text style={styles.textInfoType}>گیگابایت</Text>
                                                            </View>
                                                        </View>
                                                    </Body>
                                                </CardItem>
                                                <View style={[styles.planCategoryView, styles.planSpecialView]}>
                                                    <Text style={styles.planCategoryText}>
                                                        35% تخفیف
                                                             </Text>
                                                </View>
                                                <Button style={[styles.confirmBtn, styles.specialBtnTab]}><Text style={styles.confirmTextBtn}>خرید</Text></Button>
                                            </Card>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Tab>
                    </Tabs>
                </View>
            </ScrollView >
        )
    }
}

export default PlanView;