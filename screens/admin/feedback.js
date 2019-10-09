import React, { Component } from 'react';
 
import { Platform, StyleSheet, View, TextInput ,Text,TouchableOpacity,Alert} from 'react-native';
 
export default class adminFeedback extends Component{

    constructor(props){
        super(props);
        this.state={
            name:this.props.navigation.state.params.name,
          
            response:"",
        }
    }

    InsertDataToServer = () =>{
        
        fetch('https://corrugate-knives.000webhostapp.com/feedback.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
         
            name:this.state.name,
            response:this.state.response,
         
          })
         
        }).then((response) => response.json())
           .then((responseJson) => {
                 
        // Showing response message coming from server after inserting records.
                Alert.alert(responseJson);
                this.setState({ loading: false, disabled: false });
                this.props.navigation.navigate("adminDashboard");
         
              }).catch((error) => {
                console.error(error);
              });
         
         
          }
 
 
  render() {
 
    return (
    
        <View style={{flex:2,padding:30}}>
<View style={{backgroundColor:"white",height:60,padding:20,marginBottom:50}}>
                         <Text style={{paddingTop:40,color:"black"
                ,fontSize:22,textAlign:"center"}}> Feedback </Text>
              
                           </View> 

         <TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder={"Type Something in Text Area."}
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={10}
            multiline={true}
            onChangeText={(text) =>this.setState({response:text})}
          />

<TouchableOpacity style={{  backgroundColor: '#F5182C',
      paddingVertical: 15,
      borderRadius:15,
      height:55,marginTop:10}}onPress={this.InsertDataToServer}>
    <Text style={{textAlign:"center",fontSize:22,color:"white"}}> Enter </Text>
</TouchableOpacity>

<TouchableOpacity style={{  backgroundColor: '#F5182C',
      paddingVertical: 15,
      borderRadius:15,
      height:55,marginTop:10}}  onPress={() => this.props.navigation.navigate("adminDashboard")}>
    <Text style={{textAlign:"center",fontSize:22,color:"white"}}> Home </Text>
</TouchableOpacity>



        </View>
              
    );
  }
}
    
const styles = StyleSheet.create({
    
 
  TextInputStyleClass:{

    textAlign: 'center',
    height: 50,
    shadowColor: "#000",
    backgroundColor:"e4e4e4",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  
  elevation: 5,
  flexDirection:"row",
 
    backgroundColor : "#FFFFFF",
    height: 150
     
    }
 
});