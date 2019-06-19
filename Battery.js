import React, { Component } from 'react';
import { NativeModules } from 'react-native';

import {
  View,
  Text,
  StyleSheet,
  DeviceEventEmitter
} from 'react-native';

export default class Battery extends Component {
	constructor(props) {
		
		super(props);

		this.state = {
		   batteryLevel: null,
		   charging:false
		};
		
		this.onBatteryStatus = this.onBatteryStatus.bind(this);
	}

  onBatteryStatus(info) {
    this.setState({batteryLevel: info.level});
    this.setState({charging: info.isPlugged});
  }


  componentDidMount() {
	NativeModules.BatteryManager.updateBatteryLevel((info)=> {
     this._subscription = DeviceEventEmitter.addListener('BatteryStatus', this.onBatteryStatus);
     this.setState({batteryLevel: info.level});
     this.setState({charging: info.isPlugged});
	});
  }


  componentWillUnmount() {
    this._subscription.remove();
  }

  render() {
    var chargingText;
    if(this.state.charging){
      chargingText =<Text style={styles.instructions}>Charging </Text>;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
           Battery level: {this.state.batteryLevel}%
        </Text>
        {chargingText}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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