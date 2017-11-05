import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight
} from 'react-native';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

import {getExcursions} from "../api_requests/requests";

class ListExcursions extends Component{

  constructor(){
    super();
    this.state = {
      excursions: []
    }
  }

  componentDidMount(){
    getExcursions(data => {
      this.setState({
        excursions: data
      });
    });
  }

  showExcursion(excursion){
    Actions.excursion({excursion: excursion});
  }

  _renderItem(item){
    return(
      <TouchableHighlight onPress={() => {this.showExcursion(item)}}
                          underlayColor = 'azure'>
        <View>
          <Card styles={{card: {width: 330,flex: 1,
                        flexDirection: 'column', marginBottom: 30}}
                      }
          >
            <CardImage>
              <Image
                style={{width: 350, height: 200}}
                source={{uri: item.mainImage}}
              />
            </CardImage>
            <CardTitle>
              <Text style={styles.title}>{item.name}</Text>
            </CardTitle>
            <CardContent>
            </CardContent>
          </Card>
        </View>
      </TouchableHighlight>
    )
  }

  render(){
    return(
      <View style = {styles.content}>
        <FlatList data = {this.state.excursions}
                  renderItem = {({item}) => this._renderItem(item)}
                  showsVerticalScrollIndicator={false}
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
  title: {
    fontSize: 18,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  }
});

export default ListExcursions;