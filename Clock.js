import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native';
 
export default class Clock extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state = { currentTime: null, currentDay: null }
 
        this.daysArray = ['воскресенье', 'понидельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    }
 
    componentWillMount()
    {
        this.getCurrentTime();
    }
 
    getCurrentTime = () =>
    {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
 
        if( minutes < 10 )
        {
            minutes = '0' + minutes;
        }
		 
		if( hour < 10 )
        {
           hour = '0' + hour;
        }
 
        this.setState({ currentTime: hour + ':' + minutes});
 
        this.daysArray.map(( item, key ) =>
        {
            if( key == new Date().getDay() )
            {
                this.setState({ currentDay: item.toUpperCase() });
            }
        })        
    }
 
    componentWillUnmount()
    {
        clearInterval(this.timer);
    }
 
    componentDidMount()
    {
        this.timer = setInterval(() =>
        {
            this.getCurrentTime();
        }, 1000);
    }
 
    render()
    {
        return(
            <View style = { styles.container }>
                <View>
                    <Text style = { styles.timeText }>{ this.state.currentTime }</Text>                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0
    },
 
    timeText:
    {
        fontSize: 35,
        color: 'black'
    },
 
    daysText:
    {
        color: '#e59400',
        fontSize: 25,
        paddingBottom: 0
    }
});