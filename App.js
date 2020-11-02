import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import AppHeader from './components/AppHeader';
import OverviewScreen from './screens/OverviewScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
     
        <AppContainer/>
        
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
 OverviewScreen:OverviewScreen
})

const AppContainer = createAppContainer(AppNavigator)


