import React, { Component } from 'react'
import styles from './complete-info-style'
import { View, ImageBackground, Image, Picker, ScrollView, Text } from 'react-native'
import { Form, Item, Input, Label, Button, Icon } from 'native-base';
import Images from '../../../helpers/images'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';



class CompleteInfoView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            value: '',
            types3: [{ label: 'زن', value: 0 }, { label: 'مرد', value: 1 }],
            value3: 0,
            value3Index: 0,
        };
    }
    componentDidMount() {

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
                            source={Images.getCompleteInfoIcon} />
                        <Text style={styles.titleText}>تکمیل اطلاعات</Text>
                        <Text style={styles.infoText}>
                            مشترک گرامی، با تکمیل اطلاعات خود در فرم زیر ما را در ارائه خدمات بهتر یاری فرمایید.
                         </Text>
                        <View style={styles.formView}>
                            <Form style={styles.form}>
                                <View style={styles.formViewFisrtRow}>
                                    <View style={styles.childViewForm}>
                                        <Label style={styles.label}>جنسیت<Text style={styles.star}>*</Text></Label>
                                        <View style={[styles.item, { position: 'relative', right: 0, top: 7 }]}>
                                            <RadioForm formHorizontal={true} animation={true} style={{ marginLeft: 20 }}>
                                                {this.state.types3.map((obj, i) => {
                                                    var onPress = (value, index) => {
                                                        this.setState({
                                                            value3: value,
                                                            value3Index: index
                                                        })
                                                    }
                                                    return (
                                                        <RadioButton labelHorizontal={true} key={i} >
                                                            <RadioButtonLabel
                                                                obj={obj}
                                                                index={i}
                                                                onPress={onPress}
                                                                labelStyle={styles.radiButtonLabel}
                                                                labelWrapStyle={{}}
                                                            />
                                                            <RadioButtonInput
                                                                obj={obj}
                                                                index={i}
                                                                selectedButtonColor={'#124d4d'}
                                                                isSelected={this.state.value3Index === i}
                                                                onPress={onPress}
                                                                buttonInnerColor={'#124d4d'}
                                                                buttonOuterColor={this.state.value3Index === i ? '#124d4d' : '#000'}
                                                                buttonSize={6}
                                                                buttonOuterSize={13}
                                                                buttonStyle={{ borderWidth: 1, borderColor: '#124d4d' }}
                                                                buttonWrapStyle={{ marginLeft: 10 }}
                                                            />
                                                        </RadioButton>
                                                    )
                                                })}
                                            </RadioForm>
                                        </View>
                                    </View>
                                    <View style={styles.childViewForm}>
                                        <Label style={styles.label}>تاریخ تولد<Text style={styles.star}>*</Text></Label>
                                        <Item style={styles.item}>
                                            <Input style={styles.input} />
                                        </Item>
                                    </View>
                                </View>
                                <Label style={styles.label}>میزان تحصیلات خود را مشخص کنید<Text style={styles.star}>*</Text></Label>
                                <Item style={styles.item}>
                                    <Input style={styles.input} />
                                </Item>

                                <Label style={styles.label}>تکرار کلمه عبور<Text style={styles.star}>*</Text></Label>
                                <Item style={styles.item}>
                                    <Input style={styles.input} secureTextEntry />
                                </Item>
                                <Label style={styles.label}>نام و نام خانوادگی</Label>
                                <Item style={styles.item}>
                                    <Input style={styles.input} />
                                </Item>
                            </Form>
                            <Button style={styles.confirmBtn}><Text style={styles.confirmTextBtn}>ثبت</Text></Button>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        )
    }
}

export default CompleteInfoView;