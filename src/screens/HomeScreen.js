import React from 'react';
import {Text, StyleSheet, Button, View, Image} from 'react-native';
import TouchButton from '../components/button.js'

const HomeScreen = (props)=>{
    console.log(props);
       return(
        <View style={styles.container}>
        <Image style={styles.logoStyle} source ={require("./../../assets/iutpic.png")} />
        <Text style={styles.text1Style}>Department of CSE</Text>
        <Text style={styles.text2Style}>Programme: SWE</Text>
        <TouchButton text = "My Profile" onPress={
             function(){
               
                props.navigation.navigate("Profile");
              }
        }>
            
        </TouchButton>
        
       <Button title= "Semester Wise Course List"
        onPress={
           function(){
               //console.log("button pressed");
               props.navigation.navigate("Semesters");
             }
          }
          color = "#53868B"
       />
       <Text></Text>
       <Button title= "List of Faculty Members"
        onPress={
           function(){
               //console.log("button pressed");
               props.navigation.navigate("Facultylist");
             }
          }
          color = "#53868B"
       />
       </View>
       );
}

const styles = StyleSheet.create(
    {   
        container:{
            backgroundColor:'#F3FAF1',
            height: 800,
            padding: 10,
            paddingEnd: 10,
            
        },
        text1Style:{
            paddingTop: 20,
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
            textAlign: "center",
        },
        text2Style:{
            paddingTop: 10,
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            textAlign: "center",
        },
        logoStyle:{
            height: 300,
            width: 200,
            alignSelf: "center",
             
        },
        

    }
);

export default HomeScreen;