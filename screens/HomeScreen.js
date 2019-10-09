import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }
  UserLoginFunction = () =>{
 
    const { UserEmail }  = this.state ;
    const { UserPassword }  = this.state ;
    
    
   fetch('https://corrugate-knives.000webhostapp.com/User_Login.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       email: UserEmail,
    
       password: UserPassword
    
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson
          }, function() {
            // In this block you can do something with new state.
          });
           // If server response message same as Data Matched
          if(responseJson === 'Data Matched')
           {
              
               //Then open Profile activity and send user email to profile activity.
               this.props.navigation.navigate('dashboard',{user:this.state.UserEmail});
                // Alert.alert("matched");
           }
           else{
   
             Alert.alert(responseJson);
           }
   
         }).catch((error) => {
           console.error(error);
         });
    
     }
 
  
  render(){
    return (
      <View style={styles.container}>
          
  
       
        
  
       
            <View style={{height:550,padding:20,justifyContent:"space-evenly"}}>
            <View style={styles.welcomeContainer}>
          
            <Image
              source={
                __DEV__
                  ? require('../assets/images/logo.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>
         
             <View style={styles.container1}>
       
       <View style={styles.SectionStyle}>  

      
       <Image source={require('../assets/images/man-user.png')} style={styles.ImageStyle} />

  <TextInput
    
    // Adding hint in Text Input using Place holder.
    placeholder="Enter User Email"

    onChangeText={UserEmail => this.setState({UserEmail})}

    // Making the Under line Transparent.
    underlineColorAndroid='transparent'

    style={styles.TextInputStyleClass}
  />

</View>
</View>
<View style={styles.container1}>
       
       <View style={styles.SectionStyle}>  

      
       <Image source={require('../assets/images/house-key.png')} style={styles.ImageStyle} />

  <TextInput
    
    // Adding hint in Text Input using Place holder.
    placeholder="Enter User Password"

    onChangeText={UserPassword => this.setState({UserPassword})}

    // Making the Under line Transparent.
    underlineColorAndroid='transparent'

    style={styles.TextInputStyleClass}

    secureTextEntry={true}
  />
 </View>
 </View>

<View style={{justifyContent:"center",alignItems:"center"}}>
<TouchableOpacity onPress={this.UserLoginFunction} style={{justifyContent:"center",alignItems:"center"}} >
<LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#00FFFF', 'blue']} style={{height:60,width:250,borderRadius:5,justifyContent:"center",alignItems:"center"}}>
<Text style={{textAlign:"center",color:"white",fontSize:20}}> Login </Text>
  
</LinearGradient>
 
  </TouchableOpacity>
 
  </View>
  

</View>
 

      </View>
    );
  }
  
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 60,
  
  },
  welcomeImage: {
    width: 170,
    height: 180,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
 
     
    TextInputStyleClass: {
     
   
    marginBottom: 7,
    
  
    backgroundColor: 'white',
    // Set border Hex Color Code Here.
    
     color:"black",
     
     // Set border Radius.
    
     height: 40,
    
    
     padding: 10,
    
    fontSize:18,

    width:280
   
    
   
    
    },
    
     TextComponentStyle: {
       fontSize: 20,
      color: "white",
      textAlign: 'center', 
      marginBottom: 15,
     
     },
     input:{
      height: 40,
      backgroundColor: 'white',
     
      padding: 10,
      color: 'black',
     fontSize:18,
    
     borderRadius:5,
     width:250
     
  },
  
container1: {

  justifyContent: 'center',
  alignItems: 'center',
 
  

},

SectionStyle: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: 'white',
 
  height: 50,
  borderRadius: 20 ,
  margin: 10,
  width:340,
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
},

ImageStyle: {
  padding: 10,
  margin: 10,
  height: 25,
  width: 25,
  resizeMode : 'stretch',
  alignItems: 'center',
 
  
},
});
