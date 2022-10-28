import {StyleSheet} from 'react-native';
import {DEVICE_SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  instagramLogo: {
    width: 200,
    height: 70,
    marginBottom: 30,
  },

  visibleIcon: {height: 20, width: 20, alignItems: 'center', opacity: 0.5},

  forgotPasswordView: {
    alignItems: 'flex-end',
    width: DEVICE_SIZES.WIDTH * 0.9,
    marginTop: 20,
  },

  forgotPasswordText: {color: '#2292cf', fontSize: 12},

  loginButton: {
    backgroundColor: '#77c8f8',
    width: DEVICE_SIZES.WIDTH * 0.9,
    padding: 12,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 5,
  },

  dividerContainer: {
    width: DEVICE_SIZES.WIDTH * 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  dividerFirst: {
    borderBottomWidth: 0.3,
    flex: 4,
    borderBottomColor: '#d9d7d7',
  },

  dividerText: {
    fontSize: 12,
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5,
    color: '#8e8e8e',
  },

  facebookLoginContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookLogo: {height: 25, width: 25},
  facebookLoginText: {fontSize: 12, color: '#078ddf'},
  dividerSignUp: {
    borderBottomWidth: 0.4,
    width: DEVICE_SIZES.WIDTH,
    borderBottomColor: '#d9d7d7',
    position : 'absolute',
    bottom :DEVICE_SIZES.HEIGHT * 0.08
  },

  signUpArea : {position :'absolute',bottom: 20,flexDirection : "row"},

  dontHaveAccountText : {fontSize : 12, color : "grey",marginRight : 5},
  signUpText : {fontSize : 12,color: "#0294cf"}
});
