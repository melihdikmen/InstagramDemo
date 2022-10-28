import {View, Text} from 'react-native';
import { DEVICE_SIZES } from '../../../../constants';

interface PostLikeCountProps {
  likeCount : number
}

const PostLikeCount:React.FC<PostLikeCountProps> = (props) => {
  return (
    <View style={{position: 'relative', marginTop:2}}>
      <Text style={{fontSize: 11, marginLeft: 10}}>{props.likeCount+" likes "}</Text>
    </View>
  );
};

export default PostLikeCount
