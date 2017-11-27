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
  CardContent
} from 'react-native-card-view';

import {getExcursions} from "../api_requests/requests";

class ListExcursions extends Component{

  constructor(){
    super();
    this.state = {
      excursions: [],
      refreshing: false
    }
  }

  componentDidMount(){
    this.getAllExcursions();
  }

  getAllExcursions(){
    getExcursions((data) => {
      this.setState({
        excursions: data,
        refreshing: false
      });
    });
  }

  refreshExcursions = () => {
    this.setState({
      refreshing: true
    }, () => {
      this.getAllExcursions();
    });
  }

  showExcursion(excursion){
    Actions.excursion({excursion: excursion});
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem(item){
    return(
      <TouchableHighlight onPress={() => {this.showExcursion(item)}}
                          underlayColor = 'azure'>
        <View>
          <Card styles={{card: {width: 330,flex: 1,
                        flexDirection: 'column', marginBottom: 30, backgroundColor: 'white'}}
                      }
          >
            <CardImage>
              <Image
                style={{width: 350, height: 200}}
                source={{uri: item.foto}}
              />
            </CardImage>
            <CardTitle>
              <Text style={styles.title}>{item.descripcion}</Text>
            </CardTitle>

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
                  refreshing = {this.state.refreshing}
                  onRefresh = {this.refreshExcursions}
                  keyExtractor = {this._keyExtractor}
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