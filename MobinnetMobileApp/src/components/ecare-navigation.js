import React, { Component } from "react";
import { Container, Header, Content, List, ListItem } from 'native-base'
import { Text, ScrollView, Image, View } from 'react-native';
import { SafeAreaView, StackActions, NavigationActions } from 'react-navigation';
import styles from '../assets/themes/shared-styles';
import Images from "../helpers/images";
import routeNames from "../helpers/route-names";

export default class EcareDrawerComponent extends Component {

    constructor(props) {
        super(props);

    }

    async componentDidMount() {

    }

    onHelpClick() {
        this.props.navigation.push(routeNames.general.help, {
            passProps: this.props
        });
    }

    onBuyGigPackClick() {
        this.props.navigation.push(routeNames.ecare.buyGigPack, {
            passProps: this.props
        });
    }

    onExtraQouteClick() {
        this.props.navigation.push(routeNames.ecare.extraQouta, {
            passProps: this.props
        });
    }

    onUsageClick() {
        this.props.navigation.push(routeNames.ecare.usage, {
            passProps: this.props
        });
    }

    onEcareHomeClick() {
        this.props.navigation.push(routeNames.ecare.ecareHome, {
            passProps: this.props
        });
    }

    onPaymentReportClick() {
        this.props.navigation.push(routeNames.ecare.paymentReport, {
            passProps: this.props
        });
    }

    onRecordClick() {
        this.props.navigation.push(routeNames.ecare.record, {
            passProps: this.props
        });
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView>
                    <Image
                        style={styles.backgroundImage}
                        source={Images.getBackgroundImage} />
                    <View style={styles.textInfoView}>
                        <Text style={styles.drawerHeaderText}>کاربر گرامی</Text>
                        <Text style={styles.drawerHeaderText}>شکوه تجارت صدف</Text>
                    </View>
                    <View>
                        <List style={styles.list}>
                            <ListItem style={styles.listItem} onPress={this.onEcareHomeClick.bind(this)}><Text style={styles.listItemText}>صفحه اصلی</Text></ListItem>
                            <ListItem style={styles.listItem} onPress={this.onBuyGigPackClick.bind(this)}><Text style={styles.listItemText}>خرید گیگ پک</Text></ListItem>
                            {/* <ListItem style={styles.listItem} onPress={this.onUsageClick.bind(this)}><Text style={styles.listItemText}>ریز مصرف</Text></ListItem> */}
                            {/* <ListItem style={styles.listItem} onPress={this.onExtraQouteClick.bind(this)}><Text style={styles.listItemText}>خرید حجم اضافه</Text></ListItem> */}
                            <ListItem style={styles.listItem} onPress={this.onPaymentReportClick.bind(this)}><Text style={styles.listItemText}>گزارش پرداخت</Text></ListItem>
                            <ListItem style={styles.listItem} onPress={this.onRecordClick.bind(this)}><Text style={styles.listItemText}>سوابق ورود</Text></ListItem>
                            <ListItem style={styles.listItem} onPress={this.onHelpClick.bind(this)}><Text style={styles.listItemText}>راهنما</Text></ListItem>
                        </List>
                    </View>

                </SafeAreaView>
            </ScrollView>
        );
    }

}