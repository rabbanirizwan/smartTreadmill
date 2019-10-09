import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity,StyleSheet,Image,Alert} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default class AdminPanel extends Component {
 
  
  static navigationOptions =
  {
    header:null,
  };

  constructor()
  {
    super();
    this.state={
      user:"Admin",
      pass:"123",
      name:"",
      password:""
    }
  }

  adminAuthentication=()=>{
    if(this.state.user === this.state.name && this.state.pass === this.state.password)
    {
      Alert.alert("Login Successful");
        this.props.navigation.navigate("adminDashboard");
    }
    else{
      Alert.alert("username or password is incorrect");
    }
  }
  render() {
    return (
      <View style={{backgroundColor:"white",flex:1,paddingRight:50,paddingLeft:50,paddingTop:150}}>
      
          <Text>Admin</Text>
    



<View style={styles.container}>
       
       <View style={styles.SectionStyle}>

      
       <Image source={require('../assets/images/user.png')} style={styles.ImageStyle} />

        <TextInput style = {styles.input}   
              onChangeText={(text) =>this.setState({name:text})}
              placeholder='user name' 
              placeholderTextColor='black' 
             />
       </View>

     </View>

     <View style={styles.container}>
       
       <View style={styles.SectionStyle}>

       <Image source={require('../assets/images/key.png')} style={styles.ImageStyle} />

        <TextInput style = {styles.input}   
              onChangeText={(text) =>this.setState({password:text})}
           
           
           returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Password' 
              placeholderTextColor='black' 
              secureTextEntry/>
       </View>

     </View>
    


<TouchableOpacity style={styles.buttonContainer} 
              
 
                   onPress={this.adminAuthentication}
                   >
             <Text  style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity> 


      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  
  input:{
      height: 45,
      backgroundColor: '#e4e4e4',
     
      padding: 10,
      color: 'black',
     fontSize:18,
    
     borderRadius:15,
     width:220
     
  },
  buttonContainer:{
      backgroundColor: '#F5182C',
      paddingVertical: 15,
      borderRadius:15,
      height:55.
  },
  buttonText:{
      color: 'white',
      textAlign: 'center',
      fontWeight: '700',
      fontSize:18,
    
  },
 

container: {
 
  justifyContent: 'center',
  alignItems: 'center',

},

SectionStyle: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#e4e4e4',
 
  height: 60,
  borderRadius: 15 ,
  margin: 10,
  width:310
},

ImageStyle: {
  padding: 10,
  margin: 10,
  height: 25,
  width: 25,
  resizeMode : 'stretch',
  alignItems: 'center'
},
});