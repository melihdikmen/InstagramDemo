import {useState} from 'react';
import PostData from '../../models/PostData';
import ApiRequest from '../../net/ApiRequest';

const SearchViewModel = () => {
  const {getPosts} = ApiRequest();
  const [posts, setPosts] = useState<PostData[]>();
  const [filteredPosts, setFilteredPost] = useState<PostData[]>();

  const getPostDatas = () => {
    getPosts(
      (results: PostData[]) => {
        setPosts(results);
        setFilteredPost(results);
      },
      (error: String) => console.error(error),
    );
  };
  const searchPost = (searchText: string) => {
    if (searchText === '') {
      setFilteredPost(posts)
    } else {
      var filtered = posts?.filter(item => item.username?.toLowerCase()?.includes(searchText.toLowerCase())|| item.id?.toString().includes(searchText.toLowerCase()) );
      setFilteredPost(filtered);
    }
  };

  return {getPostDatas, filteredPosts,searchPost};
};

export default SearchViewModel;
