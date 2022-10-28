import {TouchableOpacity, Text} from 'react-native';

interface PostCommentsAreaProps  {
  commentCounts  : number
}

const PostCommentsArea : React.FC<PostCommentsAreaProps> = (props) => {
  return (
    <TouchableOpacity style={{position: 'relative', flexDirection: 'row',marginTop:5}}>
      <Text style={{fontSize: 11, marginLeft: 10, color: 'grey'}}>
        View all {props.commentCounts} comments
      </Text>
    </TouchableOpacity>
  );
};

export default PostCommentsArea;
