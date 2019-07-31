import React, { Component } from 'react'
import styles from './ip-guide-style'
import { View, Image, ScrollView, Text } from 'react-native'
import { Header, Right, Left, Button, Title, Card, CardItem, Body } from 'native-base';
import Images from '../../../helpers/images'



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
                            <Title style={styles.headerTitle}>راهنمای آی‌پی</Title>
                        </Right>
                    </Header>
                    <Image
                        style={styles.titleImage}
                        source={Images.getIPGuideIcon} />
                    <Text style={styles.titleText}>راهنمای IP</Text>
                    <View style={styles.guideTextView}>
                        <Text style={styles.guideText}>
                            جهت استفاده از دوربین‌های مداربسته در شبکه
                    </Text>
                        <View style={styles.circle}></View>
                    </View>
                    <View style={styles.bodyContent}>
                        <Text style={styles.countNumber}>1</Text>
                        <Card style={styles.card}>
                            <CardItem>
                                <Body style={styles.body}>
                                    <View style={styles.cardBody}>
                                        <View style={[styles.cardBodyContent, { flexDirection: 'row' }]}>
                                            <Text style={styles.priceInfo}>60</Text>
                                            <Text style={styles.textCurrency}>000</Text>
                                        </View>
                                    </View>
                                    <Image source={Images.getVerticalLineImage} style={styles.borderStyle} />
                                    <View style={styles.cardBody}>
                                        <View style={styles.cardBodyContent}>
                                            <Text style={styles.textInfoTitle}>6</Text>
                                            <Text style={styles.textInfoType}>ماهه</Text>
                                        </View>
                                    </View>
                                </Body>
                            </CardItem>
                            <Button style={styles.confirmBtn}><Text style={styles.confirmTextBtn}>خرید</Text></Button>
                        </Card>
                    </View>
                    <View style={styles.bodyContent}>
                        <Text style={styles.countNumber}>2</Text>
                        <Card style={styles.card}>
                            <CardItem>
                                <Body style={styles.body}>
                                    <View style={styles.cardBody}>
                                        <View style={[styles.cardBodyContent, { flexDirection: 'row' }]}>
                                            <Text style={styles.priceInfo}>60</Text>
                                            <Text style={styles.textCurrency}>000</Text>
                                        </View>
                                    </View>
                                    <Image source={Images.getVerticalLineImage} style={styles.borderStyle} />
                                    <View style={styles.cardBody}>
                                        <View style={styles.cardBodyContent}>
                                            <Text style={styles.textInfoTitle}>6</Text>
                                            <Text style={styles.textInfoType}>ماهه</Text>
                                        </View>
                                    </View>
                                </Body>
                            </CardItem>
                            <Button style={styles.confirmBtn}><Text style={styles.confirmTextBtn}>خرید</Text></Button>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default IPGuideView;