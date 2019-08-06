import React, { Component } from "react";
import { Spinner } from 'native-base';
import { View } from 'react-native';
import generalStyle from "../helpers/general-style";
import { WaveIndicator } from 'react-native-indicators';

export default class Loading extends Component {

    render() {
        return (
            <View style={generalStyle.loadingStyle}>
                {/* <Spinner color='green' /> */}
                <WaveIndicator
                    color='#84c126'
                    waveMode="outline"
                    waveFactor={0.54}
                    size={90}
                    count={5}
                    animationDuration={3000} />
            </View>
        );
    }

}