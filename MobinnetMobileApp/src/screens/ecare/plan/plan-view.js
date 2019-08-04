import React, { Component } from 'react'
import styles from './plan-style'
import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import { Header, Right, Button, Title, Card, CardItem, Body, Left, Tab, Tabs } from 'native-base';
import Images from '../../../helpers/images'
var { width, height } = Dimensions.get('window');

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
                        tabBarUnderlineStyle={{ height: 0 }}
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
                                            <Card style={width > 769 ? styles.card : styles.cardResponsive}>
                                                <CardItem style={width > 769 ? styles.cardItem : styles.cardItemResponsive}>
                                                    <Body style={styles.mainBody}>
                                                        <View style={styles.body}>
                                                            <View style={[styles.cardBody, { flexDirection: 'column' }]}>
                                                                <View style={styles.cardBody}>
                                                                    <Image source={Images.getPriceImage} style={width > 769 ? styles.priceImage : styles.priceImageResponsive} />
                                                                    <View style={styles.cardBodyContentPrice}>
                                                                        <Text style={width > 769 ? styles.priceInfo : styles.priceInfoResponsive}>24</Text>
                                                                    </View>
                                                                    <View style={styles.cardBodyContentPrice}>
                                                                        <Text style={width > 769 ? styles.textCurrency : styles.textCurrencyResponsive}>تومان</Text>
                                                                        <Text style={width > 769 ? styles.priceInfoDetail : styles.priceInfoDetailResponsive}>400</Text>
                                                                    </View>
                                                                </View>
                                                                <Button style={width > 769 ? styles.confirmBtn : styles.confirmBtnResponsive}><Text style={width > 769 ? styles.confirmTextBtn : styles.confirmTextBtnResponsive}>خرید</Text></Button>
                                                                <Button style={width > 769 ? styles.reservationBtn : styles.reservationBtnResponsive}><Text style={width > 769 ? styles.confirmTextBtn : styles.confirmTextBtnResponsive}>رزرو</Text></Button>
                                                            </View>
                                                            <Image source={Images.getVerticalLineImage} style={styles.borderStyle} />
                                                            <View style={[styles.cardBody, { flexDirection: 'column' }]}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <View style={width > 769 ? styles.cardBodyContent : styles.cardBodyContentResponsive}>
                                                                        <Text style={[width > 769 ? styles.textInfoTitle : styles.textInfoTitleResponsive, { paddingTop: 7 }]}>5</Text>
                                                                        <Text style={[width > 769 ? styles.textInfoType : styles.textInfoTypeResponsive, { paddingTop: 5 }]}>گیگابایت</Text>
                                                                    </View>
                                                                    <View style={width > 769 ? styles.cardBodyContent : styles.cardBodyContentResponsive}>
                                                                        <Text style={width > 769 ? styles.textInfoTitle : styles.textInfoTitleResponsive}>2</Text>
                                                                        <Text style={width > 769 ? styles.textInfoType : styles.textInfoTypeResponsive}>روز</Text>
                                                                    </View>
                                                                </View>
                                                                <View style={styles.planDurationView}>
                                                                    <Text style={width > 769 ? styles.planDurationText : styles.planDurationTextResponsive}>10 گیگابایت شبانه
                                                             </Text>
                                                                    <Text style={width > 769 ? styles.planDurationText : styles.planDurationTextResponsive}>  4 تا 40</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </Body>
                                                </CardItem>
                                                <View style={width > 769 ? styles.planCategoryView : styles.planCategoryViewResponsive}>
                                                    <Text style={width > 769 ? styles.planCategoryText : styles.planCategoryTextResponsive}>
                                                        شبانه پرسرعت
                                                             </Text>
                                                </View>
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
                                            <Card style={width > 769 ? styles.card : styles.cardResponsive}>
                                                <CardItem style={width > 769 ? styles.cardItem : styles.cardItemResponsive}>
                                                    <Body style={styles.mainBody}>
                                                        <View style={styles.body}>
                                                            <View style={[styles.cardBody, { flexDirection: 'column' }]}>
                                                                <View style={styles.cardBody}>
                                                                    <Image source={Images.getPriceImage} style={width > 769 ? styles.priceImage : styles.priceImageResponsive} />
                                                                    <View style={styles.cardBodyContentPrice}>
                                                                        <Text style={width > 769 ? styles.priceInfo : styles.priceInfoResponsive}>24</Text>
                                                                    </View>
                                                                    <View style={styles.cardBodyContentPrice}>
                                                                        <Text style={width > 769 ? styles.textCurrency : styles.textCurrencyResponsive}>تومان</Text>
                                                                        <Text style={width > 769 ? styles.priceInfoDetail : styles.priceInfoDetailResponsive}>400</Text>
                                                                    </View>
                                                                </View>
                                                                <Button style={width > 769 ? styles.confirmBtn : styles.confirmBtnResponsive}><Text style={width > 769 ? styles.confirmTextBtn : styles.confirmTextBtnResponsive}>خرید</Text></Button>
                                                                <Button style={width > 769 ? styles.reservationBtn : styles.reservationBtnResponsive}><Text style={width > 769 ? styles.confirmTextBtn : styles.confirmTextBtnResponsive}>رزرو</Text></Button>
                                                            </View>
                                                            <Image source={Images.getVerticalLineImage} style={styles.borderStyle} />
                                                            <View style={[styles.cardBody, { flexDirection: 'column' }]}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <View style={width > 769 ? styles.cardBodyContent : styles.cardBodyContentResponsive}>
                                                                        <Text style={[width > 769 ? styles.textInfoTitle : styles.textInfoTitleResponsive, { paddingTop: 7 }]}>5</Text>
                                                                        <Text style={[width > 769 ? styles.textInfoType : styles.textInfoTypeResponsive, { paddingTop: 5 }]}>گیگابایت</Text>
                                                                    </View>
                                                                    <View style={width > 769 ? styles.cardBodyContent : styles.cardBodyContentResponsive}>
                                                                        <Text style={width > 769 ? styles.textInfoTitle : styles.textInfoTitleResponsive}>2</Text>
                                                                        <Text style={width > 769 ? styles.textInfoType : styles.textInfoTypeResponsive}>روز</Text>
                                                                    </View>
                                                                </View>
                                                                <View style={styles.planDurationView}>
                                                                    <Text style={width > 769 ? styles.planDurationText : styles.planDurationTextResponsive}>10 گیگابایت شبانه
                                                             </Text>
                                                                    <Text style={width > 769 ? styles.planDurationText : styles.planDurationTextResponsive}>  4 تا 40</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </Body>
                                                </CardItem>
                                                <View style={width > 769 ? styles.planCategoryView : styles.planCategoryViewResponsive}>
                                                    <Text style={width > 769 ? styles.planCategoryText : styles.planCategoryTextResponsive}>
                                                        شبانه پرسرعت
                                                             </Text>
                                                </View>
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
                                <View style={styles.specialInfoView}>
                                    <Text style={width > 769 ? styles.specialText : styles.specialTextResponsive}>پیشنهاد ویژه مبین‌نت برای شما</Text>
                                    <Image source={Images.getStartIcon} style={{ width: 20, height: 20, marginLeft: 5, marginTop: 10 }} />
                                </View>
                                <View>
                                    <View style={styles.specialTabBody}>
                                        <View style={styles.bodyContent}>
                                            <Card style={width > 769 ? styles.card : styles.specialCardResponsive}>
                                                <CardItem style={width > 769 ? styles.cardItem : styles.specialCardItemResponsive}>
                                                    <Body style={styles.body}>
                                                        <View style={width > 769 ? styles.specialCardBody : styles.specialCardBodyResponsive}>
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <View style={styles.cardBodyContent}>
                                                                    <Text style={width > 769 ? styles.textInfoTitle : styles.textInfoTitleResponsive}>2</Text>
                                                                    <Text style={width > 769 ? styles.textInfoType : styles.textInfoTypeResponsive}>ماه</Text>
                                                                </View>
                                                            </View>
                                                            <View style={styles.specialPlanDurationView}>
                                                                <Text style={width > 769 ? styles.planDurationText : styles.planDurationTextResponsive}>1000 گیگابایت شبانه
                                                             </Text>
                                                                <Text style={width > 769 ? styles.planDurationText : styles.planDurationTextResponsive}>4 تا 40</Text>
                                                            </View>
                                                        </View>
                                                        <Image source={Images.getVerticalLineImage} style={styles.specialBorderStyle} />
                                                        <View style={width > 769 ? styles.specialPlanCardBody : styles.specialPlanCardBodyResponsive}>
                                                            <View style={styles.cardBodyContent}>
                                                                <Text style={width > 769 ? styles.textInfoTitle : styles.textInfoTitleResponsive}>100</Text>
                                                                <Text style={width > 769 ? styles.textInfoType : styles.textInfoTypeResponsive}>گیگابایت</Text>
                                                            </View>
                                                        </View>
                                                    </Body>
                                                    <View style={width > 769 ? styles.planSpecialView : styles.planSpecialViewResponsive}>
                                                        <Text style={width > 769 ? styles.planCategoryText : styles.planCategoryTextResponsive}>
                                                            35% تخفیف
                                                             </Text>
                                                    </View>
                                                </CardItem>
                                                <Button style={width > 769 ? styles.specialBtnTab : styles.specialBtnTabResponsive}><Text style={width > 769 ? styles.confirmTextBtn : styles.confirmTextBtnResponsive}>خرید</Text></Button>
                                            </Card>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Tab>
                    </Tabs>
                </View>
            </ScrollView>
        )
    }
}

export default PlanView;