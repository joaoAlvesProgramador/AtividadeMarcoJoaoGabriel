import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        activeColor="#0CE9C1"
        barStyle={{backgroundColor:"black"}}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
              tabBarLabel:"Home",
              tabBarIcon:({color})=>(
                <MaterialCommunityIcons name="home-roof" color={color} size={26}/>
              )
          }}
          />

        <Tab.Screen 
        name="About" 
        component={AboutScreen} 
        options={{
          tabBarLabel:"About",
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name="information-variant" color={color} size={26}/>
          )
        }}
        />

        <Tab.Screen 
        name="Contact" 
        component={ContactScreen}
        options={{
          tabBarLabel:"Contact",
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name="account-box-outline" color={color} size={26}/>
          )
        }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
