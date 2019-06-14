import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native';
import CircleSlider from './CircleSlider';
import Controls from './Controls';
import Clock from './Clock';
import Battery from './Battery';
import PlayButton from './PlayButton';
import Widjet from './Widjet';

export default class App extends Component {
	
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row',
        justifyContent: 'space-evenly', backgroundColor: 'white'}}>
	  
		  <View style = {{ 
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-around',
			marginLeft: 10,
			alignItems: 'center'
			}}>
			
			<TouchableOpacity style = {styles.Button}>
				<View>
					<Text>1</Text>
				</View>
			</TouchableOpacity>
			
			<TouchableOpacity style = {styles.Button}>
				<View>
					<Text>2</Text>
				</View>
			</TouchableOpacity> 
			
			
			<TouchableOpacity style = {styles.Button}>
				<View>
					<Text>3</Text>
				</View>
			</TouchableOpacity> 
			
			<TouchableOpacity style = {styles.Button}>
				<View>
					<Text>4</Text>
				</View>
			</TouchableOpacity> 
					
		  </View>
		  
		 <View style = {{ 
			flex: 2,
			flexDirection: 'column',
			justifyContent: 'space-around',
			marginBottom: 15,
			marginTop: 15,
			marginLeft: 25,
			alignItems: 'center',
			}}>
		  
			<PlayButton/>
			<Text></Text>
			
			<View>
				<Text>Костюм:</Text>
				<Text>первый</Text>
				<Text style = {{fontSize: 17}}></Text>
			</View>
			
			<Controls value = 'Импульс' />
		  
		</View>
		
		<View style = {{ 
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-around',
			marginLeft: 20,
			marginTop: 10,
			}}>
	  
			<TouchableOpacity style = {styles.Button}>
				<Image source={require('./img/icon/icon1_top.png')}/>
			</TouchableOpacity>

			<Text style = {{fontSize: 2,}}></Text>		
			
			<TouchableOpacity style = {styles.Button}>
				<Image source={require('./img/icon/icon1_bottom.png')}/>
			</TouchableOpacity> 
	  
	  </View>
	  
		<View style = {{ 
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-between',
			marginBottom: 23,
			marginTop: 30,
			marginLeft: 15,
			}}>
	  
			<TouchableOpacity style = {styles.Button}>
				<Image source={require('./img/icon/icon2_top.png')}/>
			</TouchableOpacity> 
			
			<TouchableOpacity style = {styles.Button}>
				<Image source={require('./img/icon/icon2_bottom.png')}/>
			</TouchableOpacity> 
		  
		</View>
		
		<View style = {{ 
			flex: 2,
			flexDirection: 'column',
			justifyContent: 'space-between',
			marginBottom: 7,
			marginTop: 7,
			marginLeft: 7,
			alignItems: 'center'
			}}>

		<TouchableOpacity style = {styles.Button}>
			<View>
				<Text>Стоп</Text>
			</View>
		</TouchableOpacity> 
		
		<Widjet/>
		<Text></Text>
		
		<TouchableOpacity style = {styles.Button}>
			<Image source={require('./img/icon/icon3_bottom.png')}/>
		</TouchableOpacity> 
		
	  </View>
	  
	  		<View style = {{ 
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-between',
			marginBottom: 23,
			marginTop: 30,
			marginRight: 15,
			}}>
	  
			<TouchableOpacity style = {styles.Button}>
				<Image source={require('./img/icon/icon4_top.png')}/>
			</TouchableOpacity> 
			
			<TouchableOpacity style = {styles.Button}>
				<Image source={require('./img/icon/icon4_bottom.png')}/>
			</TouchableOpacity> 
		  
		</View>
		
		<View style = {{ 
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-around',
			marginRight: 35,
			marginTop: 10,
			}}>
	  
			<TouchableOpacity style = {styles.Button}>
			<Image source={require('./img/icon/icon5_top.png')}/>
			</TouchableOpacity>

			<Text style = {{fontSize: 2,}}></Text>		
			
			<TouchableOpacity style = {styles.Button}>
				<Image source={require('./img/icon/icon5_bottom.png')}/>
			</TouchableOpacity> 
	  
	  </View>
	  
		<View style = {{ 
			flex: 2,
			flexDirection: 'column',
			justifyContent: 'space-around',
			marginRight: 15,
			}}>
	  
		  <Controls value = 'Мастер' />
			
			<View>
				<Text>Режим: </Text>
				<Text>силовой</Text>
			</View>
			
			<Controls value = 'Пауза' />
		
	  </View>
	  
	  <View style = {{ 
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-around',
			marginRight: 13,
			}}>
			
			<TouchableOpacity style = {styles.Button}>
				<View>
					<Text>5</Text>
				</View>
			</TouchableOpacity>
			
			<TouchableOpacity style = {styles.Button}>
				<View>
					<Text>6</Text>
				</View>
			</TouchableOpacity> 
			
			
			<TouchableOpacity style = {styles.Button}>
				<View>
					<Text>7</Text>
				</View>
			</TouchableOpacity> 
			
			<TouchableOpacity style = {styles.Button}>
				<View>
					<Text>8</Text>
				</View>
			</TouchableOpacity> 
					
		  </View>
		
	</View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
	height: 120,
  },
  red: {
    color: 'red',
  },
  
  Button: {
    height: 52,
    width: 52,
    borderWidth: 1,
	backgroundColor: 'white',
    borderColor: '#7F7F7F',
    borderRadius: 52 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});