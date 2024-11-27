import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{Home, Account, Yoga} from './screens';
import { NavigationContainer } from "@react-navigation/native";
import Icons from "./components/icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";



const Tab = createBottomTabNavigator();

export default function App(){
  return(
      <GestureHandlerRootView>
         <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle:{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 60,
          backgroundColor: '#ECDFCC'
        },
      }} >
          <Tab.Screen 
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <Icons name="home" focused={focused}/>
              ),
            }}
            
            />
          <Tab.Screen name="Yoga" component={Yoga}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icons name="yoga" focused={focused}/>
            ),
          }}/>
          <Tab.Screen name="Account" component={Account}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icons name="account" focused={focused}/>
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
      </GestureHandlerRootView>
   
     
   
    
  );
}

