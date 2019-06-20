import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

class Controls extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {value: props.value, count: 0 }
	}
	
	onIncrease = () => {
		if(this.state.count <= 10) {
		this.setState({
			value: this.props.value + ' ' + this.state.count++
		})
		}
	}
	 
	onPressPlay = () => {		
		this.setState({

		})
	}
	
	onDecrease = () => {
		if(this.state.count >= 0) {
			this.setState({
				value: this.props.value + ' ' + this.state.count--
			})
			}
	}

  render() {
	  return(
		  <View style={styles.container}>
			<View style={{width: 40}} />
			<TouchableOpacity onPress={this.onIncrease}>
				<View style={styles.volume}>
					<Text style = {styles.button_volume}>+</Text>
				</View>
			</TouchableOpacity>
			<Text style = {{fontSize: 4,}}/>
			  <TouchableOpacity onPress={this.onPressPlay}>
				<View style={styles.playButton}>
					<Text>{this.state.value}</Text>
				</View>
			  </TouchableOpacity> 
			<Text style = {{fontSize: 4,}}/>
			<TouchableOpacity onPress={this.onDecrease}>
				<View style={styles.volume}>
					<Text style = {styles.button_volume}>-</Text>
				</View>
			</TouchableOpacity>
		  </View>
		);
  }
}



export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
	backgroundColor: '#dae3f4',
    borderColor: '#dae3f4',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  volume: {
	height: 28,
    width: 28,
    borderWidth: 1,
	borderColor: '#72a1e9',
	backgroundColor: '#72a1e9',
    borderRadius: 28 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_volume: {
	  fontSize: 20,
	  color: '#fff',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
  }
})