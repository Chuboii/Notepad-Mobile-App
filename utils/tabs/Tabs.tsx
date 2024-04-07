import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notes from '../../screens/notes/Notes';
import Tasks from '../../screens/tasks/Tasks';
import { NavigationContainer } from '@react-navigation/native';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../../screens/notes/Notes.style';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
            <Tab.Navigator
                screenOptions={{
                headerShown: false
            }}
            >
                
                <Tab.Screen
                     options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                              <AntDesign name="home" color={color} size={size} />
                        )
                          }}
                    name="home"
                    component={Notes}
                />
                <Tab.Screen
                    
                    options={{
                        tabBarLabel: 'Profiles',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="checksquare" size={size} color={color} />
                        )
                    }}
                    name="tasks"
                    component={Tasks}
                />
            </Tab.Navigator>
  );
}