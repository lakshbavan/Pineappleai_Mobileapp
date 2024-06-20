import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
//import Home from "../screens/Home";
//import {AuthProvider} from "../context/authContext";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
   <NavigationContainer independent={true} >
    
      <stack.Navigator  initialRouteName="Login">
        <stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        
      </stack.Navigator>
    
   </NavigationContainer>
  );
}




