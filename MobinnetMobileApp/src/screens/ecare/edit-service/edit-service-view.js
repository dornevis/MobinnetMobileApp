import React, { Component } from 'react'
import styles from './edit-service-style'
import { View, Image, ScrollView, Text, Dimensions } from 'react-native'
import { Header, Right, Left, Button, Title, Form, Item, Label, Input } from 'native-base';
import Images from '../../../helpers/images'
var { width, height } = Dimensions.get('window');


class EditServiceView extends Component {

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
                            <Title style={styles.headerTitle}>ویرایش اشتراک‌ها</Title>
                        </Right>
                    </Header>
                    <View style={styles.bodyContent}>
                        <View style={styles.serviceContent}>
                            <View style={styles.content}>
                                <Button style={width > 769 ? styles.confirmBtn : styles.confirmBtnResponsive}><Text style={width > 769 ? styles.confirmTextBtn : styles.confirmTextBtnResponsive}>ویرایش</Text></Button>
                                <Button style={width > 769 ? styles.cancelBtn : styles.cancelBtnResponsive}><Text style={width > 769 ? styles.cancelTextBtn : styles.cancelTextBtnResponsive}>حذف</Text></Button>
                            </View>
                            <View style={styles.content}>
                                <Form style={styles.form}>
                                    <Label style={width > 769 ? styles.label : styles.labelResponsive}>نام مستعار</Label>
                                    <Item style={styles.item}>
                                        <Input style={width > 769 ? styles.input : styles.inputResponsive} />
                                    </Item>
                                    <Label style={width > 769 ? styles.label : styles.labelResponsive}>شناسه اشتراک</Label><Text style={width > 769 ? styles.star : styles.starResponsive}>*</Text>
                                    <Item style={styles.item}>
                                        <Input style={width > 769 ? styles.input : styles.inputResponsive} />
                                    </Item>
                                </Form>
                            </View>
                        </View>
                        <Image source={Images.getGreenLine} style={styles.borderStyle} />
                    </View >
                </ScrollView >
            </View >
        )
    }
}

export default EditServiceView;