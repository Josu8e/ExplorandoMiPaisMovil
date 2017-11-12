import React, {Component} from 'react';

import {
  TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class StarButton extends Component{
  constructor(){
    super();
    this.state = {
      isFavorite: false
    }
  }

  setFavorite(){
    this.setState({
      isFavorite: !this.state.isFavorite
    });
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={() => {this.setFavorite()}}>
        <Icon  name = {(this.state.isFavorite) ? 'star' : 'star-o'}
               size = {25}
               color = 'orange'
        />
      </TouchableWithoutFeedback>
    )
  }

}

export default StarButton;