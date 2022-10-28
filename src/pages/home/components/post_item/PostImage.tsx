import {View, StyleSheet, Text, Image} from 'react-native';
import {SwiperFlatList, Pagination} from 'react-native-swiper-flatlist';


import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';
import { DEVICE_SIZES } from '../../../../constants';
import ImageData from '../../../../models/ImageData';
interface PostImageProps {
  images?: ImageData[];
  isVideo?: boolean | false;
  videoUrl?: string;
}

const PostImage: React.FC<PostImageProps> = props => {
  // console.log(props.videoUrl)
  return props.isVideo ? (
    <VideoPlayer videoUrl={props.videoUrl} />
  ) : (
    <ImageView images={props.images} />
  );
};

const VideoPlayer: React.FC<PostImageProps> = props => {
  return (
    <Video
      resizeMode='cover'
      repeat
      muted = {true}
      source={{uri: props.videoUrl}}
      style={{width:DEVICE_SIZES.WIDTH,height:250,marginBottom:DEVICE_SIZES.HEIGHT *0.045}}
    />
  );
};

const ImageView: React.FC<PostImageProps> = props => {
  return (
    <SwiperFlatList
      showPagination
      data={props.images}
      PaginationComponent={props => (
        <Pagination
          {...props}
          paginationStyle={styles.paginationStyle}
          paginationStyleItem={styles.paginationItemStyle}
          paginationDefaultColor="#edeef0"
          paginationActiveColor="#48a4fa"
        />
      )}
      renderItem={({item}: {item: ImageData}) => (
        // <View style={[styles.child]}>
        <FastImage
          style={styles.imageViewStyle}
          source={{uri: item.imageUrl}}
        />
        // </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  child: {width: DEVICE_SIZES.WIDTH, justifyContent: 'center'},
  text: {fontSize: DEVICE_SIZES.WIDTH * 0.5, textAlign: 'center'},
  paginationStyle: {
    marginTop: 20,
    marginBottom: 0,
    position: 'relative',
    alignSelf: 'center',
    flex: 1,
  },
  paginationItemStyle: {
    borderRadius: 10,
    height: 5,
    width: 5,
    marginHorizontal: 2,
  },
  imageViewStyle  : {width: DEVICE_SIZES.WIDTH, height: 300}
});

export default PostImage;
