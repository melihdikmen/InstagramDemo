import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {DEVICE_SIZES, ICONS, LOCAL_IMAGES} from '../../constants';
import Iconbutton from '../icon_button/IconButton';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={{flex: 4,marginLeft:5}}>
        <Image
          style={{height: 60, width: 100}}
          source={LOCAL_IMAGES.INSTAGRAM_LOGO}
          resizeMode={'contain'}
        />
      </View>
      <View style={{ flexDirection: 'row',marginRight:15}}>
        <Iconbutton iconPath={ICONS.ADD_ICON} />
        <Iconbutton iconPath={ICONS.LIKE} />
        <Iconbutton iconPath={ICONS.DM} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    header : {
        flexDirection: "row",
        width:DEVICE_SIZES.WIDTH,
        alignItems:"center",
      }
    
})

export default Header;
