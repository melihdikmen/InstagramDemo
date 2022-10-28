import { StackActions, useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from "react-native"
import { useMMKVObject } from 'react-native-mmkv';
import User from '../../models/User';
import { ROUTE_NAMES } from "../../constants"

const LoginViewModel = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [user, setUser] = useMMKVObject<User>("user")
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigation = useNavigation();

  const Login = ()=> {
    if(username && password && username !== "" && password!=""){
      var user : User  = {
        username: username,
        password :password
      }
      setUser(user)
      navigation.dispatch(StackActions.replace(ROUTE_NAMES.TAB_NAVIGATOR))    }
    else {
      Alert.alert("Error","Username and password is required.")
    }
  }

  return {isShowing, setIsShowing,username,setUsername,password,setPassword,Login}
};

export default LoginViewModel;
