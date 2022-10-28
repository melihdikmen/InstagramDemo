import { useEffect } from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import Header from '../../components/header/Header';
import SearchBarCustom from '../../components/search_bar/SearchBarCustom';
import CustomGrid from './components/CustomGrid';
import SearchViewModel from './SearchViewModel';


const Search = () => {

  const {filteredPosts,getPostDatas,searchPost} = SearchViewModel()

  useEffect(() => {
    getPostDatas();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white',alignItems:"center"}}>
      <Header />
      <SearchBarCustom  onChangeText={(text)=>searchPost(text)  } />
     <CustomGrid posts={filteredPosts!}/>
    </View>
  );
};
export default Search;
