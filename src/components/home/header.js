import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => (
  <View style = {styles.container}>
    <TouchableWithoutFeedback onPress={() => {props.toggle()}}>
      <Icon
        name="bars"
        color="black"
        size={25}
        style = {{marginLeft: '2%'}}
      />
    </TouchableWithoutFeedback>
    <Icon
      name = 'search'
      color = 'black'
      size = {25}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 10
  }
});

export default Header;