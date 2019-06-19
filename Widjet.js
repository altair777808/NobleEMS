import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Controls from './Controls';
import Clock from './Clock';
import Battery from './Battery';
import PlayButton from './PlayButton';
import CircleSlider from './CircleSlider';

export default class Widjet extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {value: props.value, count: 0 }
	}
	
	onIncrease = () => {
		this.setState({
			value: count++
		})
	}
	
	onDecrease = () => {
		this.setState({
			value: count--
		})
	}
	
	render() {
		return(
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
			
			<View style={{flex: 1, alignItems: 'center',}}>
				<Text style = {{fontSize: 5,}}></Text>
				<Text></Text>
				<Text></Text>
				<TouchableOpacity onPress={this.onIncrease}>
					<View  style={[styles.volume, {alignItems: 'center'}]}>
						<Text style = {styles.button_volume}>+</Text>
					</View>
				</TouchableOpacity>
				<Text></Text>
				<Text style = {{fontSize: 5,}}></Text>
				<Battery/>
				<Text></Text>
				<Clock/>
				<Text></Text>
				<Text></Text>
				<Text style = {{fontSize: 12,}}></Text>
				<TouchableOpacity  onPress={this.onDecrease}>
					<View  style={[styles.volume, {alignItems: 'center'}]}>
						<Text style = {styles.button_volume}>-</Text>
					</View>
					</TouchableOpacity>
			</View>
			
			<CircleSlider value = {this.state.value}/>
			
		  </View>
		);
	}
	
}

const styles = StyleSheet.create({
	button_volume: {
	  fontSize: 25,
	  color: '#fff',
	},
	volume: {
		height: 35,
		width: 35,
		borderWidth: 1,
		borderColor: '#72a2f6',
		backgroundColor: '#72a2f6',
		borderRadius: 35 / 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
})