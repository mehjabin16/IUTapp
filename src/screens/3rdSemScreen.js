import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ThirdSemCourses = ()=>{
    const faculty =[
        { name: '1. CSE 4303', key:'1' },
        { name: '2. CSE 4305', key:'2' },
        { name: '3. CSE 4307 ', key:'3' },
        { name: '4. MATH 4341', key:'4' },
        { name: '5. SWE 4301', key:'5' },
        { name: '6. HUM 4309', key:'6' },
        
    ];


       return(
       <View>
           <Text style={styles.header}>Third Semester</Text>
           <ScrollView>
           {
           faculty.map((item)=> {
             return(      
            <View key={item.key}>
            <Text style={styles.textStyle}>{item.name}</Text>
            </View>
             )
        } )}
        </ScrollView>
       </View>
       );
}

const styles = StyleSheet.create(
    {   
        header:{
            backgroundColor: '#53868B',
            padding: 16,
            color: 'white',
            fontSize: 30,
            textAlign:'center',
            fontWeight:'bold',
            
        },
        textStyle:{
            marginTop: 24,
            padding: 20,
            fontSize: 20,
            backgroundColor: '#E0EEEE'
       
        },

    }
);

export default ThirdSemCourses;