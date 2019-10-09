import React , {Component} from 'react';
import {View,Text,FlatList,ActivityIndicator,StyleSheet,TouchableOpacity,Image} from 'react-native';

export default class ShowUserData extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            data:this.props.navigation.state.params.name,
            isLoading:true,
        }

    }
    componentDidMount(){

        return fetch('https://corrugate-knives.000webhostapp.com/get_userDate.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
         
            email: this.state.data,
         
           
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
                         <View style={{backgroundColor:"#F5182C",height:140,padding:20}}>
                         <Text style={{paddingTop:40,color:"white"
                ,fontSize:18,textAlign:"center"}}> {this.state.data} Performance   </Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("adminfeedback",{name:this.state.data})}>
                  
                   <Image source={require('../../assets/images/document.png')} 
 style={{ width:40,height:40,}} />
 </TouchableOpacity>
                           </View> 
               
             
                
         
                        <FlatList
                
                data={ this.state.dataSource}
                
                ItemSeparatorComponent = {this.ListViewItemSeparator}
          
                renderItem={({item}) => <View style={styles.rowViewContainer}  > 
                
              <TouchableOpacity style={{backgroundColor:"#e4e4e4",alignItems:"center",flex:1,alignItems:"center"}}
              
              onPress={() =>this.props.navigation.navigate("showUser",{name:item.name})}>
                <Text style={{color:"black",fontSize:22,flex:1,textAlign:"center"}}>  date {item.date} </Text>
              <Text style={{color:"black",fontSize:22,flex:1,textAlign:"center"}}> Heart Rate {item.heart_rate}</Text>  
              <Text style={{color:"black",fontSize:22,flex:1,textAlign:"center"}}>  Total Running  {item.distance_covered} </Text>  
             
               <Text style={{color:"black",fontSize:22,flex:1,textAlign:"center"}}> Calories burned {item.calories_burned }</Text>
                
                
                  </TouchableOpacity> 
                 </View>
                
              }
          
                keyExtractor={(item,index) => index.toString()}
                
               /> 


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
       
    }
}

const styles =StyleSheet.create({
    rowViewContainer: {
        fontSize: 14,
        height:160,
      
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