import React, { Component } from "react";
import { Container, Header, Content, List, Button } from 'native-base'
import { Text, ScrollView, Image, View, Dimensions } from 'react-native';
import styles from '../assets/themes/shared-styles';
var { width, height } = Dimensions.get('window');
import Modal from "react-native-modal";

export default class ModalComponent extends Component {

    constructor(props) {
        super(props);

    }

    async componentDidMount() {

    }


    render() {
        let {
            modalText,
            confirmButtonText,
            cancelButtonText,
            isModalVisible,
            onBackdropPress,
            animationType,
            transparent,
        } = this.props;
        return (
            <Modal
                animationType={animationType}
                transparent={transparent}
                style={{ alignSelf: 'center' }}
                animationInTiming={500}
                animationOutTiming={500}
                isVisible={isModalVisible}
                onBackdropPress={onBackdropPress}
                modalText={modalText}
                confirmButtonText={confirmButtonText}
                cancelButtonText={cancelButtonText}
            >
                <View style={styles.modalView}>
                    <Text>
                        {modalText}
                        {/* مشترک گرامی در نظر داشته باشی با فعالسازی طرح رزرو حجم و زمان طرح فعلی شما خواهد سوخت. همچنین فعالسازی طرح رزرو پس از دقایقی اعمال خواهدشد. */}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Button
                            danger
                            small
                            title={confirmButtonText}

                        >
                            <Text>{confirmButtonText}</Text>
                        </Button>
                        <Button
                            success
                            small
                            title={cancelButtonText}

                        >
                            <Text>{cancelButtonText}</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        )

    }
}