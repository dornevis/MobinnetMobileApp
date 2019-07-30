import React, { Component } from 'react'
import styles from './ecare-home-style'
import { View, Text, Image, ScrollView } from 'react-native'
import { Header, Right, Button, Title, Card, CardItem, Body } from 'native-base';
import Images from '../../../helpers/images'
import Carousel from 'react-native-looped-carousel';


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
                        <CardItem>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Image
                                            style={styles.image}
                                            source={Images.getUserImage} />
                                    </View>
                                    <View style={[styles.col, { justifyContent: 'flex-end' }]}>
                                        <Text style={styles.textInfo}>
                                            نام مشترک:
                                            پارسا یوسفی
                                </Text>
                                        <Text style={styles.textInfo}>
                                            شماره شناسه: 12314565
                                </Text>
                                        <Text style={styles.textInfo}>
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
                        <CardItem>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Image
                                            style={styles.image}
                                            source={Images.getClockImage} />
                                    </View>

                                    <View style={[styles.col, { justifyContent: 'flex-end' }]}>
                                        <Text style={styles.remainMainText}>2</Text>
                                        <Text style={styles.remainText}>روز از 30 روز</Text>
                                        <Text style={styles.remainText}>از تاریخ 97/05/03</Text>
                                        <Text style={styles.remainText}>از تاریخ 97/05/03</Text>

                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem header style={styles.cardItem}>
                            <Text style={styles.cardItemText}>حجم روزانه باقیمانده</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Image
                                            style={styles.image}
                                            source={Images.getDailyVolumeImage} />
                                    </View>

                                    <View style={[styles.col, { justifyContent: 'flex-end' }]}>
                                        <Text style={styles.remainMainText}>45</Text>
                                        <Text style={styles.remainText}>گیگابایت از 60 گیگابات</Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem header style={styles.cardItem}>
                            <Text style={styles.cardItemText}>حجم شبانه باقیمانده</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Image
                                            style={styles.image}
                                            source={Images.getNightlyVolumeImage} />
                                    </View>

                                    <View style={[styles.col, { justifyContent: 'flex-end' }]}>
                                        <Text style={styles.remainMainText}>25</Text>
                                        <Text style={styles.remainText}>گیگابایت از 30 گیگابات</Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={[styles.card, { marginBottom: 20 }]}>
                        <CardItem header style={styles.cardItem}>
                            <Text style={styles.cardItemText}>Ip ثابت</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Image
                                            style={styles.image}
                                            source={Images.getStaticIPImage} />
                                    </View>

                                    <View style={[styles.col, { justifyContent: 'flex-end' }]}>
                                        <Text style={styles.remainMainText}>25</Text>
                                        <Text style={styles.remainText}>گیگابایت از 30 گیگابات</Text>
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