import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {DrawerActions} from '@react-navigation/native';

import Splash from './Screens/Splash';
import Home from './Screens/Home';
import Solution from './Screens/Solution';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Know from './Screens/Know';
import Icon2 from 'react-native-vector-icons/Octicons';
import Gallery from './Screens/Gallery';
import Names from './Screens/Names';
import Dua from './Screens/Dua';
import Search from './Screens/Search';
import Health from './Screens/Health';
import Remedy from './Screens/Remedy';
import SolutionC from './Components/SolutionC';
import MasnonDua from './Screens/MasnonDua';
import Cure from './Screens/Cure';

// import tw from 'tailwind-react-native-classnames';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();
function DrawerContent() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Drawer Content</Text>
    </SafeAreaView>
  );
}

const CustomHeader = ({navigation}) => {
  return (
    <View
      style={[
        tw`flex-row items-center`,
        { backgroundColor: '#163020'}, // Directly use the HEX color here for dark green
        {
          justifyContent: 'space-between',
          paddingVertical: 16,  // Increased padding for vertical size
          height: 80,  // Set a custom height for the header
        },
      ]}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={[tw`text-lg`, {marginLeft:7}]}>
          <Icon name="bars" size={24} color="white" />
        </Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
      <Text style={[tw`text-white`, {fontSize: 21, marginRight:8}]}>
          KHADIM ASH SHAFEE
        </Text>
        <Text style={[tw`text-white`, {fontSize: 13, marginRight: 8}]}>
          FOR THE MORALS
        </Text>
      </View>
      <View style={{width: 24}}>
        <Text>{/* Placeholder for the icon spacing */}</Text>
      </View>
    </View>
  );
};
// function Drawerfun()
// {
//   return(
//     <NavigationContainer>
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Solution" component={Solution} />
//     </Drawer.Navigator>
//   </NavigationContainer>
//   )

// }

function LoogBookTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#163020', // Set the color for the active (selected) tab
        tabBarStyle: { display: 'flex' }, // Maintain the current tabBar style
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
          header: props => <CustomHeader {...props} />,
        }}
      />

      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({color, size}) => (
            <Icon2 name="image" size={size} color={color} />
          ),
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: 'white',
          headerTitle: 'Art Gallery',
          headerTitleStyle: {
            fontSize: 21, // Set the font size to 21
          }
        }}
      />

      <Tab.Screen
        name="Chat Bot"
        component={Know}
        options={{
          tabBarLabel: 'Chat Bot',
          tabBarIcon: ({color, size}) => (
            <Icon name="questioncircleo" size={size} color={color} />
          ),
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 21, // Set the font size to 21
          }
        }}
      />
    </Tab.Navigator>
  );
}


/*
function LoogBookTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'black', // Set the color for the active (selected) tab
      }}>


<Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
          header: props => <CustomHeader {...props} />,
        }}
      />

      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          tabBarLabel: 'Gallery',

          tabBarIcon: ({color, size}) => (
            <Icon2 name="image" size={size} color={color} />
          ),
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: 'white',
          headerTitle:'Art Gallery',
        }}
      />

      <Tab.Screen
        name="Chat Bot"
        component={Know}
        options={{
          tabBarLabel: 'Chat Bot',
          
          tabBarIcon: ({color, size}) => (
            <Icon name="questioncircleo" size={size} color={color} />
          ),
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: 'white'
        }}
      />
    </Tab.Navigator>
  );
} */


function AppDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ drawerPosition: 'left', headerShown: false }}>
      <Drawer.Screen name="HomeDrawer" component={LoogBookTabNavigator}
        options={{
            onPress:() => navigation.navigate('Home'),
            headerTitleAlign: 'center',
            headerShown: false,
          }}
      />
      {/* <Drawer.Screen name="Cure" component={Cure} 
        options={{
            onPress:() => navigation.navigate('Cure', { searchQuery: 'yourSearchQuery' }),
            headerTitle: 'Cure',
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerTintColor: 'white',
            headerShown:CustomHeader,
          }}
      /> */}
      {/* <Drawer.Screen name="Solution" component={Solution} 
        options={{
            onPress:() => navigation.navigate('Solution'),
            headerTitle: 'Cure',
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerTintColor: 'white',
            headerShown:CustomHeader,

          }}
      /> */}
       <Drawer.Screen  name="Names" component={Names} 
        options={{
            onPress:() => navigation.navigate('Names'),
            headerTitle: '99 Names of Allah',
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerTintColor: 'white',
            headerShown:CustomHeader,
            headerTitleStyle: {
              fontSize: 21, // Set the font size to 21
            }
          }}
      /> 
       <Drawer.Screen name="Duas" component={Dua} 
        options={{
            onPress:() => navigation.navigate('Duas'),
            headerTitle: 'Masnoon Dua',
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerTintColor: 'white',
            headerShown:CustomHeader,
            headerTitleStyle: {
              fontSize: 21, // Set the font size to 21
            }
          }}
      /> 
      {/* <Drawer.Screen name="Search" component={Search} 
        options={{
            onPress:() => navigation.navigate('Search'),
            headerTitle: 'Search',
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerTintColor: 'white',
          }}
      /> */}
      <Drawer.Screen name="Health" component={Health} 
        options={{
            onPress:() => navigation.navigate('Health'),
            headerTitle: 'Health Tips & Articles',
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerTintColor: 'white',
            headerShown:CustomHeader,
            headerTitleStyle: {
              fontSize: 21, // Set the font size to 21
            }
          }}
      />
      <Drawer.Screen name="Remedy" component={Remedy} 
        options={{
            onPress:() => navigation.navigate('Remedy'),
            headerTitle: 'Diseases & Remedy',
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerTintColor: 'white',
            headerShown:CustomHeader,
            headerTitleStyle: {
              fontSize: 21, // Set the font size to 21
            }
          }}
      />
      {/* <Drawer.Screen name="MasnonDua" component={MasnonDua} 
        options={{
            onPress:() => navigation.navigate('MasnonDua'),
            headerTitle: 'Masnon Dua',
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerTintColor: 'white',
            headerShown:CustomHeader,
          }}
      /> */}
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={AppDrawer} />
        <Stack.Screen name="Solution" component={Solution} />
        <Stack.Screen name="Cure" component={Cure} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="MasnonDua" component={MasnonDua} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


/* function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Home" component={AppDrawer} />
    <Stack.Screen name="Solution" component={Solution} />
        <Stack.Screen name="Cure" component={Cure} />
        <Stack.Screen  name="Search" component={Search}/>
        <Stack.Screen name="MasnonDua" component={MasnonDua}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/
export default App;                                                                                                                             
                                                                                                                                        