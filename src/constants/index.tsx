import {Dimensions} from 'react-native';

export const ROUTE_NAMES = {
  LOGIN_PAGE: 'login',
  HOME_PAGE: 'home',
  SEARCH_PAGE: 'search',
  TAB_NAVIGATOR: 'tab',
};

export const LOCAL_IMAGES = {
  INSTAGRAM_LOGO: require('../assets/img/instagram_logo.png'),
};

export const ICONS = {
  HIDE_PASSWORD: require('../assets/icons/hide_password.png'),
  SHOW_PASSWORD: require('../assets/icons/show_password.png'),
  FACEBOOK_LOGO: require('../assets/icons/facebook-logo.png'),
  ADD_ICON: require('../assets/icons/more.png'),
  LIKE: require('../assets/icons/heart.png'),
  DM: require('../assets/icons/chat.png'),
  MENU: require('../assets/icons/menu.png'),
  COMMENT: require('../assets/icons/comment.png'),
  SEND: require('../assets/icons/send.png'),
  SAVE: require('../assets/icons/save_instagram.png'),
  SEARCH: require("../assets/icons/search.png")
};

export const DEVICE_SIZES = {
  WIDTH: Dimensions.get('screen').width,
  HEIGHT: Dimensions.get('screen').height,
};

export const APP_SETTTINGS = {
  // API_URL: 'https://mocki.io/v1/08d00d2c-3bd4-42dd-8a3c-07f9a541b804',
  "API_URL":"https://mocki.io/v1/a8186aca-a430-4187-8bf2-ce1fa5b0faf6"
};
