import React, { Component } from 'react'
import styles from './extra-qouta-style'
import { View, Image, ScrollView, Text } from 'react-native'
import { Header, Right, Left, Button, Title, Card, CardItem, Body } from 'native-base';
import Images from '../../../helpers/images'


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
                                    <Image source={Images.getHorizontalLineImage} style={styles.borderStyle} />
                                    <View style={styles.cardBody}>
                                        <View style={styles.cardBodyContent}>
                                            <Text style={styles.textInfoTitle}>10</Text>
                                            <Text style={styles.textInfoType}>گیگابایت</Text>
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

export default ExtraQoutaView;