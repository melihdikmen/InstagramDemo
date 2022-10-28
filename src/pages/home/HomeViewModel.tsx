import {useState} from 'react';
import PostData from '../../models/PostData';
import ApiRequest from '../../net/ApiRequest';

const HomeViewModel = () => {
  const {getPosts} = ApiRequest();
  const [posts, setPosts] = useState<PostData[]>();

  const getPostDatas = () => {
    getPosts(
      (results: PostData[]) => {
        setPosts(results);
      },
      (error: String) => console.error(error),
    );
  };

  return {getPostDatas,posts};
};

export default HomeViewModel;
