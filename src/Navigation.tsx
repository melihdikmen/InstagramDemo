import { Text, View } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./pages/login/LoginView";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTE_NAMES } from "./constants";
import HomeView from "./pages/home/HomeView";
import Search from "./pages/search/SearchView";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName={ROUTE_NAMES.LOGIN_PAGE}  screenOptions={() => ({
                headerShown: false,
            })} >
                <Stack.Screen name={ROUTE_NAMES.LOGIN_PAGE} component={LoginPage} />
                <Stack.Screen   name={ROUTE_NAMES.TAB_NAVIGATOR} component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );


}

const TabNavigator = () => {

    return (
        <Tab.Navigator  screenOptions={{  headerShown: false, tabBarStyle :{display :"none"}} } >
            <Tab.Screen name={ROUTE_NAMES.HOME_PAGE} component={HomeView} />
            <Tab.Screen name={ROUTE_NAMES.SEARCH_PAGE} component={Search} />
        </Tab.Navigator>
    )
}




export default Navigation