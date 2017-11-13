import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Tag = (props) => {
  return(
    <View style = {[styles.container, props.style]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#d6d8d7',
    height: 30,
    borderRadius: 5
  },
  text: {
    marginTop: '3%',
    marginRight: '5%',
    color: '#333'
  }
});

export default Tag;