import React, { Component } from 'react'
import styles from './payment-result-style'
import { View, Image, ScrollView, Text, Dimensions } from 'react-native'
import { Header, Right, Left, Button, Title, Form, Item, Label, Input } from 'native-base';
import Images from '../../../helpers/images'
var { width, height } = Dimensions.get('window');


class PaymentResultView extends Component {

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
                            <Title style={styles.headerTitle}>نتیجه پرداخت</Title>
                        </Right>
                    </Header>
                    <Card style={styles.card}>
                        <CardItem header style={styles.cardItem}>
                            <Text style={styles.cardItemText}>نتیجه پرداخت اینترنتی</Text>
                        </CardItem>
                        <CardItem style={styles.cardItemBody}>
                            <Body style={{ justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={width > 769 ? styles.paymentTitle : styles.paymentTitleResponsive}>پرداخت ناموفق</Text>
                                <Text style={width > 769 ? styles.paymentText : styles.paymentTextResponsive}>پرداخت اینترنتی شما با مشکل مواجه شده اس. درصورتی که وجه از حساب شما کسر شده باشد نهایتا تا 24ساعت آینده به حساب شما بازگردانده می‌شود.</Text>
                                <View style={styles.paymentDetail}>
                                    <Image source={Images.getDateIcon} style={styles.paymentIcon} />
                                    <Text>تاریخ:98/05/25</Text>
                                </View>
                                <View style={styles.paymentDetail}>
                                    <Image source={Images.getBarcodeIcon} style={styles.paymentIcon} />
                                    <Text>شناسه پرداخت:123456789</Text>
                                </View>
                                <View style={styles.paymentDetail}>
                                    <Image source={Images.getATMCardIcon} style={styles.paymentIcon} />
                                    <Text>مبلغ:150 تومان</Text>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                </ScrollView >
            </View >
        )
    }
}

export default PaymentResultView;