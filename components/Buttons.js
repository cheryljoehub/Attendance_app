import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native';
import db from '../config'


export default class Buttons extends React.Component{


   markPresent(name){
     
var date = new Date()
var dd=date.getDate()
var mm = date.getMonth()+1
var yyyy=date.getFullYear()
var fulldate=dd+'/'+mm+'/'+yyyy
console.log(fulldate)
var nameRef=db.ref(name)
nameRef.update({
  Attendance:'Present on '+ fulldate
})
   }
  
   markAbsent(name){
     var date = new Date()
var dd=date.getDate()
var mm = date.getMonth()+1
var yyyy=date.getFullYear()
var fulldate=dd+'/'+mm+'/'+yyyy
var nameRef=db.ref(name)
nameRef.update({
  Attendance:'Absent on '+ fulldate
})
   }
  render(){
    return(
<View>
      <TouchableOpacity style={styles.greenbutton} onPress={()=>{
        this.markPresent(this.props.name)
      }} >
      <Text style={styles.displayText}>
  Present
      </Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.redbutton} onPress={()=>{
        this.markAbsent(this.props.name)}}>
      <Text style={styles.displayText}>
  Absent
      </Text>
      </TouchableOpacity>

 </View>

 
     
    )
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  greenbutton:{
    width: '30%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    flexDirection:'row',
    backgroundColor: 'green'
  },
   redbutton:{
    width: '30%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    flexDirection:'row',
    backgroundColor: 'red'
  }
});