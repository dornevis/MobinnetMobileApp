import React, { Component } from 'react'
import styles from './ip-guide-style'
import { View, Image, ScrollView, Text, Dimensions, ImageBackground } from 'react-native'
import { Header, Right, Left, Button, Title, Card, CardItem, Body } from 'native-base';
import Images from '../../../helpers/images'
var { width, height } = Dimensions.get('window');

class IPGuideView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }


    onBackScreenClick() {
        this.props.navigation.goBack();
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
                            <Button transparent
                                onPress={this.onBackScreenClick.bind(this)}>
                                <Image
                                    style={styles.icon}
                                    source={Images.getBackIcon} />
                            </Button>
                        </Left>
                        <Right style={styles.headerRight}>
                            <Title style={styles.headerTitle}>راهنمای آی‌پی</Title>
                        </Right>
                    </Header>
                    <Image
                        style={width > 769 ? styles.titleImage : styles.titleImageResponsive}
                        source={Images.getIPGuideIcon} />
                    <Text style={width > 769 ? styles.titleText : styles.titleTextResponsive}>راهنمای IP</Text>
                    <Text style={width > 769 ? styles.guideTextTitle : styles.guideTextTitleResponsive}>آی‌پی استاتیک چه کاربردی دارد؟</Text>
                    <View style={styles.guideTextView}>
                        <Text style={width > 769 ? styles.guideText : styles.guideTextResponsive}>
                            جهت استفاده از دوربین‌های مداربسته در شبکه
                    </Text>
                        <View style={styles.circle}></View>
                    </View>
                    <View style={styles.guideTextView}>
                        <Text style={width > 769 ? styles.guideText : styles.guideTextResponsive}>
                            جهت استفاده از دوربین‌های مداربسته در شبکه
                    </Text>
                        <View style={styles.circle}></View>
                    </View>
                    <View style={[styles.bodyContent, { marginTop: 30 }]}>
                        <Text style={styles.countNumber}>1</Text>
                        <Card style={width > 769 ? styles.card : styles.cardResponsive}>
                            <CardItem style={width > 769 ? styles.cardItem : styles.cardItemResponsive}>
                                <Body style={styles.mainBody}>
                                    <View style={styles.body}>
                                        <View style={styles.cardBody}>
                                            <View style={[styles.cardBodyContent, { flexDirection: "row", paddingTop: 15 }]}>
                                                <Text style={width > 769 ? styles.priceInfo : styles.priceInfoResponsive}>60</Text>
                                                <Text style={width > 769 ? styles.priceInfoDetail : styles.priceInfoDetailResponsive}>000</Text>
                                            </View>
                                            <View style={styles.cardBodyContent}>
                                                <Text style={width > 769 ? styles.textCurrency : styles.textCurrencyResponsive}>تومان</Text>
                                            </View>
                                        </View>
                                        <Image source={Images.getVerticalLineImage} style={styles.borderStyle} />
                                        <View style={styles.cardBody}>
                                            <View style={styles.cardBodyContent}>
                                                <Text style={width > 769 ? styles.textInfoTitle : styles.textInfoTitleResponsive}>6</Text>
                                                <Text style={width > 769 ? styles.textInfoType : styles.textInfoTypeResponsive}>ماهه</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Button style={width > 769 ? styles.confirmBtn : styles.confirmBtnResponsive}><Text style={width > 769 ? styles.confirmTextBtn : styles.confirmTextBtnResponsive}>خرید</Text></Button>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default IPGuideView;