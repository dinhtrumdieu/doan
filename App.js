import React, { Component } from 'react';
import FCM from 'react-native-fcm';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    componentDidMount() {
        FCM.requestPermissions().then(()=>console.log('granted')).catch(()=>console.log('notification permission rejected'));

        FCM.getFCMToken().then(token => {
            console.log("token:"+token);
            // store fcm token in your server
        });

        FCM.getInitialNotification().then(notif=>{
            console.log(notif)
        });
    }

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
              <Text style={styles.instructions}>
                To get started, edit App.js
              </Text>
              <Text style={styles.instructions}>
                  {instructions}
              </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
