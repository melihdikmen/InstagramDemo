import {FlatList, View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './HomeViewStyle';
import Header from '../../components/header/Header';
import PostItem from './components/post_item/PostItem';
import HomeViewModel from './HomeViewModel';
import {useEffect} from 'react';
import {ICONS, ROUTE_NAMES} from '../../constants';
import SearchBarCustom from '../../components/search_bar/SearchBarCustom';
import { useNavigation } from '@react-navigation/native';


const HomeView = () => {
  const {getPostDatas, posts} = HomeViewModel();
  const navigation = useNavigation();
  useEffect(() => {
    getPostDatas();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
    <SearchBarCustom disableTextInput={true} onPress={()=> navigation.navigate(ROUTE_NAMES.SEARCH_PAGE)}  />
      <FlatList
        renderItem={({item}) => <PostItem item={item} />}
        data={posts}
      />
    </View>
  );
};

export default HomeView;
