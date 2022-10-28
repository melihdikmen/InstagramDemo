import {APP_SETTTINGS} from '../constants';

const ApiRequest = () => {
  const getPosts = (onSuccess: Function, onError: Function) => {
    fetch(APP_SETTTINGS.API_URL)
      .then(response => response.json())
      .then(data => onSuccess(data))
      .catch(error => onError(error));
  };

  return {getPosts};
};

export default ApiRequest;
