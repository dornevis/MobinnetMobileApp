import React, { Component } from 'react'
import { Image, ImageBackground } from 'react-native'
import styles from './splash-style'
import { View, Text, Button } from 'native-base'
import Images from '../../../helpers/images'
import routeNames from '../../../helpers/route-names';

class SplashView extends Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        let { navigation } = this.props;
        setTimeout(() => {
            navigation.replace(routeNames.general.login, { passProps: this.props });
          }, 1000)
    }

    render() {
        return (
            <ImageBackground source={Images.getSplashBackground} style={styles.backgroundImage}>
                <Image
                    style={styles.firstCloudImage}
                    source={Images.getCloudImage} />
                <Image
                    style={styles.secondCloudImage}
                    source={Images.getCloudImage} />
                <Image
                    style={styles.thirdCloudImage}
                    source={Images.getCloudImage} />
                <View style={styles.viewImage}>
                    <Image
                        style={styles.logoImage}
                        source={Images.getMobinnetLogoImage} />
                    <Image
                        style={styles.logoTextImage}
                        source={Images.getMobinnetTextImage} />
                </View>
            </ImageBackground>
        )
    }
}

export default SplashView;