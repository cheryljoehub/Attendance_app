import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import db from '../config'
export default class OverviewScreen extends React.Component {
  constructor(){
    super()
    this.state={
      students:[],
      
    }
  }

getPresentStudents=()=>{
var students=db.ref('/')
this.setState({students:students})
}
render(){

  return(
    <View>

     <Text>{}</Text>
    </View>
   
  )
}

}