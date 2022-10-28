import React from 'react';
import {Text, View,Image, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import { ICONS } from '../../../../constants';


interface PostHeaderProps {
  username : string
  profileImage : string
}

const PostHeader :React.FC<PostHeaderProps> = (props) => {
 

  return (
    <View style={styles.container}>
     <View style={styles.imageAndName} >
     <FastImage
        style={styles.profileImage}
        source={{
          uri:props.profileImage ,
        }}
      />
      <Text style={styles.name}>{props.username}</Text>
     </View>
      <Image style={styles.menuButton}   source={ICONS.MENU} />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{flexDirection: 'row',height:50,alignItems:"center"},
    imageAndName : {flexDirection:"row",flex:2,alignItems:"center"},
    profileImage : {width:30,height:30,borderRadius:30,marginLeft:10},
    name : {marginLeft:10},
    menuButton : {width:20,height:20,opacity:0.5,marginRight:10}

})

export default PostHeader;
