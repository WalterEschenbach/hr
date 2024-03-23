import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavBar from './src/navigation/BottomNavBar'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InboxScreen from './src/screens/InboxScreen';
import PeopleScreen from './src/screens/PeopleScreen';
import FilesScreen from './src/screens/FilesScreen';
import MyInfoScreen from './src/screens/MyInfoScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator 
    tabBar={(props) => <BottomNavBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Inbox" component={InboxScreen} />
        <Tab.Screen name="People" component={PeopleScreen} />
        <Tab.Screen name="Files" component={FilesScreen} />
        <Tab.Screen name="MyInfo" component={MyInfoScreen} />
    </Tab.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
