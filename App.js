import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native';
import CircleSlider from './CircleSlider';
import Controls from './Controls';
import Clock from './Clock';
import Battery from './Battery';
import PlayButton from './PlayButton';
import Widjet from './Widjet';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import top_img1_before from './img/icon/icon1_top.png';
import top_img2_before from './img/icon/icon2_top.png';
import top_img4_before from './img/icon/icon4_top.png';
import top_img5_before from './img/icon/icon5_top.png';

import bottom_img1_before from './img/icon/icon1_bottom.png';
import bottom_img2_before from './img/icon/icon2_bottom.png';
import bottom_img3_before from './img/icon/icon3_bottom.png';
import bottom_img4_before from './img/icon/icon4_bottom.png';
import bottom_img5_before from './img/icon/icon5_bottom.png';

import top_img1_after from './img/icon_click/icon1_top.png';
import top_img2_after from './img/icon_click/icon2_top.png';
import top_img4_after from './img/icon_click/icon4_top.png';
import top_img5_after from './img/icon_click/icon5_top.png';

import bottom_img1_after from './img/icon_click/icon1_bottom.png';
import bottom_img2_after from './img/icon_click/icon2_bottom.png';
import bottom_img3_after from './img/icon_click/icon3_bottom.png';
import bottom_img4_after from './img/icon_click/icon4_bottom.png';
import bottom_img5_after from './img/icon_click/icon5_bottom.png';
import logo from './img/Logo.png';

