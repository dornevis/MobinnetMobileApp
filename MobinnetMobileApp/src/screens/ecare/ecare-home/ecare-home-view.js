import React, { Component } from 'react'
import styles from './ecare-home-style'
import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import { Header, Right, Button, Title, Card, CardItem, Body } from 'native-base';
import Images from '../../../helpers/images'
import Carousel from 'react-native-looped-carousel';
var { width, height } = Dimensions.get('window');


class EcareHomeView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {

    }

    toggleDrawerMenu() {
        this.props.navigation.toggleDrawer();
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.view}>
                    <Header style={styles.headerProfile}>
                        <Right style={styles.headerRight}>
                            <Title style={styles.headerTitle}>صفحه اصلی</Title>
                            <Button transparent onPress={() => this.toggleDrawerMenu()}>
                                <Image
                                    style={styles.icon}
                                    source={Images.getMenuIcon} />
                            </Button>
                        </Right>
                    </Header>
                    <View style={styles.container}>
                        <Carousel
                            style={styles.carousel}
                            leftArrowText={'<'}
                            leftArrowStyle={styles.carouselArrow}
                            rightArrowText={'>'}
                            rightArrowStyle={styles.carouselArrow}
                            arrows
                            isLooped
                            autoplay
                        >
                            <Image
                                style={styles.carouselImage}
                                source={Images.getCarouselImage} />
                            <Image
                                style={styles.carouselImage}
                                source={Images.getCarouselImage} />
                            <Image
                                style={styles.carouselImage}
                                source={Images.getCarouselImage} />
                        </Carousel>
                    </View>
                    <Card style={styles.card}>
                        <CardItem header style={[styles.cardItem, { backgroundColor: '#43b0a9', }]}>
                            <Text style={styles.cardItemText}>مشخصات اشتراک</Text>
                        </CardItem>
                        <CardItem style={styles.cardItemBody}>
                            <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Image
                                            style={styles.image}
                                            source={Images.getUserImage} />
                                    </View>
                                    <View style={[styles.col, { justifyContent: 'flex-end' }]}>
                                        <Text style={width > 769 ? styles.textInfo : styles.textInfoResponsive}>
                                            نام مشترک:
                                            پارسا یوسفی
                                </Text>
                                        <Text style={width > 769 ? styles.textInfo : styles.textInfoResponsive}>
                                            شماره شناسه: 12314565
                                </Text>
                                        <Text style={width > 769 ? styles.textInfo : styles.textInfoResponsive}>
                                            طرح شما فعال است
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem header style={styles.cardItem}>
                            <Text style={styles.cardItemText}>زمان باقیمانده</Text>
                        </CardItem>
                        <CardItem style={styles.cardItemBody}>
                            <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Image
                                            style={styles.image}
                                            source={Images.getClockImage} />
                                    </View>
                                    <View style={[styles.col, { justifyContent: 'flex-end' }]}>
                                        <Text style={styles.remainMainText}>2</Text>
                                        <Text style={width > 769 ? styles.remainText : styles.remainTextResponsive}>روز از 30 روز</Text>
                                        <Text style={width > 769 ? styles.remainText : styles.remainTextResponsive}>از تاریخ 97/05/03</Text>
                                        <Text style={width > 769 ? styles.remainText : styles.remainTextResponsive}>از تاریخ 97/05/03</Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem header style={styles.cardItem}>
                            <Text style={styles.cardItemText}>حجم روزانه باقیمانده</Text>
                        </CardItem>
                        <CardItem style={styles.cardItemBody}>
                            <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Image
                                            style={styles.image}
                                            source={Images.getDailyVolumeImage} />
                                    </View>

                                    <View style={[styles.col, { justifyContent: 'flex-end' }]}>
                                        <Text style={styles.remainMainText}>45</Text>
                                        <Text style={width > 769 ? styles.remainText : styles.remainTextResponsive}>گیگابایت از 60 گیگابات</Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem header style={styles.cardItem}>
                            <Text style={styles.cardItemText}>حجم شبانه باقیمانده</Text>
                        </CardItem>
                        <CardItem style={styles.cardItemBody}>
                            <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Image
                                            style={styles.image}
                                            source={Images.getNightlyVolumeImage} />
                                    </View>

                                    <View style={[styles.col, { justifyContent: 'flex-end' }]}>
                                        <Text style={styles.remainMainText}>25</Text>
                                        <Text style={width > 769 ? styles.remainText : styles.remainTextResponsive}>گیگابایت از 30 گیگابات</Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem header style={styles.cardItem}>
                            <Text style={styles.cardItemText}>Ip ثابت</Text>
                        </CardItem>
                        <CardItem style={styles.cardItemBody}>
                            <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Image
                                            style={styles.image}
                                            source={Images.getStaticIPImage} />
                                    </View>

                                    <View style={[styles.col, { justifyContent: 'flex-end' }]}>
                                        <Text style={styles.remainMainText}>25</Text>
                                        <Text style={width > 769 ? styles.remainText : styles.remainTextResponsive}>گیگابایت از 30 گیگابات</Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={[styles.card, { marginBottom: 30 }]}>
                        <CardItem header style={styles.cardItem}>
                            <Text style={styles.cardItemText}>خرید گیگ پک</Text>
                        </CardItem>
                        <CardItem style={styles.cardItemBody}>
                            <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Image
                                            style={styles.image}
                                            source={Images.getStaticIPImage} />
                                    </View>

                                    <View style={[styles.col, { justifyContent: 'flex-end' }]}>
                                        <Text style={styles.remainMainText}>25</Text>
                                        <Text style={width > 769 ? styles.remainText : styles.remainTextResponsive}>گیگابایت از 30 گیگابات</Text>
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

export default EcareHomeView;