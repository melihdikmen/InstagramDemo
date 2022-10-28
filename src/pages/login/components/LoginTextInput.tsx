import {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {DEVICE_SIZES} from '../../../constants';

interface LoginTextInputProps {
  placeholder: string;
  rightIcon?: JSX.Element;
  secureTextEntry?: boolean;
  onChangeText? : (text :string) => void
}

const LoginTextInput = (props: LoginTextInputProps) => {
  return (
    <View style={styles.textInputView}>
      <TextInput
        style={styles.textInputArea}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onChangeText = {props.onChangeText}
      />
      {props.rightIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputView: {
    flexDirection: 'row',
    width: DEVICE_SIZES.WIDTH * 0.9,
    backgroundColor: '#fafafa',
   height:50,
    paddingLeft:10,
    borderWidth: 0.5,
    borderColor: '#d9d7d7',
    borderRadius: 5,
    marginTop: 15,
    alignItems:"center",
    paddingRight:10
  },

  textInputArea: {
    flex: 4,
    marginRight: 5,
  },
});

export default LoginTextInput;
