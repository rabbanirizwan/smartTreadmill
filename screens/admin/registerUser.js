import React, { Component } from 'react';
import {Image, View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { whileStatement } from '@babel/types';


export default class userRegisteration extends Component
{
    constructor()
    {
        super();

        this.state = { first_name: '', last_name: '',address:'',cnic:'', loading: false, disabled: false }
    }

    saveData = () =>
    {
        this.setState({ loading: true, disabled: true }, () =>
        {
            fetch('https://corrugate-knives.000webhostapp.com/UserRegister.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                    name: this.state.first_name,
                    password: this.state.last_name,
                   
                })

            }).then((response) => response.json()).then((responseJson) =>
            {
                alert(responseJson);
                this.setState({ loading: false, disabled: false });
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ loading: false, disabled: false });
            });
        });
    }

    render()
    {
        return(
           
            <View  style={{padding:1,paddingTop:20,flex:1,justifyContent:"space-between"}}>
            <Text style={{backgroundColor:"#F5182C",borderBottomColor:"white",borderBottomWidth:2,height:80,padding:20,color:"white"
       ,fontSize:18,textAlign:"center"}}>User Registeration {this.state.age}</Text>
                 <View style = { styles.container }>


                 <View style={styles.SectionStyle}>

      
<Image source={require('../../assets/images/heartbeat.png')} style={styles.ImageStyle} />

                <TextInput    placeholderTextColor='black' placeholder = "Your First Name" style = { styles.textInput } onChangeText = {(text) => this.setState({ first_name: text })}/>
</View>

<View style={styles.SectionStyle}>

      
<Image source={require('../../assets/images/heartbeat.png')} style={styles.ImageStyle} />

                <TextInput underlineColorAndroid = "transparent"   placeholderTextColor='black'  placeholder = "Your passowrd" style = { styles.textInput } onChangeText = {(text) => this.setState({ last_name: text })}/>
</View>
<View style={styles.SectionStyle}>

      
<Image source={require('../../assets/images/heartbeat.png')} style={styles.ImageStyle} />

                <TextInput underlineColorAndroid = "transparent"    placeholderTextColor='black' placeholder = "Your cnic" style = { styles.textInput } onChangeText = {(text) => this.setState({ cnic: text })}/>

</View>                
<View style={styles.SectionStyle}>

      
<Image source={require('../../assets/images/heartbeat.png')} style={styles.ImageStyle} />

<TextInput    placeholderTextColor='black' underlineColorAndroid = "transparent" placeholder = "Your address" style = { styles.textInput } onChangeText = {(text) => this.setState({ address: text })}/>
</View>
             

                <TouchableOpacity style={styles.Btn} onPress={()=>this.props.navigation.navigate('userRegisterationSec',{name:this.state.first_name,password:this.state.last_name,cnic:this.state.cnic,address:this.state.address})}>
                    <Text style={{color:"white",fontSize:18}}>Next</Text>
                    </TouchableOpacity>

                {
                    (this.state.loading)
                    ?
                        (<ActivityIndicator size = "large" />)
                    :
                        null
                }
                

        
 
            </View>
            <View
       
       style={{backgroundColor:"#F5182C",height:80,width:358,alignItems:"center",justifyContent:"center"}}>

      <TouchableOpacity
       onPress={() =>this.props.navigation.navigate("adminDashboard")}>
      <Image
       style={{width:50,height:50}}
         source={require('../../assets/images/home3.png')}
       />
      
      </TouchableOpacity>
       </View>  
 
            </View>
               
         
                   );
    }
}

const styles = StyleSheet.create(
{
    container:
    {
       
        justifyContent: 'space-evenly',
        alignItems: 'center',
       
       height:360
    },

    textInput:
    {
       
        height: 40,
        backgroundColor: '#e4e4e4',
       
        padding: 10,
        color: "red",
       fontSize:18,
      
       borderRadius:5,
       width:300
    },

    Btn:
    {
        backgroundColor: 'black',
        
        padding: 10,
        marginTop: 10,
        marginBottom: 25,
        justifyContent:"center",
        alignItems:"center",
       
       width:250

    },

    btnText:
    {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#e4e4e4',
       
        height: 50,
        borderRadius: 5 ,
        margin: 10,
        width:340
      },
      
      ImageStyle: {
        padding: 10,
        margin: 10,
        height: 45,
        width: 45,
        resizeMode : 'stretch',
        alignItems: 'center',
        
      },
});