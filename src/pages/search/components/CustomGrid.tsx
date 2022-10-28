import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';
import {DEVICE_SIZES} from '../../../constants';
import PostData from '../../../models/PostData';

interface CustomGridProps {
  posts: PostData[] | [];
}

const CustomGrid: React.FC<CustomGridProps> = props => {
  return (
    <FlatList
      style={styles.flatList}
      data={props.posts}
      numColumns={3}
      renderItem={({item}) => renderItem(item)}
    />
  );
};

const renderItem = (item: PostData) => {
  return (
    <TouchableOpacity style={styles.imageTouchable}>
      {item.isVideo ? (
        <Video
          source={{uri: item.videoUrl}}
          style={styles.image}
          resizeMode="cover"
          repeat
          muted
        />
      ) : (
        <FastImage
          style={styles.image}
          source={{
            uri: item.images ? item!.images![0].imageUrl : '',
          }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: DEVICE_SIZES.WIDTH / 3,
    height:DEVICE_SIZES.WIDTH / 3,
  },
  flatList: {
    width: DEVICE_SIZES.WIDTH - 10,
  },
  imageTouchable: {
    width: DEVICE_SIZES.WIDTH / 3,
    margin: 1,
  },
});

export default CustomGrid;
