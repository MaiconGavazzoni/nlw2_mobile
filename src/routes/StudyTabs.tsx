import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'


import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const Tab = createBottomTabNavigator();

function StudyTabs(){
    return (
        <Tab.Navigator
         tabBarOptions={{
             style:{
                 elevation: 0,
                 shadowOpacity: 0,
                 height: 64,
             },
             tabStyle :{
                 flexDirection: 'row',
                 alignItems: 'center',
                 justifyContent: 'center',
             },

             iconStyle: {
                flex:0,
                width:20,
                height:20,
             },

             labelStyle:{
                 fontFamily:'Archivo_700Bold',
                 fontSize:13,
                 marginLeft: 16,
             },

             inactiveBackgroundColor: '#fafafc',
             activeBackgroundColor: '#ebebf5',
             inactiveTintColor: '#c1bccc',
             activeTintColor: '#32264d',
         }}
        >
            <Tab.Screen 
            name="TeacherList" 
            component={TeacherList}
            options={{
                tabBarLabel:'Proffys',
                tabBarIcon: ({color, size, focused }) => {
                    return(
                        <Ionicons name='ios-easel' size={size} color={ focused ? '#8257e5' : color } />
                    );
                }
            }}
            
            />
            <Tab.Screen 
            name="Favorites" 
            component={Favorites}
            options={{
                tabBarLabel:'Favoritos',
                tabBarIcon: ({color, size, focused}) => {
                    return(
                        <Ionicons name='ios-heart' size={size} color={ focused ? '#8257e5' : color } />
                    );
                }
            }}
            
            />
        </Tab.Navigator>
    );

}

export default StudyTabs;