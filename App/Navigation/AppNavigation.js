import {StackNavigator} from 'react-navigation'
import LayoutScreen from '../Containers/Layout/Layout.Screen'
import MainScreen from '../Containers/Main/Main.Screen'
import ProfileScreen from '../Containers/Profile/Profile.Screen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LayoutScreen: {screen: LayoutScreen},
  MainScreen: {screen: MainScreen},
  ProfileScreen: {screen: ProfileScreen}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
});

export default PrimaryNav
