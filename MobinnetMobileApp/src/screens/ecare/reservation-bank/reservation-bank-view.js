import React, { Component } from 'react'
import styles from './reservation-bank-style'
import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import { Header, Right, Button, Title, Card, CardItem, Body, Left } from 'native-base';
import Images from '../../../helpers/images'
var { width, height } = Dimensions.get('window');
import ModalComponent from "../../../components/modal";
import Modal from "react-native-modal";


class ReservationBankView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    onBackdropPress = () => {
        this.setState({ isModalVisible: false });
    };

    async componentDidMount() {

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
                            <Title style={styles.headerTitle}>بانک رزرو</Title>
                        </Right>
                    </Header>
                    <Image
                        style={width > 769 ? styles.titleImage : styles.titleImageResponsive}
                        source={Images.getReservationBankIcon} />
                    <Text style={width > 769 ? styles.titleText : styles.titleTextResponsive}>رزرو</Text>
                    <Text style={width > 769 ? styles.reservationText : styles.reservationTextResponsive}>
                        مشترک گرامی، در این قسمت شما قادر به مدیریت طرح‌ها و گیگ‌پک‌های رزروشده خود می‌باشید
                    </Text>
                    <Card style={styles.card}>
                        <CardItem style={[styles.cardItem]}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={[styles.col, { borderTopLeftRadius: 5 }]}>
                                        <Text style={styles.textInfo}>
                                            1398/05/25
                                </Text>
                                    </View>
                                    <View style={[styles.colTitle, { borderTopRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            تاریخ رزرو
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Text style={styles.textInfo}>
                                            طرح RTP4585
                                </Text>
                                    </View>
                                    <View style={styles.colTitle}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            نوع رزرو
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={[styles.cardItem, { borderBottomWidth: 0 }]}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={[styles.col, { borderBottomLeftRadius: 5 }]}>
                                        <Button onPress={this.toggleModal} style={styles.confirmBtn}><Text style={styles.confirmTextBtn} >فعال سازی</Text></Button>
                                    </View>
                                    <View style={[styles.colTitle, { borderBottomRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            فعال سازی
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <Modal
                            style={{ alignSelf: 'center' }}
                            animationInTiming={500}
                            animationOutTiming={500}
                            isVisible={this.state.isModalVisible}
                            onBackdropPress={this.onBackdropPress.bind(this)}
                        >
                            <View
                                style={width > 769 ? styles.modalView : styles.modalViewResponsive}
                            >
                                <Text style={width > 769 ? styles.modalViewText : styles.modalViewTextResponsive}>مشترک گرامی در نظر داشته باشی با فعالسازی طرح رزرو حجم و زمان طرح فعلی شما خواهد سوخت. همچنین فعالسازی طرح رزرو پس از دقایقی اعمال خواهدشد.</Text>
                                <View style={{ flexDirection: "row", marginTop: 20 }}>
                                    <Button
                                        small
                                        title="Hide modal"
                                        onPress={this.toggleModal}
                                        style={[width > 769 ? styles.modalBtn : styles.modalBtnResponsiuve, { backgroundColor: "#c22636", }]}
                                    >
                                       <Text style={width > 769 ? styles.modalBtnText : styles.modalBtnTextResponsiuve}>خیر</Text>
                                    </Button>
                                    <Button
                                        small
                                        title="Hide modal"
                                        onPress={this.toggleModal}
                                        style={[width > 769 ? styles.modalBtn : styles.modalBtnResponsiuve, { backgroundColor: "#84c124", }]}
                                    >
                                        <Text style={width > 769 ? styles.modalBtnText : styles.modalBtnTextResponsiuve}>بله</Text>
                                    </Button>
                                </View>
                            </View>
                        </Modal>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem style={[styles.cardItem]}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={[styles.col, { borderTopLeftRadius: 5 }]}>
                                        <Text style={styles.textInfo}>
                                            1398/05/25
                                </Text>
                                    </View>
                                    <View style={[styles.colTitle, { borderTopRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            تاریخ رزرو
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={styles.col}>
                                        <Text style={styles.textInfo}>
                                            طرح RTP4585
                                </Text>
                                    </View>
                                    <View style={styles.colTitle}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            نوع رزرو
                                </Text>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={[styles.cardItem, { borderBottomWidth: 0 }]}>
                            <Body>
                                <View style={styles.cardBody}>
                                    <View style={[styles.col, { borderBottomLeftRadius: 5 }]}>
                                        <Button style={styles.activatedBtn}><Text style={styles.confirmTextBtn}>فعال شده</Text></Button>
                                    </View>
                                    <View style={[styles.colTitle, { borderBottomRightRadius: 5 }]}>
                                        <Text style={[styles.textInfo, { color: '#fff' }]}>
                                            فعال سازی
                                </Text>
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

export default ReservationBankView;