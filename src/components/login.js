import React, {Component} from 'react';
import forest from '../images/forest_original.jpg';
import video from '../promoVideo/beachhttps://github.com/Josu8e/ExplorandoMiPaisMovil.git.mp4';
import hashtag from '../images/hashtag.png';

import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Video from "react-native-video";
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

class Login extends Component{
  render(){

    return(
      <View>
        {/* Background Image */}
        <Video repeat source={video} resizeMode="cover" style={StyleSheet.absoluteFill} />
        {/*<Image source={forest}*/}
               {/*style = {styles.container}/>*/}
        <View style = {styles.hashtag}>
          {/* Hashtag Text */}
          <Text style = {styles.hastagText}>
            #explorandomipaís
          </Text>
        </View>
        {/* Buttons */}
        <View style = {styles.buttons}>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            {...iconStyles}
            onPress={() => { Actions.home(); }}
          >
            Login with Facebook
          </Icon.Button>
          <Icon.Button
            name="google"
            backgroundColor="#DD4B39"
            {...iconStyles}
            onPress={() => { Actions.home(); }}
          >
            Or with Google
          </Icon.Button>
        </View>
      </View>
    )
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
  container: {
    resizeMode: 'stretch',
    flex: 1,
    position: 'absolute',
    width: width,
    height: height,
    justifyContent: 'center'
  },

  hashtag: {
    marginTop: (height / 2) - 60
  },

  hastagText: {
    fontFamily: 'Roboto',
    color: 'white',
    textAlign: 'center',
    fontSize: 40
  },

  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 40,
    marginTop: (height / 2) - 100
  }

});

export default Login;