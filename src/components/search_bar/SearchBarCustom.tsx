import {
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {ICONS} from '../../constants';

interface SearchBarCustomProps {
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  disableTextInput?: boolean | false;
}

const SearchBarCustom: React.FC<SearchBarCustomProps> = props => {
  return (
    <TouchableOpacity style={styles.barStyle} onPress={props.onPress}>
      <Image style={styles.searchLogo} source={ICONS.SEARCH} />
      {props.disableTextInput ? (
        <View><Text style={{color:"#cccaca"}}>Search</Text></View>
      ) : (
        <TextInput
          placeholder="Search"
          style={styles.textInput}
          onChangeText={text =>
            props.onChangeText ? props.onChangeText!(text) : () => {}
          }
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#EAEBED',
    height: 50,
    paddingLeft: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchLogo: {
    height: 17,
    width: 17,
    marginLeft: 5,
    opacity: 0.4,
    marginRight: 5,
  },
  textInput: {
    flex: 1,
  },
});

export default SearchBarCustom;
