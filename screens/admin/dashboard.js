import React, { Component } from 'react';  
import { TextInput,View, Text,StyleSheet,Image,TouchableOpacity,ImageBackground } from 'react-native';


import { CoverageMap } from 'istanbul-lib-coverage';

export default class adminDashboard extends Component {  
  static navigationOptions =
  {
    header:null,
  };

  constructor(props) {

    super(props);

    this.state = {

  
   //user:this.props.navigation.state.params.user,
    }

  }

  

  render() {
    return (
      
      
        
      <View>
          <View  style={styles.nav}>

         
       
      <View style={{justifyContent:"center"}}>

<View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:40,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
       
       
      }}>
        <Text style={{color:"black",fontSize:19,}}>Hello admin </Text>
        <Image source={require('../../assets/images/robot-prod.png')} style={styles.user}>
 
  </Image>
      </View>
     
      </View>

       </View>
    

     <View style={{justifyContent:"space-around",height:475,  backgroundColor:"red"
    }}>
      <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.firstOption}
      onPress={()=>this.props.navigation.navigate("userRegisteration")}>
        <Image
        style={styles.img}
          source={require('../../assets/images/heartbeat.png')}
        />
        <Text style={styles.firstOptionText}>Register user</Text>

        </TouchableOpacity>
      
        </View>
        <View style={styles.mainContainer}>
        
  

<TouchableOpacity
onPress={() =>this.props.navigation.navigate("showAllUser")}
style={styles.firstOption}>
        <Image
        style={styles.img}
          source={require('../../assets/images/notification.png')}
        />
        <Text style={styles.firstOptionText}>Find User</Text>

        </TouchableOpacity>
</View>

        
    
     </View>
     
    
     <View
       
        style={{backgroundColor:"white",height:45,width:360,alignItems:"center",justifyContent:"center",borderColor:"F5182C",borderWidth:2}}>

       <TouchableOpacity
        onPress={() =>this.props.navigation.navigate("Main")}>
       <Image
        style={{width:25,height:25}}
          source={require('../../assets/images/home1.png')}
        />
       
       </TouchableOpacity>
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
    flexWrap:"wrap",
  
    
 
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
       height:100,
       padding:5,
       backgroundColor:"white",
       
       borderColor:"black",
       marginTop:20,
       borderBottomWidth:2,
       marginBottom:3
       
     },
     user:{
      width: 45, height: 50,borderBottomLeftRadius:50,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:50
     }

});