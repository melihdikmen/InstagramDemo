import {
  KeyboardAvoidingView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ICONS, LOCAL_IMAGES} from '../../constants';
import LoginTextInput from './components/LoginTextInput';
import LoginViewModel from './LoginViewModel';
import styles from './LoginViewStyle';

const LoginView = () => {
  const {isShowing, setIsShowing,setUsername,setPassword,Login} = LoginViewModel();
  return (
    <KeyboardAvoidingView  behavior='padding' style={styles.container}>
      <InstagramLogo />
    <LoginTextInput  onChangeText={(text)=>setUsername(text)} placeholder={'Phone umber,username or email'} />
      <LoginTextInput
      onChangeText={(text)=> setPassword(text)}
        secureTextEntry={!isShowing}
        rightIcon={
          <TouchableOpacity onPress={() => setIsShowing(!isShowing)}>
            <Image
              style={styles.visibleIcon}
              source={!isShowing ? ICONS.HIDE_PASSWORD : ICONS.SHOW_PASSWORD}
            />
          </TouchableOpacity>
        }
        placeholder={'Password'}
      />
      <ForgotPassword />
      <LoginButton login = {Login} />
      <Divider />
      <FacebookLogin />
      <DividerSignUp/>
      <SignUpArea/>
    </KeyboardAvoidingView>
  );
};

const ForgotPassword = () => {
  return (
    <View style={styles.forgotPasswordView}>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const InstagramLogo = () => {
  return (
    <View>
      <Image
        style={styles.instagramLogo}
        source={LOCAL_IMAGES.INSTAGRAM_LOGO}
      />
    </View>
  );
};

interface LoginbuttonProps {
login : ()=> void
}

const LoginButton = (props:LoginbuttonProps) => {
  return (
    <TouchableOpacity  onPress={props.login} style={styles.loginButton}>
      <Text style={{color: 'white'}}>Log In</Text>
    </TouchableOpacity>
  );
};

const Divider = () => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerFirst} />
      <Text style={styles.dividerText}>OR</Text>
      <View style={styles.dividerFirst} />
    </View>
  );
};

const FacebookLogin = () => {
  return (
    <View style={styles.facebookLoginContainer}>
      <Image style={styles.facebookLogo} source={ICONS.FACEBOOK_LOGO} />
     <TouchableOpacity><Text style= {styles.facebookLoginText}>Continue with Facebook</Text></TouchableOpacity>
    </View>
  );
};


const DividerSignUp = () => {
    return (    
       <View style = {styles.dividerSignUp} />
    );
     
}


const SignUpArea = () => {
    return (
        <View style = {styles.signUpArea}>  
            <Text style={styles.dontHaveAccountText}>Dont't have an account?</Text>
            <TouchableOpacity><Text style = {styles.signUpText}>Sign Up</Text></TouchableOpacity>
        </View>
    );
}

export default LoginView;
