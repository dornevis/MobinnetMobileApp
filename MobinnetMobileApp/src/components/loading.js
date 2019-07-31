import React, { Component } from "react";
import { Spinner } from 'native-base';
import { View } from 'react-native';
import generalStyle from "../helpers/general-style";

export default class Loading extends Component {

    render() {
        return (
            <View style={generalStyle.loadingStyle}>
                <Spinner color='green' />
            </View>
        );
    }

}