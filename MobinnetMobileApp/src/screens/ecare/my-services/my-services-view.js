import React, { Component } from 'react'
import styles from './my-services-style'
import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import { Button, Card, CardItem, Body } from 'native-base';
import Images from '../../../helpers/images'
import images from '../../../helpers/images';
var { width, height } = Dimensions.get('window');

class MyServicesView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {

    }

    onBackClick() {
        this.props.navigation.replace(routeNames.general.login, {});
    }

    render() {
        return (
            <View style={styles.view}>
                <View>
                    <Image style={styles.backgroundImage}
                        source={Images.getDefaultBackground} />
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <Image
                        style={width > 769 ? styles.titleImage : styles.titleImageResponsive}
                        source={Images.getMobinnetLogoImage} />
                    <Text style={width > 769 ? styles.titleText : styles.titleTextResponsive}>اشتراک‌های من</Text>
                    <Text style={width > 769 ? styles.serviceText : styles.serviceTextResponsive}>
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
                                    در حال ساخت
                                    </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer style={styles.cardFooter}>
                            <Text style={styles.cardFooterText}>989550098313@lte..mobinnet.net</Text>
                        </CardItem>
                    </Card>
                    <Button transparent onPress={this.onBackClick.bind(this)} style={styles.confirmBtn}>
                        <Text style={styles.confirmTextBtn}>خروج</Text>
                        <Image source={images.getPlusIcon} style={styles.icon} />
                    </Button>
                </ScrollView>
            </View>
        )
    }
}

export default MyServicesView;