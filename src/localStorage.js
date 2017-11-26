import {
  AsyncStorage
} from 'react-native';

const _setItem = async (key, value) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

const _getItem = async (key, callback) => {
  let response = await AsyncStorage.getItem(key);
  callback(JSON.parse(response));
};

export {
  _setItem,
  _getItem
}