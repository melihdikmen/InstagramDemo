import React from 'react';
import {StyleSheet, View} from 'react-native';
import Iconbutton from '../../../../components/icon_button/IconButton';
import { DEVICE_SIZES, ICONS } from '../../../../constants';


const PostButton = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', flex: 7,alignItems:"center"}}>
        <Iconbutton iconPath={ICONS.LIKE} />
        <Iconbutton iconPath={ICONS.COMMENT} />
        <Iconbutton iconPath={ICONS.SEND} />
      </View>
      <View style={{marginRight:10}}>
        <Iconbutton iconPath={ICONS.SAVE} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom:40,
    marginLeft:-5
  },
});

export default PostButton;
