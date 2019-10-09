import React, { Component } from 'react';  
import {Image, StyleSheet, Button,ActivityIndicator, FlatList,CheckBox,Text, View, Alert,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default class ShowResult extends Component {
  static navigationOptions =
  {
    header:null,
  };
  constructor(props) {

    super(props);

    this.state = {

      isLoading: true,
      heart:this.props.navigation.state.params.heart,
      user:this.props.navigation.state.params.user,
      parameter:""
    }

  }
  

GetItem (distance_covered) {
   
  Alert.alert(distance_covered);
 
}
 
componentDidMount(){

  return fetch('https://corrugate-knives.000webhostapp.com/get_userDate.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
      email: this.state.user,
   
     
    })
   
  })
  .then((response) => response.json())
  .then((responseJson) => {
   
    this.setState({
      isLoading: false,
      dataSource: responseJson
    }, function() {
      // In this block you can do something with new state.
    });
  })
  .catch((error) => {
    console.error(error);
  });


}
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "100%",
          
        
        }}
      />
    );
  }

  Item({ distance_covered}) {
       return <Text>{distance_covered}</Text>;
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }


    if(this.state.heart == "heart")
    {
     
      this.state.parameter = 
        <FlatList
       
      data={ this.state.dataSource }
      
      ItemSeparatorComponent = {this.ListViewItemSeparator}

      renderItem={({item}) => 
     
       
<View  style={item.heart_rate >100? styles.rowViewContainer1:styles.rowViewContainer}    > 
      
      <Text style={{color:"blue",width:95,textAlign:"center",}}> Date {item.date}</Text>  
      <Text style={{color:"blue",width:85,textAlign:"center"}}> Time {item.start_time} {item.finish_time}</Text>  
           
      <Text style={{color:"blue"}}>  Heart Rate   {item.heart_rate}  </Text>
       </View>
      
      
          
        }
        
     
   

      keyExtractor={(item, index) => index.toString()}
      
     />
      
    }
    else if(this.state.heart == "calories")
    {
      this.state.parameter =<FlatList
       
      data={ this.state.dataSource }
      
      ItemSeparatorComponent = {this.ListViewItemSeparator}

      renderItem={({item}) =>
      <View style={styles.rowViewContainer}>
      <Text style={{color:"blue"}}>  Calories Burned {item.calories_burned}  </Text>
      <Text style={{color:"blue",width:95,textAlign:"center",}}> Date {item.date}</Text>  
      <Text style={{color:"blue",width:85,textAlign:"center"}}> Time {item.start_time} {item.finish_time}</Text>  
      
      </View>
       
      
               
      
      }

      keyExtractor={(item, index) => index.toString()}
      
     />
    }
    else if(this.state.heart == "speed")
    {
      this.state.parameter =<FlatList
       
      data={ this.state.dataSource }
      
      ItemSeparatorComponent = {this.ListViewItemSeparator}

      renderItem={({item}) => 
      <View style={styles.rowViewContainer}>
       <Text style={{color:"blue",width:95,textAlign:"center",}}> Date {item.date}</Text>  
      <Text style={{color:"blue",width:85,textAlign:"center"}}> Time {item.start_time} {item.finish_time}</Text>  
     
       <Text style={{color:"blue"}}>  Speed  {item.speed}  </Text>
      
      </View>
      
               
     
      }

      keyExtractor={(item, index) => index.toString()}
      
     />
    }

    else if(this.state.heart == "oxygen")
    {

      this.state.parameter =<FlatList
       
      data={ this.state.dataSource }
      
      ItemSeparatorComponent = {this.ListViewItemSeparator}

      renderItem={({item}) => 
      
      <View  style={item.oxygen_saturation < 96 || item.oxygen_saturation >100 ? styles.rowViewContainer1:styles.rowViewContainer}    > 
      
      <Text style={{color:"blue",width:95,textAlign:"center",}}> Date {item.date}</Text>  
      <Text style={{color:"blue",width:85,textAlign:"center"}}> Time {item.start_time} {item.finish_time}</Text>  
           
      <Text style={{color:"blue"}}>  Oxygen Level  {item.oxygen_saturation}  </Text>
       </View>
      
      
      
     }

      keyExtractor={(item, index) => index.toString()}
      
     />
    }
 
    return (
 
      

      <View style={{justifyContent:"space-between",flex:1}}>
 
      <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#00FFFF', 'blue']} style={styles.nav}>

<View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:20,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
       
       
      }}>
        <Text style={{color:"white",fontSize:16,}}>Hello{this.state.user}</Text>
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
       
      </Text>

    </View>
    
   

 <Image source={require('../../assets/images/n.png')} 
 style={styles.img} >
 </Image>
    </View>
      
      
      
      
    </LinearGradient>

      
  
       
 

 {this.state.parameter}




 

 
        
   
 <TouchableOpacity  onPress={() =>this.props.navigation.navigate("dashboard",{user:this.state.user})} >
<LinearGradient  start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#00FFFF', 'blue']} style={{width:360,height:60,justifyContent:"center",alignItems:"center"}}>
<Text style={{textAlign:"center",color:"white",fontSize:17}}> Home </Text>
  
</LinearGradient>
 
  </TouchableOpacity>
        
 
      </View>
  


);
}


}
 

const styles = StyleSheet.create({
 
  MainContainer :{
  justifyContent: 'center',
  flex:1,
 
   backgroundColor:"#F0F8FF",
   padding:15,
  },
   
  rowViewContainer: {
    fontSize: 14,
    height:95,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
   backgroundColor:"white",
 
  marginBottom:20,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  
  elevation: 5,
  flexDirection:"row"
  },

  rowViewContainer1: {
    fontSize: 14,
    height:95,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor:"red",
 
  marginBottom:20,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  
  elevation: 5,
  flexDirection:"row"
  },
  



  
  nav:{
    height:180,
    padding:5,
   
    
  },
  img:{
    width:70,
    height:70,
     },
     user:{
      width: 45, height: 50,borderBottomLeftRadius:50,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:50
     }

  
  });

