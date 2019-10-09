import React, { Component } from 'react';  
import { TextInput,View, Text,StyleSheet,Image,TouchableOpacity,ImageBackground } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { CoverageMap } from 'istanbul-lib-coverage';

export default class userDashBoard extends Component {  
  static navigationOptions =
  {
    header:null,
  };

  constructor(props) {

    super(props);

    this.state = {

  
   user:this.props.navigation.state.params.user,
    }

  }

  

  render() {
    return (
      
      
        
      <View>
                <LinearGradient
        start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#00FFFF', 'blue']} style={styles.nav}
         >
       
         
       
      <View style={{justifyContent:"center"}}>

<View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:20,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
       
       
      }}>
        <Text style={{color:"white",fontSize:16,}}>Hello {this.state.user} </Text>
        <TouchableOpacity
        onPress={() =>this.props.navigation.navigate("Main")}>
        <Image source={require('../../assets/images/exit.png')} style={styles.user}/>
 

        </TouchableOpacity>
        
      </View>
      <View style={{backgroundColor:"rgba(255, 255, 255, 0.3)",
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10,
    flexDirection:"row",
    justifyContent:"space-between"}}>
    <View>
    <Text 
    
    style={{color:"white",fontSize:16,}}>
        Today's Activity
      </Text>

<Text 
    style={{color:"white",fontSize:16,width:255}}>
        click on the bell icon 
      </Text>

    </View>
    
   
<TouchableOpacity onPress = {() =>this.props.navigation.navigate("response",{name:this.state.user})}>
<Image source={require('../../assets/images/n.png')} 
 style={styles.img} >
 </Image>
 
</TouchableOpacity>
    </View>
      
      </View>







       </LinearGradient>

     <View style={{justifyContent:"space-around",
     height:400}}>
      <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.firstOption}
      onPress={()=>this.props.navigation.navigate("ui",{heart:"heart",user:this.state.user})}>
        <Image
        style={styles.img}
          source={require('../../assets/images/heartbeat.png')}
        />
        <Text style={styles.firstOptionText}>Heart Rate</Text>

        </TouchableOpacity>
        
        <TouchableOpacity 
        onPress={()=> this.props.navigation.navigate("ui",{heart:"oxygen",user:this.state.user})}
        style={styles.firstOption}>
        <Image
        style={styles.img}
          source={require('../../assets/images/oxygen-mask.png')}
        />
        <Text style={styles.firstOptionText}>Oxygen Level</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
        
        <TouchableOpacity 
        onPress={()=>this.props.navigation.navigate('ui',{heart:"calories",user:this.state.user})}
        style={styles.firstOption}>
        <Image
        style={styles.img}
          source={require('../../assets/images/calories.png')}
        />
        <Text style={styles.firstOptionText}>calories Burn</Text>

        </TouchableOpacity>

<TouchableOpacity
onPress={() =>this.props.navigation.navigate("ui",{heart:"speed",user:this.state.user})}
style={styles.firstOption}>
        <Image
        style={styles.img}
          source={require('../../assets/images/notification.png')}
        />
        <Text style={styles.firstOptionText}>Speed</Text>

        </TouchableOpacity>
</View>

      
     </View>
   
     
   
     
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainContainer:{
    
    alignItems:"center",
     justifyContent:"space-around",
    flexDirection:"row",
    flexWrap:"wrap"
    
 
  },
  firstOption:{
   
   justifyContent:"center",
  alignItems:"center",
   backgroundColor:"white",
   shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.39,
shadowRadius: 8.30,

elevation: 13,
    
    
    position:"relative",
    width:160,
    height:170,
    borderColor:"white",
    borderWidth:1,
    marginBottom:5,

    
  },
  firstOptionText:{
    position:"absolute",
    
    fontWeight:"bold",
    top:120,
   
    color:"black",
    textAlign:"center",
    width:168,
   fontSize:16,

  },
  img:{
    width:70,
    height:70,
     },
     nav:{
       height:180,
       padding:5,
       backgroundColor:"darkblue"
      
       
     },
     user:{
      width: 45, height: 50,borderBottomLeftRadius:50,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:50
     }

});