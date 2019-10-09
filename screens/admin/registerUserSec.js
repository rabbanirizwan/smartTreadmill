import React ,{Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,Image,StyleSheet,ImageBackground,Alert,ActivityIndicator} from 'react-native';


export default class userRegisterationSec extends Component{
   
    constructor(props){
        super(props);
        this.state={
            height:'',
            weight:'',
            gender:'',
            age:'',
            name:this.props.navigation.state.params.name,
            address:this.props.navigation.state.params.address,
            password:this.props.navigation.state.params.password,
           cnic:this.props.navigation.state.params.cnic,
            
        }
    }
    InsertDataToServer = () =>{
        
       fetch('https://corrugate-knives.000webhostapp.com/UserRegister.php', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
        
           name:this.state.name,
           password:this.state.password,
           cnic:this.state.cnic,
            address:this.state.address,
           height:this.state.height,
           weight:this.state.weight,
      age:this.state.age,
            gender:this.state.gender,

        
        
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
    render(){
        return(
           
        <View style={{paddingTop:10,justifyContent:"space-between",flex:1}}>
       

      
     
       <Text style={{backgroundColor:"#F5182C",borderBottomColor:"white",borderBottomWidth:2,height:80,padding:20,color:"white"
       ,fontSize:18,textAlign:"center"}}>User Registeration {this.state.age}</Text>
       <View style={styles.container}>
       
       <View style={styles.SectionStyle}>

      
       <Image source={require('../../assets/images/heartbeat.png')} style={styles.ImageStyle} />

        <TextInput style = {styles.input}   
              onChangeText={(text) => this.setState({height:text})}
              placeholder=' Enter user height' 
              placeholderTextColor='black' 
              secureTextEntry/>
       </View>

     </View>
     <View style={styles.container}>
       
       <View style={styles.SectionStyle}>

      
       <Image source={require('../../assets/images/heartbeat.png')} style={styles.ImageStyle} />

        <TextInput style = {styles.input}   
             onChangeText={(text) => this.setState({weight:text})}
             placeholder='Enter user weight' 
              placeholderTextColor='black' 
              secureTextEntry/>
       </View>

     </View>

   <View style={styles.container}>
       
       <View style={styles.SectionStyle}>

      
       <Image source={require('../../assets/images/heartbeat.png')} style={styles.ImageStyle} />

        <TextInput style = {styles.input}   
              onChangeText={(text) => this.setState({age:text})}
              placeholder='Enter user age' 
              placeholderTextColor='black' 
              secureTextEntry/>
       </View>

     </View>

       <View style={styles.container}>
       
       <View style={styles.SectionStyle}>

      
       <Image source={require('../../assets/images/heartbeat.png')} style={styles.ImageStyle} />
      

    

         <TextInput style = {styles.input}   
            onChangeText={(text) => this.setState({gender:text})}
            placeholder='Enter user gender' 
              placeholderTextColor='black' 
              /> 
      
      
      
       </View>

     </View>

 
     

<View style={styles.container}>
<TouchableOpacity style={styles.buttonContainer} 
                  onPress={this.InsertDataToServer}

    
                   >
             <Text  style={styles.buttonText}>Submit</Text>
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
const styles = StyleSheet.create({
    input:{
        height: 40,
        backgroundColor: '#e4e4e4',
       
        padding: 10,
        color: 'black',
       fontSize:18,
      
       borderRadius:5,
       width:250
       
    },
    
container: {
 
    justifyContent: 'center',
    alignItems: 'center',
  
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
  buttonContainer:{
    backgroundColor: '#F5182C',
    paddingVertical: 15,
    borderRadius:15,
    height:55,
    width:200,
   
    
},
buttonText:{
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize:18,
    
},    
  });