class HomeScreen extends React.Component {
	static navigationOptions = {
        header: null
    }
	render() {
		const {navigate} = this.props.navigation;
	return(
		<View style={{flex: 1,  alignItems: 'center', justifyContent: 'center', backgroundColor: '#31789d'}} >
			<Image source ={logo}/>
				<TouchableOpacity style = {styles.button_begin}
				onPress = {()=>navigate('Second')} >
					<Text style={styles.welcome}>Начать тренировку!</Text>
				</TouchableOpacity>

		</View>
	);
	}
}

 class SecondScreen extends React.Component {
	static navigationOptions = {
        header: null
    }
	constructor(props) {
		super(props);
		
		this.state = {
			id_costume: 0,
			index_mode: 0,
			value: 10,
			top_value1 : -1,
			top_value2 : -1,
			top_value4 : -1,
			top_value5 : -1,
			top_clicked1: false,
			top_clicked2: false,
			top_clicked4: false,
			top_clicked5: false,
			bottom_clicked1: false,
			bottom_clicked2: false,
			bottom_clicked3: false,
			bottom_clicked4: false,
			bottom_clicked5: false,
			top_image_before: [top_img1_before, top_img2_before, top_img4_before, top_img5_before],
			top_image_after: [top_img1_after, top_img2_after, top_img4_after, top_img5_after],
			bottom_clicked1: false,
			bottom_clicked2: false,
			bottom_clicked3: false,
			bottom_clicked4: false,
			bottom_clicked5: false,
			bottom_image_before: [bottom_img1_before, bottom_img2_before, bottom_img3_before, bottom_img4_before, bottom_img5_before],
			bottom_image_after: [bottom_img1_after, bottom_img2_after, bottom_img3_after, bottom_img4_after, bottom_img5_after],
		};
	}

	render_top1_image() {
		var imgSource = this.state.top_clicked1 ? this.state.top_image_after[0] : this.state.top_image_before[0];
		return (
			<Image
				source={ imgSource }
			/>
		);
	}

	render_top2_image() {
		var imgSource = this.state.top_clicked2 ? this.state.top_image_after[1] : this.state.top_image_before[1];
		return (
			<Image
				source={ imgSource }
			/>
		);
	}

	render_top4_image() {
		var imgSource = this.state.top_clicked4 ? this.state.top_image_after[2] : this.state.top_image_before[2];
		return (
			<Image
				source={ imgSource }
			/>
		);
	}

	render_top5_image() {
		var imgSource = this.state.top_clicked5 ? this.state.top_image_after[3] : this.state.top_image_before[3];
		return (
			<Image
				source={ imgSource }
			/>
		);
	}

	render_buttom1_image() {
        var imgSource = this.state.buttom_clicked1 ? this.state.buttom_image_after[0] : this.state.buttom_image_before[0];
        return (
            <Image
                source={ imgSource }
            />
        );
    }

    render_buttom2_image() {
        var imgSource = this.state.buttom_clicked2 ? this.state.buttom_image_after[1] : this.state.buttom_image_before[1];
        return (
            <Image
                source={ imgSource }
            />
        );
	}
	
	render_buttom3_image() {
        var imgSource = this.state.buttom_clicked3 ? this.state.buttom_image_after[2] : this.state.buttom_image_before[2];
        return (
            <Image
                source={ imgSource }
            />
        );
    }

    render_buttom4_image() {
        var imgSource = this.state.buttom_clicked4 ? this.state.buttom_image_after[3] : this.state.buttom_image_before[3];
        return (
            <Image
                source={ imgSource }
            />
        );
    }

    render_buttom5_image() {
        var imgSource = this.state.buttom_clicked2 ? this.state.buttom_image_after[4] : this.state.buttom_image_before[4];
        return (
            <Image
                source={ imgSource }
            />
        );
    }

	renderWidget() {
		let val = this.state.value;

		return(
			<Widjet value = {val}/>
		)
	}

	click_img1_top() {

		if (this.state.top_value1 != -1) {
			this.setState({
				value: this.state.top_value1
				});
		}
		else {
			this.setState({
				value: 0
				});
		}
	
		this.setState({ top_clicked1: !this.state.top_clicked1 });
	
		if (!this.state.top_clicked1) {
			this.setState({ value: 0, top_value1 : 0 });
		}
	
		this.setState({
			top_value1: this.state.value
		});
	
	}
	
	ActionEvent_Stop(){
		this.setState({
			value: 0,
		})
	}



	render() {
		const costume =  ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый', 'Шестой', 'Седьмой', 'Восьмой'];
		const mode = ['Силовой', 'Кардио', 'Снижение веса', 'Для тренера', 'Антициллюлит', 'Тонизирующий', 'Укрепляющий', 'Лимфодренажный массаж', 'Расслабляющий массаж', 'Восстанавливающий массаж'];
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
			
			<TouchableOpacity style = {styles.Button} onPress={ () => this.setState({ id_costume: 0 }) }  >
				<View>
					<Text>1</Text>
				</View>
			</TouchableOpacity>
			
			<TouchableOpacity style = {styles.Button} onPress={ () => this.setState({ id_costume: 1 }) }  >
				<View>
					<Text>2</Text>
				</View>
			</TouchableOpacity> 
			
			
			<TouchableOpacity style = {styles.Button} onPress={ () => this.setState({ id_costume: 2 }) }  >
				<View>
					<Text>3</Text>
				</View>
			</TouchableOpacity> 
			
			<TouchableOpacity style = {styles.Button} onPress={ () => this.setState({ id_costume: 3 }) }  >
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
				<Text>{costume[this.state.id_costume]}</Text>
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

	  
			<TouchableOpacity style = {styles.Button} onPress={ () => this.setState({ top_clicked1: !this.state.top_clicked1 }) }  >
				 {this.render_top1_image()}
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
	  
	  		<TouchableOpacity style = {styles.Button}  onPress={ () => this.setState({ top_clicked2: !this.state.top_clicked2 }) }    >
				 {this.render_top2_image()}
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

		<TouchableOpacity style = {[styles.Button, {backgroundColor:'#dae3f4'}]}>
			<View>
				<Text>Стоп</Text>
			</View>
		</TouchableOpacity> 
		
		{this.renderWidget()}
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
	  
	  		<TouchableOpacity style = {styles.Button} onPress={ () => this.setState({ top_clicked4: !this.state.top_clicked4 }) }  >
				 {this.render_top4_image()}
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
	  
	  		<TouchableOpacity style = {styles.Button} onPress={ () => this.setState({ top_clicked5: !this.state.top_clicked5 }) }  >
				 {this.render_top5_image()}
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
			
			<TouchableOpacity style = {styles.mode_button} onPress={ () => {
				if(this.state.index_mode < mode.length-1)
					this.setState({ index_mode: this.state.index_mode + 1 }) 
				else 
					this.setState({ index_mode: 0 }) 
				}}  >
				<Text>Режим: </Text>
				<Text>{mode[this.state.index_mode]}</Text>
			</TouchableOpacity>
			
			<Controls value = 'Пауза' />
		
	  </View>
	  
	  <View style = {{ 
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-around',
			marginRight: 13,
			}}>
			
			<TouchableOpacity style = {styles.Button} onPress={ () => this.setState({ id_costume: 4 }) }  >
				<View>
					<Text>5</Text>
				</View>
			</TouchableOpacity>
			
			<TouchableOpacity style = {styles.Button} onPress={ () => this.setState({ id_costume: 5 }) }  >
				<View>
					<Text>6</Text>
				</View>
			</TouchableOpacity> 
			
			
			<TouchableOpacity style = {styles.Button} onPress={ () => this.setState({ id_costume: 6}) }  >
				<View>
					<Text>7</Text>
				</View>
			</TouchableOpacity> 
			
			<TouchableOpacity style = {styles.Button} onPress={ () => this.setState({ id_costume: 7}) }  >
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
  button_begin: {
    marginRight:40,
    marginLeft:40,
   	marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  mode_button: {
	height: 72,
    width: 72,
    borderWidth: 1,
	backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    height: 52,
    width: 52,
    borderWidth: 2,
	borderColor: '#72a1e9',
	backgroundColor: 'white',
    borderColor: '#7F7F7F',
    borderRadius: 52 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
	color:'#31789d',
	textAlign:'center',
	paddingLeft : 10,
	paddingRight : 10
  }
});

const AppNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen
	},
	Second: {
		screen: SecondScreen
	}
});

export default createAppContainer(AppNavigator);