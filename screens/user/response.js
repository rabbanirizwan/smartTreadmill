import React , {Component} from 'react';
import {View,Text,FlatList,ActivityIndicator,StyleSheet,TouchableOpacity,Image,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class ShowUserResponse extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            data:this.props.navigation.state.params.name,
            isLoading:true,
        }

    }
    componentDidMount(){

        return fetch('https://corrugate-knives.000webhostapp.com/getUserResoponse.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
         
            name: this.state.data,
         
           
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
              height: 25,
              width: "100%",
              backgroundColor:"white"
              
            
            }}
          />
        );
      }
    
    render(){

      
            if(this.state.isLoading)
            {
                return (
                    <View style={{flex: 1, paddingTop: 220}}>
                      <ActivityIndicator style={{color:"red",fontSize:22}} />
                    </View>
                  );
            }
            else{
                return(
                    <View style={{flex:1}}>

                         <LinearGradient style={{height:140,padding:20}}  start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#00FFFF', 'blue']}>
                         <Text style={{paddingTop:40,color:"white"
                ,fontSize:18,textAlign:"center"}}> {this.state.data} Performance   </Text>
              
                           </LinearGradient> 
               
             
                
         
                        <FlatList
                
                data={ this.state.dataSource}
                
                ItemSeparatorComponent = {this.ListViewItemSeparator}
          
                renderItem={({item}) => <View style={styles.rowViewContainer}  > 
                
           
                {/* <Text style={{color:"black",fontSize:22,flex:1,textAlign:"center"}}>  date {item.date} </Text> */}
              <Text style={{color:"black",fontSize:22,flex:1,textAlign:"center"}}>  {item.response}</Text>  
                
                
                
                 </View>
                
              }
          
                keyExtractor={(item,index) => index.toString()}
                
               /> 


                <LinearGradient
         start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#00FFFF', 'blue']}
       style={{height:60,width:360,alignItems:"center",justifyContent:"center"}}>

      <TouchableOpacity
       onPress={() =>this.props.navigation.navigate("dashboard",{user:this.state.data})}>
      <Image
       style={{width:50,height:50}}
         source={require('../../assets/images/home3.png')}
       />
      
      </TouchableOpacity>
       </LinearGradient>  
 
                     </View>
                 );

            }
       
    }
}

const styles =StyleSheet.create({
    rowViewContainer: {
        fontSize: 14,
        height:100,
      
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