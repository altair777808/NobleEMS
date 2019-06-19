import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class PlayButton extends Component {
	
	constructor(props) {
		
		super(props);

		this.state = {
		   paused: true,
		   value: 'play' 
		};
	}
	
	onPressPlay = () => {	
		if (!this.state.paused) {
			this.setState({
				paused: true,
				value: 'pause'
			});
		}
		else {
			this.setState({
				paused: false,
				value: 'play'
			});
		}
	}
	
	render() {
	  return(
		<View style={styles.container}>
			<TouchableOpacity style = {styles.PlayButton} onPress={this.onPressPlay}>
			<View >
				<Text>{this.state.value}</Text>
			</View>
			</TouchableOpacity>
		</View>
	  );
	}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PlayButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
	backgroundColor: '#dae3f4',
    borderColor: '#dae3f4',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});