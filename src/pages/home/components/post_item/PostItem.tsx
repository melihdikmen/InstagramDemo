import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PostData from '../../../../models/PostData';

import PostButton from './PostButtons';
import PostCommentsArea from './PostCommentsArea';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostLikeCount from './PostLikeCount';

interface PostItemProps {
  item : PostData;
}
const PostItem: React.FC<PostItemProps> = (props) => {
  return (
    <View style={styles.container}>
      <PostHeader  username={props.item?.username ??""}  profileImage= {props.item?.profileImage ?? ""}  />
      <PostImage images={props.item.images  ?? []} isVideo = {props.item.isVideo} videoUrl = {props.item.videoUrl}  />
      <PostButton />
      <PostLikeCount  likeCount={props.item.likeCount!}/>
      <PostCommentsArea commentCounts={props.item.commentCount!} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white',},
});

export default PostItem;
