import React, { Component } from 'react'
import styles from './extra-qouta-style'
import { View, Image, ScrollView, Text, Dimensions } from 'react-native'
import { Header, Right, Left, Button, Title, Card, CardItem, Body } from 'native-base';
import Images from '../../../helpers/images'
var { width, height } = Dimensions.get('window');


class ExtraQoutaView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {

    }

    onBackScreenClick() {
        //this.props.navigation.goBack();
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
                            <Title style={styles.headerTitle}>خرید حجم اضافه</Title>
                        </Right>
                    </Header>
                    <View style={styles.bodyContent}>
                        <Text style={styles.countNumber}>1</Text>
                        <Card style={width > 769 ? styles.card : styles.cardResponsive}>
                            <CardItem style={width > 769 ? styles.cardItem : styles.cardItemResponsive}>
                                <Body style={styles.mainBody}>
                                    <View style={styles.body}>
                                        <View style={[styles.cardBody,{paddingTop:40}]}>
                                            <View style={{ flexDirection: 'row'}}>
                                                <Image source={Images.getPriceImage} style={width > 769 ? styles.priceImage : styles.priceImageResponsive} />
                                                <View style={styles.cardBodyContent}>
                                                    <Text style={width > 769 ? styles.priceInfo : styles.priceInfoResponsive}>24</Text>
                                                </View>
                                                <View style={styles.cardBodyContent}>
                                                    <Text style={width > 769 ? styles.textCurrency : styles.textCurrencyResponsive}>تومان</Text>
                                                    <Text style={width > 769 ? styles.priceInfoDetail : styles.priceInfoDetailResponsive}>400</Text>
                                                </View>
                                            </View>
                                            <Image source={Images.getHorizontalLineImage} style={styles.borderStyle} />
                                            <Button style={width > 769 ? styles.confirmBtn : styles.confirmBtnResponsive}><Text style={width > 769 ? styles.confirmTextBtn : styles.confirmTextBtnResponsive}>خرید</Text></Button>
                                        </View>
                                        <View style={styles.cardBody}>
                                            <View style={{ flexDirection: 'row'}}>
                                                <View style={styles.cardBodyContent}>
                                                    <Text style={width > 769 ? styles.textInfoTitle : styles.textInfoTitleResponsive}>5</Text>
                                                    <Text style={width > 769 ? styles.textInfoType : styles.textInfoTypeResponsive}>گیگابایت</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default ExtraQoutaView;