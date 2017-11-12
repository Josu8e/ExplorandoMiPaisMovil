import React, {Component} from 'react';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent
} from 'react-native-card-view';

import Icon from 'react-native-vector-icons/FontAwesome';
import {getThemes} from '../api_requests/requests';

class ThemesExcursions extends Component{

  constructor(){
    super();
    this.state = {
      themes: []
    }
    this._renderStarButton = this._renderStarButton.bind(this);
    this._renderItem = this._renderItem.bind(this);
  }

  componentDidMount(){
    getThemes(data => {
      this.setState({
        themes: data,
        favorites: []
      });
    });
  }

  _renderStarButton(item){
    if(this.state.favorites.includes(item)){
      return(
        <Icon name = 'star'
              size = {25}
              color = 'orange'
        />
      )
    }
    else{
      return(
        <Icon name = 'star-o'
              size = {25}
              color = 'orange'
        />
      )
    }
  }

  _renderItem(item){
    return(
      <TouchableWithoutFeedback underlayColor = 'azure'>
        <View>
          <Card styles={{card: {width: 330,flex: 1,
            flexDirection: 'column', marginBottom: 30, backgroundColor: 'white'}}
            }>

            <CardTitle>
              <View style = {styles.titleContainer}>
                <Text style={styles.title}>
                  {item.name}
                </Text>

                <TouchableWithoutFeedback onPress={() => {
                  this.state.favorites.push(item);
                }}>

                  {this._renderStarButton(item)}

                </TouchableWithoutFeedback>
              </View>
            </CardTitle>

            <CardImage>
              <Image
                style={{width: 350, height: 200}}
                source={{uri: item.img}}
              />
            </CardImage>

          </Card>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  render(){
    return(
      <View style = {styles.content}>
        <FlatList data = {this.state.themes}
                  renderItem = {({item}) => this._renderItem(item)}
                  showsVerticalScrollIndicator = {false}
                  style = {{marginTop: 10}}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  excursionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 100,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  }
});


export default ThemesExcursions;