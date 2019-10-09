import React , {Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,FlatList,ActivityIndicator,Aler,Image} from 'react-native';

export default class ShowAllUserData extends Component{
    constructor(props){
        super(props);
        this.state={
            user:[],
            isLoading: true,
        }
    }

    componentDidMount()
    {
        fetch('https://corrugate-knives.000webhostapp.com/userData.php')
        .then(response =>{
            return response.json();
        })
        .then((users) =>{

            this.setState({user:users,
                isLoading: false,})
        })
    }
    
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 25,
          width: "100%",
          backgroundColor:"white"
          
        
        }}
      />
    );
  }
  

 
    render(){
        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 220}}>
                <ActivityIndicator style={{color:"#F5182C",fontSize:22}} />
              </View>
            );
          }
      
       else{
        return(

            <View style={styles.container}>

              <Text style={{backgroundColor:"#F5182C",borderBottomColor:"white",borderBottomWidth:2,height:120,padding:20,paddingTop:40,color:"white"
       ,fontSize:18,textAlign:"center"}}> CLick On user name to review perfomrance </Text>

<View style={{height:460}}>
<FlatList
       
       data={ this.state.user}
       
       ItemSeparatorComponent = {this.ListViewItemSeparator}
 
       renderItem={({item}) => <View style={styles.rowViewContainer}  > 
       
     <TouchableOpacity style={{backgroundColor:"pink",alignItems:"center",flex:1,alignItems:"center"}}
     
     onPress={() =>this.props.navigation.navigate("showUser",{name:item.name})}>
     <Text style={{color:"black",fontSize:22,flex:1,textAlign:"center"}}>  {item.name}</Text>  
       
         </TouchableOpacity> 
        </View>
       
     }
 
       keyExtractor={(item,index) => index.toString()}
       
      />

</View>
     
       <View
       
       style={{backgroundColor:"#F5182C",height:60,width:360,alignItems:"center",justifyContent:"center"}}>

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

        
    }}

    const styles = StyleSheet.create({
        container:{
            
            
        },
        rowViewContainer: {
            fontSize: 14,
            height:55,
          
          color:"red",
          backgroundColor:"white",
         
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          
          elevation: 5,
          flexDirection:"row",
        
          },
    })