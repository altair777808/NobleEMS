import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import play from './img/icon_play.png';
import pause from './img/icon_pause.png';

export default class PlayButton extends Component {
	
	constructor(props) {
		
		super(props);

		this.state = {
		   paused: true,
		   value: play
		};
	}
	
	renderPlay() {	
		var sour = this.state.paused ? play : pause;
		return (
			<Image
				source={ sour }
			/>
		);
	}
	
	
	render() {
	  return(
		<View style={styles.container}>
			<TouchableOpacity style = {styles.PlayButton}  onPress={ () => this.setState({ paused: !this.state.paused }) }  >
			{this.renderPlay()}
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