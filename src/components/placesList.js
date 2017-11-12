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

import StarButton from './starButton';
import {getPlaces} from '../api_requests/requests';

class PlacesList extends Component{

  constructor(){
    super();
    this.state = {
      places: []
    }
  }

  componentDidMount(){
    getPlaces(data => {
      this.setState({
        places: data
      });
    });
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

                <StarButton/>

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
        <FlatList data = {this.state.places}
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

export default PlacesList;