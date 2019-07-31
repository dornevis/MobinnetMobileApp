import React, { Component } from 'react'
import styles from './my-services-style'
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native'
import { Button, Card, CardItem, Body } from 'native-base';
import Images from '../../../helpers/images'
import images from '../../../helpers/images';


class MyServicesView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {

    }

    onBackClick() {
        this.props.navigation.navigate(routeNames.general.login, {})
    }
    
    render() {
        return (
            <ScrollView>
                <View style={styles.view}>
                    <ImageBackground source={Images.getDefaultBackground} style={styles.backgroundImage}>
                        <Image
                            style={styles.titleImage}
                            source={Images.getMobinnetLogoImage} />
                        <Text style={styles.titleText}>اشتراک‌های من</Text>
                        <Text style={styles.serviceText}>
                            در این بخش شما می‌توانید تمامی اشتراک‌های خود را مشاهده نمایید و با کلیک بر روی هر اشتراک به حساب کاربری موردنظر خود وارد شوید همچنین جهت اضافه کردن
                           اشتراک جدید به پروفایل خود می‌توانید بر روی لینک 
                           اضافه کردن اشتراک جدید
                            کلیک نمایید
                    </Text>
                        <Card style={styles.card}>
                            <CardItem style={styles.cardBody}>
                                <Body style={styles.body}>
                                    <Image source={images.getLteImage} style={styles.lteImage} />
                                    <Text style={styles.cardBodyText}>
                                        صدف‌ نت
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer style={styles.cardFooter}>
                                <Text style={styles.cardFooterText}>989550098313@lte..mobinnet.net</Text>
                            </CardItem>
                        </Card>
                        <Button onPress={this.onBackClick.bind(this)} style={styles.confirmBtn}>
                            <Text style={styles.confirmTextBtn}>اضافه کردن اشتراک</Text>
                            <Image source={images.getPlusIcon} style={styles.icon} />
                        </Button>
                    </ImageBackground>
                </View>
            </ScrollView>
        )
    }
}

export default MyServicesView;